from flask import Flask, render_template, request, redirect, session,jsonify, url_for
from sqlalchemy import create_engine, Column, Integer, String, Date, Text, ForeignKey, PrimaryKeyConstraint, Time
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import relationship, sessionmaker, scoped_session
from datetime import datetime, timedelta
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate

import os
from flask import Blueprint, request, redirect, url_for
from models import Disciplina, Conteudo, Session



conteudo_bp = Blueprint('conteudo', __name__)


# Rota para cadastrar conteudo
@conteudo_bp.route('/cadastro_conteudo', methods=['POST'])
def cadastro_conteudo():
    if request.method == 'POST':
        idDiciplina = 1 # recebe id da diciplina que se relaciona ao conteudo
        nome = 'limites'
        

        novo_cadastro = Conteudo(idDiciplina=idDiciplina, nome = nome)
        session = Session()
        session.add(novo_cadastro)
        session.commit()

        return redirect(url_for('home'))  # Redireciona para a página inicial
    

# Rota para atualizar conteudo
@conteudo_bp.route('/atualizar_conteudo/<int:id>', methods=['POST'])
def atualizar_conteudo(id):
    if request.method == 'POST':
        session = Session()
        conteudo = session.query(Conteudo).get(id)

        if conteudo:
            # Atualize os campos da disciplina diretamente no banco de dados
            conteudo.idDiciplina = 1
            conteudo.nome = 'novo nome'
           

            session.commit()  # Salva as alterações no banco de dados

            return redirect(url_for('home'))  # Redireciona para a página inicial
        

# Rota para apagar conteudo
@conteudo_bp.route('/apagar_conteudo/<int:id>', methods=['POST'])
def apagar_conteudo(id):
    if request.method == 'POST':
        session = Session()
        conteudo= session.query(Conteudo).get(id)

        if conteudo:
            session.delete(conteudo)  # Remove o conteudo da sessão e do banco de dados
            session.commit()

            return redirect(url_for('home'))  # Redireciona para a página inicial




