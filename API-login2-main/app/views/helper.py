from app import app
import jwt
from werkzeug.security import check_password_hash
from flask import jsonify, request
from functools import wraps
import datetime
from ..views.users import user_by_username

def auth():
    auth = request.authorization
    if not auth or not auth.username or not auth.password:
        return jsonify({
            'message': 'could not verify', 
            'WWW-Authenticate': 'Basic auth="Login required"'
        }), 401

    user = user_by_username(auth.username) 
    if not user:
        return jsonify({
            'message': 'user not found', 
            'data': {}
        }), 401

    if user and check_password_hash(user.password, auth.password):
       
        token = jwt.encode({
            'username': user.username,
            'exp': datetime.datetime.now() + datetime.timedelta(hours=12)
        }, app.config['SECRET_KEY']) 

        return jsonify({
            'message': 'Validate successfully',
            'token': token,
            'exp': datetime.datetime.now() + datetime.timedelta(hours=12)
        }) 

    return jsonify({
        'message': 'could not verify', 
        'WWW-Authenticate': 'Basic auth="Login required"' 
    }), 401 

def token_required(f):
    @wraps(f)
    def decorated(*args, **kwargs):
        token = request.args.get('token')
        if not token:
            return jsonify({
                'message': 'token is missing',
                'data': {}
            }), 401
        try:
            data = jwt.decode(token, app.config['SECRET_KEY'], algorithms='HS256')
            current_user = user_by_username(username=data['username'])
        except Exception as error:
            return jsonify({
                'message': 'token is invalid or expired',
                'data': {},
                'error': f'{error}'
            }), 401
        return f(current_user, *args, **kwargs)
    return decorated

