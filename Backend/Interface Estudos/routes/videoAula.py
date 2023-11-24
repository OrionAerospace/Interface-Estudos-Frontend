from flask import Flask, render_template, request, redirect, session,jsonify, url_for
from sqlalchemy import create_engine, Column, Integer, String, Date, Text, ForeignKey, PrimaryKeyConstraint, Time
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import relationship, sessionmaker, scoped_session
from datetime import datetime, timedelta
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate

import os
from flask import Blueprint, request, redirect, url_for
from models import  Conteudo,VideoAula, Session



videoAula_bp = Blueprint('conteudo', __name__)


# Rota para cadastrar video aula
@videoAula_bp.route('/cadastro_videoAula', methods=['POST'])
def cadastro_videoAula():
    if request.method == 'POST':
        idConteudo = 1 # recebe id do Conteudo que o video pertence
        titulo = "limites parte 1"
        link = "link do video"
        

        novo_cadastro = Conteudo(idConteudo=idConteudo, titulo = titulo, link = link)
        session = Session()
        session.add(novo_cadastro)
        session.commit()

        return redirect(url_for('home'))  # Redireciona para a página inicial
    


# Rota para atualizar video aula
@videoAula_bp.route('/atualizar_videoAula/<int:id>', methods=['POST'])
def atualizar_videoAula(id):
    if request.method == 'POST':
        session = Session()
        videoAula = session.query(VideoAula).get(id)

        if videoAula:
            # Atualize os campos da Video aula diretamente no banco de dados
            videoAula.idConteudo = 1
            videoAula.titulo = 'novo titulo'
            videoAula.link = 'novo link'
           

            session.commit()  # Salva as alterações no banco de dados

            return redirect(url_for('home'))  # Redireciona para a página inicial
        
# Rota para apagar videoAula
@videoAula_bp.route('/apagar_videoAula/<int:id>', methods=['POST'])
def apagar_videoAula(id):
    if request.method == 'POST':
        session = Session()
        videoAula = session.query(VideoAula).get(id)

        if videoAula:
            session.delete(videoAula)  # Remove a video aula da sessão e do banco de dados
            session.commit()

            return redirect(url_for('home'))  # Redireciona para a página inicial