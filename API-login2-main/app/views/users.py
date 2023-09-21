from werkzeug.security import generate_password_hash  # Importa a função 'generate_password_hash' do Werkzeug para criar hashes de senha seguros.
from app import db  # Importa o objeto 'db' do módulo 'app' para interagir com o banco de dados.
from flask import request, jsonify  # Importa a função 'request' e 'jsonify' do Flask para manipulação de solicitações HTTP e JSON.
from ..models.User import Users, user_schema, users_schema  # Importa a classe 'Users' e os esquemas 'user_schema' e 'users_schema' do módulo 'models.User'.

# Define uma função 'user_by_username' para buscar um usuário pelo nome de usuário.
def user_by_username(username):
    """Função para a filtragem de um usuário pelo username"""
    try:
        return db.session.query(Users).filter(Users.username == username).one()  # Executa uma consulta para encontrar um usuário com o nome de usuário fornecido.
    except:
        return None  # Retorna None se o usuário não for encontrado.

# Define uma função 'get_users' para buscar e retornar uma lista de todos os usuários.
def get_users():
    """Função para o retorno de um array de usuários"""
    users = db.session.query(Users).all()  # Executa uma consulta para obter todos os usuários.
    if users:
        result = users_schema.dump(users)  # Serializa a lista de usuários usando 'users_schema'.
        return jsonify({
            'message': 'successfully fetched', 
            'data': result
        }), 201  # Retorna uma resposta JSON com a lista de usuários se houver algum.

    return jsonify({
        'message': 'nothing found', 
        'data': {}
    }), 404  # Retorna uma resposta JSON com status 404 Not Found se nenhum usuário for encontrado.

# Define uma função 'get_user' para buscar e retornar um único usuário com base no ID.
def get_user(id):
    """Função para o retorno de um único usuário buscando pelo id"""
    user = db.session.query(Users).get(id)  # Obtém um usuário pelo ID fornecido.
    if user:
        result = user_schema.dump(user)  # Serializa o usuário usando 'user_schema'.
        return jsonify({
            'message': 'successfully fetched', 
            'data': result
        }), 201  # Retorna uma resposta JSON com o usuário se ele for encontrado.

    return jsonify({
        'message': "user don't exist", 
        'data': {}
    }), 404  # Retorna uma resposta JSON com status 404 Not Found se o usuário não existir.

# Define uma função 'post_user' para cadastrar um novo usuário.
def post_user():
    """Função para o cadastro de usuários"""
    username = request.json['username']
    password = generate_password_hash(request.json['password'])  # Gera um hash seguro da senha fornecida.
    name = request.json['name']
    email = request.json['email']

    user = Users(username, password, name, email)  # Cria uma nova instância de usuário com os dados fornecidos.

    try:
        db.session.add(user)  # Adiciona o novo usuário à sessão do banco de dados.
        db.session.commit()  # Comita a transação para persistir o usuário no banco de dados.
        result = user_schema.dump(user)  # Serializa o novo usuário usando 'user_schema'.
        return jsonify({
            'message': 'successfully registered', 
            'data': result
        }), 201  # Retorna uma resposta JSON com o usuário recém-cadastrado.

    except Exception as error:
        return jsonify({
            'message': 'unable to create', 
            'data': {}, 
            'error': f'{error}'
        }), 500  # Retorna uma resposta JSON com status 500 Internal Server Error em caso de erro.

# Define uma função 'update_user' para atualizar um usuário com base no ID.
def update_user(id):
    """Função para a edição de usuários buscando pelo id"""
    username = request.json['username']
    password = generate_password_hash(request.json['password'])  # Gera um novo hash seguro da senha fornecida.
    name = request.json['name']
    email = request.json['email']

    user = db.session.query(Users).get(id)  # Obtém o usuário pelo ID fornecido.

    if not user:
        return jsonify({
            'message': "user don't exist", 
            'data': {}
        }), 404  # Retorna uma resposta JSON com status 404 Not Found se o usuário não existir.

    try:
        user.username = username  # Atualiza os atributos do usuário com os novos valores.
        user.password = password
        user.name = name
        user.email = email
        db.session.commit()  # Comita a transação para salvar as alterações no banco de dados.
        result = user_schema.dump(user)  # Serializa o usuário atualizado usando 'user_schema'.
        return jsonify({
            'message': 'successfully update', 
            'data': result
        }), 201  # Retorna uma resposta JSON com o usuário atualizado.

    except Exception as error:
        return jsonify({
            'message': 'unable to create', 
            'data': {}, 
            'error': f'{error}'
        }), 500  # Retorna uma resposta JSON com status 500 Internal Server Error em caso de erro.

# Define uma função 'delete_user' para excluir um usuário com base no ID.
def delete_user(id):
    """Função para a deleção de usuários pelo id"""
    user = db.session.query(Users).get(id)  # Obtém o usuário pelo ID fornecido.
    if not user:
        return jsonify({
            'message': "user don't exist", 
            'data': {}
        }), 404  # Retorna uma resposta JSON com status 404 Not Found se o usuário não existir.

    if user:
        try:
            db.session.delete(user)  # Remove o usuário da sessão do banco de dados.
            db.session.commit()  # Comita a transação para excluir o usuário do banco de dados.
            result = user_schema.dump(user)  # Serializa o usuário excluído usando 'user_schema'.
            return jsonify({
                'message': 'successfully delete', 
                'data': result
            }), 201  # Retorna uma resposta JSON com o usuário excluído.

        except Exception as error:
            return jsonify({
                'message': 'unable to delete', 
                'data': {},
                'error': f'{error}'
            }), 500  # Retorna uma resposta JSON com status 500 Internal Server Error em caso de erro.

