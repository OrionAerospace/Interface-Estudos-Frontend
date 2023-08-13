from werkzeug.security import generate_password_hash
from app import db
from flask import request, jsonify
from ..models.User import Users, user_schema, users_schema

def user_by_username(username):
    """Função para a filtragem de um usuário pelo username"""
    try:
        return db.session.query(Users).filter(Users.username == username).one()
    except:
        return None

def get_users():
    """Função para o retorno de um array de usuários"""
    users = db.session.query(Users).all()
    if users:
        result = users_schema.dump(users)
        return jsonify({
            'message': 'successfully fetched', 
            'data': result
        }), 201
    
    return jsonify({
        'message': 'nothing found', 
        'data': {}
    }), 404

def get_user(id):
    """Função para o retorno de um único usuário buscando pelo id"""
    user = db.session.query(Users).get(id)
    if user:
        result = user_schema.dump(user)
        return jsonify({
            'message': 'successfully fetched', 
            'data': result
        }), 201
    
    return jsonify({
        'message': "user don't exist", 
        'data': {}
    }), 404

def post_user():
    """Função para o cadastro de usuários"""
    username = request.json['username']
    password = generate_password_hash(request.json['password'])
    name = request.json['name']
    email = request.json['email']

    user = Users(username, password, name, email)

    try:
        db.session.add(user)
        db.session.commit()
        result = user_schema.dump(user)
        return jsonify({
            'message': 'successfully registered', 
            'data': result
        }), 201
    except Exception as error:
        return jsonify({
            'message': 'unable to create', 
            'data': {}, 
            'error': f'{error}'
        }), 500
    
def update_user(id):
    """Função para a edição de usuários buscando pelo id"""
    username = request.json['username']
    password = generate_password_hash(request.json['password'])
    name = request.json['name']
    email = request.json['email']

    user = db.session.query(Users).get(id)

    if not user:
        return jsonify({
            'message': "user don't exist", 
            'data': {}
        }), 404

    try:
        user.username = username
        user.password = password
        user.name = name
        user.email = email
        db.session.commit()
        result = user_schema.dump(user)
        return jsonify({
            'message': 'successfully update', 
            'data': result
        }), 201
    except Exception as error:
        return jsonify({
            'message': 'unable to create', 
            'data': {}, 
            'error': f'{error}'
        }), 500
    
def delete_user(id):
    """Função para a deleção de usuários pelo id"""
    user = db.session.query(Users).get(id)
    if not user:
        return jsonify({
            'message': "user don't exist", 
            'data': {}
        }), 404
    
    if user:
        try:
            db.session.delete(user)
            db.session.commit()
            result = user_schema.dump(user)
            return jsonify({
                'message': 'successfully delete', 
                'data': result
            }), 201
        except Exception as error:
            return jsonify({
                'message': 'unable to delete', 
                'data': {},
                'error': f'{error}'
            }), 500