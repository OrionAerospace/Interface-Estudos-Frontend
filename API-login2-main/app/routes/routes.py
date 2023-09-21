from app import app, db  # Importa o objeto 'app' e o banco de dados 'db' do módulo 'app'.
from flask import jsonify  # Importa a função 'jsonify' do Flask para criar respostas JSON.
from ..views import users, helper  # Importa os módulos 'users' e 'helper' do diretório pai.

@app.route('/', methods=['GET'])  # Define uma rota raiz para requisições GET.
@helper.token_required  # Aplica o decorador 'token_required' definido no módulo 'helper'.
def root(current_user):
    """Rota para home"""
    return jsonify({'message': f'Hello {current_user.name}'})  # Retorna uma resposta JSON com uma mensagem de saudação.

@app.route('/users', methods=['POST'])  # Define uma rota para requisições POST na URL '/users'.
def post_user():
    """Rota para cadastro de usuários"""
    return users.post_user()  # Chama a função 'post_user' do módulo 'users' para cadastrar um usuário.

@app.route('/users/<id>', methods=['PUT'])  # Define uma rota para requisições PUT na URL '/users/<id>'.
def update_user(id):
    """Rota para edição de usuários pelo id"""
    return users.update_user(id)  # Chama a função 'update_user' do módulo 'users' para atualizar um usuário com o ID fornecido.

@app.route('/users', methods=['GET'])  # Define uma rota para requisições GET na URL '/users'.
def get_users():
    """Rota para mostragem de usuários"""
    return users.get_users()  # Chama a função 'get_users' do módulo 'users' para listar todos os usuários.

@app.route('/users/<id>', methods=['GET'])  # Define uma rota para requisições GET na URL '/users/<id>'.
def get_user(id):
    """Rota para mostragem de um usuário específico buscando pelo id"""
    return users.get_user(id)  # Chama a função 'get_user' do módulo 'users' para buscar e retornar um usuário pelo ID fornecido.

@app.route('/users/<id>', methods=['DELETE'])  # Define uma rota para requisições DELETE na URL '/users/<id>'.
def delete_user(id):
    """Rota para deleção de usuários pelo id"""
    return users.delete_user(id)  # Chama a função 'delete_user' do módulo 'users' para excluir um usuário com o ID fornecido.

@app.route('/auth', methods=['POST'])  # Define uma rota para requisições POST na URL '/auth'.
def authenticate():
    return helper.auth()  # Chama a função 'auth' do módulo 'helper' para autenticar um usuário.
