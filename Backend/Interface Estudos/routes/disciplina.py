from flask import Flask, render_template, request, redirect, session,jsonify, url_for
from sqlalchemy import create_engine, Column, Integer, String, Date, Text, ForeignKey, PrimaryKeyConstraint, Time
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import relationship, sessionmaker, scoped_session
from datetime import datetime, timedelta
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate

import os
from flask import Blueprint, request, redirect, url_for
from models import Disciplina, AlunoDisciplina, Session

disciplina_bp = Blueprint('disciplina', __name__)

# Rota para cadastrar disciplina
@disciplina_bp.route('/cadastro_disciplina', methods=['POST'])
def cadastro_disciplina():
    if request.method == 'POST':
        idProfessor = 1  # Obtém o id do professor responsável pela disciplina
        cdgDisciplina = "A1"
        nome = "Cálculo 1"
        # Adicionar mais campos conforme necessário

        novo_cadastro = Disciplina(idProfessor=idProfessor, cdgDisciplina=cdgDisciplina, nome=nome)
        session = Session()
        session.add(novo_cadastro)
        session.commit()

        return redirect(url_for('home'))  # Redireciona para a página inicial

# Rota para atualizar disciplina
@disciplina_bp.route('/atualizar_disciplina/<int:id>', methods=['POST'])
def atualizar_disciplina(id):
    if request.method == 'POST':
        session = Session()
        disciplina = session.query(Disciplina).get(id)

        if disciplina:
            # Atualize os campos da disciplina diretamente no banco de dados
            disciplina.idProfessor = 1
            disciplina.cdgDisciplina = "111"
            disciplina.nome = "Nome da disciplina"

            session.commit()  # Salva as alterações no banco de dados

            return redirect(url_for('home'))  # Redireciona para a página inicial

# Rota para apagar disciplina
@disciplina_bp.route('/apagar_disciplina/<int:id>', methods=['POST'])
def apagar_disciplina(id):
    if request.method == 'POST':
        session = Session()
        disciplina = session.query(Disciplina).get(id)

        if disciplina:
            session.delete(disciplina)  # Remove a disciplina da sessão e do banco de dados
            session.commit()

            return redirect(url_for('home'))  # Redireciona para a página inicial

# Rota para cadastrar AlunoDisciplina
@disciplina_bp.route('/cadastro_aluno_disciplina', methods=['POST'])
def cadastro_alunoDisciplina():
    if request.method == 'POST':
        idDisciplina = 0  # Obtém o id da disciplina a ser cadastrada
        idAluno = 0  # Obtém o id do aluno

        novo_cadastro = AlunoDisciplina(idDisciplina=idDisciplina, idAluno=idAluno)
        session = Session()
        session.add(novo_cadastro)
        session.commit()



#rota de litagem da disciplina
@disciplina_bp.route('/listar_disciplinas', methods=['GET'])
def listar_disciplinas():
    session = Session()
    disciplinas = session.query(Disciplina).all()

    # Transforma os objetos Disciplina em um formato que pode ser jsonify
    disciplinas_list = [
        {
            'id': disciplina.id,
            'idProfessor': disciplina.idProfessor,
            'cdgDisciplina': disciplina.cdgDisciplina,
            'nome': disciplina.nome,
            # campos de diciplina
        }
        for disciplina in disciplinas
    ]

    return jsonify(disciplinas_list)