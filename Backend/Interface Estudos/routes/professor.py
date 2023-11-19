from flask import Flask, render_template, request, redirect, session,jsonify, url_for
from sqlalchemy import create_engine, Column, Integer, String, Date, Text, ForeignKey, PrimaryKeyConstraint, Time
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import relationship, sessionmaker, scoped_session
from datetime import datetime, timedelta
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate

import os
from flask import Blueprint, redirect, url_for, request
from models import Professor, Session

professor_bp = Blueprint('professor', __name__)

@professor_bp.route('/cadastro', methods=['POST'])
def cadastrar_professor():
    if request.method == 'POST':
        id_usuario = 5  # Simulação de obtenção do ID do usuário cadastrado

        # Lógica para obter os campos do formulário, se necessário
        # Exemplo: nome = request.form.get('nome')
        # Exemplo: email = request.form.get('email')

        novo_cadastro = Professor(idUsuario=id_usuario)
        session = Session()
        session.add(novo_cadastro)
        session.commit()

        return redirect(url_for('home'))

# Mais rotas relacionadas a professores...