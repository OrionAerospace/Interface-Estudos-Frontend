from app import app  # Importa o objeto 'app' do módulo 'app'.
import jwt  # Importa a biblioteca JWT para lidar com tokens JWT.
from werkzeug.security import check_password_hash  # Importa a função 'check_password_hash' do Werkzeug para verificar senhas criptografadas.
from flask import jsonify, request  # Importa a função 'jsonify' e o objeto 'request' do Flask para manipulação de JSON e solicitações HTTP.
from functools import wraps  # Importa o decorador 'wraps' da biblioteca functools para preservar metadados de funções.
import datetime  # Importa o módulo datetime para trabalhar com datas e horas.
from ..views.users import user_by_username  # Importa a função 'user_by_username' do módulo 'users' para buscar usuários por nome de usuário.

# Define uma função 'auth' para autenticar usuários usando autenticação básica (Basic Auth).
def auth():
    auth = request.authorization  # Obtém as informações de autenticação da solicitação HTTP.
    if not auth or not auth.username or not auth.password:
        return jsonify({
            'message': 'could not verify', 
            'WWW-Authenticate': 'Basic auth="Login required"'
        }), 401  # Retorna uma resposta JSON com status 401 Unauthorized se as credenciais estiverem ausentes.

    user = user_by_username(auth.username)  # Busca um usuário pelo nome de usuário fornecido.
    if not user:
        return jsonify({
            'message': 'user not found', 
            'data': {}
        }), 401  # Retorna uma resposta JSON com status 401 Unauthorized se o usuário não for encontrado.

    if user and check_password_hash(user.password, auth.password):
        # Verifica se a senha fornecida corresponde à senha armazenada no banco de dados.
        token = jwt.encode({
            'username': user.username,
            'exp': datetime.datetime.now() + datetime.timedelta(hours=12)
        }, app.config['SECRET_KEY'])  # Cria um token JWT com informações do usuário e um tempo de expiração de 12 horas.

        return jsonify({
            'message': 'Validate successfully',
            'token': token,
            'exp': datetime.datetime.now() + datetime.timedelta(hours=12)
        })  # Retorna uma resposta JSON com o token JWT se a autenticação for bem-sucedida.

    return jsonify({
        'message': 'could not verify', 
        'WWW-Authenticate': 'Basic auth="Login required"' 
    }), 401  # Retorna uma resposta JSON com status 401 Unauthorized se a senha não coincidir.

# Define um decorador 'token_required' para proteger rotas que requerem autenticação por token.
def token_required(f):
    @wraps(f)
    def decorated(*args, **kwargs):
        token = request.args.get('token')  # Obtém o token da solicitação HTTP.
        if not token:
            return jsonify({
                'message': 'token is missing',
                'data': {}
            }), 401  # Retorna uma resposta JSON com status 401 Unauthorized se o token estiver ausente.
        try:
            data = jwt.decode(token, app.config['SECRET_KEY'], algorithms='HS256')  # Decodifica o token JWT.
            current_user = user_by_username(username=data['username'])  # Obtém o usuário associado ao token.
        except Exception as error:
            return jsonify({
                'message': 'token is invalid or expired',
                'data': {},
                'error': f'{error}'
            }), 401  # Retorna uma resposta JSON com status 401 Unauthorized se o token for inválido ou expirado.
        return f(current_user, *args, **kwargs)
    return decorated  # Retorna a função decorada.

