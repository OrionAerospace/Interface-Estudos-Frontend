from flask import Flask, render_template, request, redirect, session,jsonify, url_for
from sqlalchemy import create_engine, Column, Integer, String, Date, Text, ForeignKey, PrimaryKeyConstraint, Time
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import relationship, sessionmaker, scoped_session
from datetime import datetime, timedelta
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate


import os
from flask import Blueprint, render_template, redirect, url_for, request, session

auth_bp = Blueprint('auth', __name__)

# Rotas de autenticação
@auth_bp.route('/', methods=['GET', 'POST'])
def login():
    if request.method == 'POST':
        username = request.form['username']
        password = request.form['password']

        user = User.query.filter_by(username=username, password=password).first()
        if user:
            session['username'] = user.username
            return redirect(url_for('home'))
        else:
            error_message = 'Usuário ou senha incorretos. Tente novamente.'
            return render_template('login.html', error_message=error_message)

    return render_template('login.html')

@auth_bp.route('/logout')
def logout():
    session.pop('username', None)
    return redirect(url_for('auth.login'))

# Rotas comuns a todos os blueprints
@auth_bp.route('/home')
def home():
    return render_template('home.html')
