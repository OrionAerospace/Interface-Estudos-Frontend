from app import app, db
from flask import jsonify
from ..views import users, helper

@app.route('/', methods=['GET'])
@helper.token_required
def root(current_user):
    """Rota para home"""
    return jsonify({'message': f'Hello {current_user.name}'})

@app.route('/users', methods=['POST'])
def post_user():
    """Rota para cadastro de usuários"""
    return users.post_user()

@app.route('/users/<id>', methods=['PUT'])
def update_user(id):
    """Rota para edição de usuários pelo id"""
    return users.update_user(id)

@app.route('/users', methods=['GET'])
def get_users():
    """Rota para mostragem de usuários"""
    return users.get_users()

@app.route('/users/<id>', methods=['GET'])
def get_user(id):
    """Rota para mostragem de um usuário específico buscando pelo id"""
    return users.get_user(id)

@app.route('/users/<id>', methods=['DELETE'])
def delete_user(id):
    """Rota para deleção de usuários pelo id"""
    return users.delete_user(id)

@app.route('/auth', methods=['POST'])
def authenticate():
    return helper.auth()