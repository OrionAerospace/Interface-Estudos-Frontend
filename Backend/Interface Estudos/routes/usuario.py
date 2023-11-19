from flask import Flask, render_template, request, redirect, session,jsonify, url_for
from sqlalchemy import create_engine, Column, Integer, String, Date, Text, ForeignKey, PrimaryKeyConstraint, Time
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import relationship, sessionmaker, scoped_session
from datetime import datetime, timedelta
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate

import os
from flask import Blueprint, request, redirect, url_for
from models import User
from database import Session

usuario_bp = Blueprint('usuario', __name__)

@usuario_bp.route('/cadastro', methods=['POST'])
def cadastrar_usuario():
    if request.method == 'POST':
        nome = request.form['nome']
        email = request.form['email']
        cpf = request.form['cpf']
        telefone = request.form['telefone']
        username = request.form['usuario']
        password = request.form['senha']
        acesso_id = request.form['acesso']

        novo_cadastro = User(username=username, password=password, nome=nome, email=email, telefone=telefone, cpf=cpf, acesso_id=acesso_id)
        session = Session()
        session.add(novo_cadastro)
        session.commit()

        return redirect(url_for('home'))

@usuario_bp.route('/atualizar/<int:usuario_id>', methods=['POST'])
def atualizar_usuario(usuario_id):
    if request.method == 'POST':
        session = Session()
        usuario = session.query(User).get(usuario_id)

        if usuario:
            usuario.nome = request.form['nome']
            usuario.email = request.form['email']
            usuario.cpf = request.form['cpf']
            usuario.telefone = request.form['telefone']
            usuario.username = request.form['usuario']
            usuario.password = request.form['senha']
            usuario.acesso_id = request.form['acesso']

            session.commit()

            return redirect(url_for('home'))
    
    # Pode adicionar uma mensagem de erro aqui se o usuário não for encontrado
    return redirect(url_for('home'))

@usuario_bp.route('/apagar/<int:usuario_id>', methods=['POST'])
def apagar_usuario(usuario_id):
    if request.method == 'POST':
        session = Session()
        usuario = session.query(User).get(usuario_id)

        if usuario:
            session.delete(usuario)
            session.commit()

            return redirect(url_for('home'))

    # Pode adicionar uma mensagem de erro aqui se o usuário não for encontrado
    return redirect(url_for('home'))

# Mais rotas relacionadas a usuários...