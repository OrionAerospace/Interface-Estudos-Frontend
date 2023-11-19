from flask import Flask, render_template, request, redirect, session,jsonify, url_for
from sqlalchemy import create_engine, Column, Integer, String, Date, Text, ForeignKey, PrimaryKeyConstraint, Time
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import relationship, sessionmaker, scoped_session
from datetime import datetime, timedelta
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate

import os
from flask import Blueprint, request, redirect, url_for
from models import Endereco, Responsavel, Alunos, Session

aluno_bp = Blueprint('aluno', __name__)

def cadastrar_endereco():
    cep = request.form['cep']
    rua = request.form['rua']
    bairro = request.form['bairro']
    estado = request.form['estado']
    complemento = request.form['complemento']

    novo_endereco = Endereco(cep=cep, rua=rua, bairro=bairro, estado=estado, complemento=complemento)
    return novo_endereco

def cadastrar_responsavel():
    nome = request.form['nome']
    telefone = request.form['telefone']
    email = request.form['email']

    novo_responsavel = Responsavel(nome=nome, telefone=telefone, email=email)
    return novo_responsavel

def cadastrar_aluno(id_usuario, id_responsavel, id_endereco):
    instituicao = request.form['instituicao']
    serie = request.form['serie']
    pret_profissional = request.form['pretProficional']

    novo_aluno = Alunos(idUsuario=id_usuario, idResponsavel=id_responsavel, idEndereco=id_endereco, instituicao=instituicao, serie=serie, pretProficional=pret_profissional)
    return novo_aluno

@aluno_bp.route('/cadastro/aluno', methods=['POST'])
def cadastro_aluno():
    if request.method == 'POST':
        try:
            session = Session()
            
            novo_endereco = cadastrar_endereco()
            session.add(novo_endereco)
            session.commit()
            
            novo_responsavel = cadastrar_responsavel()
            session.add(novo_responsavel)
            session.commit()
            
            # Simulação de obtenção dos IDs
            id_usuario = 0 # Pegar ID do usuário
            id_responsavel = 0 # Pegar ID do responsável
            id_endereco = 0 # Pegar ID do endereço
            
            novo_aluno = cadastrar_aluno(id_usuario, id_responsavel, id_endereco)
            session.add(novo_aluno)
            session.commit()
            
            return redirect(url_for('home'))
        except Exception as e:
            session.rollback()
            return "Ocorreu um erro ao cadastrar: " + str(e)

@aluno_bp.route('/atualizar/aluno/<int:id_aluno>', methods=['POST'])
def atualizar_aluno(id_aluno):
    if request.method == 'POST':
        try:
            session = Session()
            aluno = session.query(Alunos).get(id_aluno)
            if aluno:
                # Atualizar os campos do aluno conforme necessário
                aluno.instituicao = request.form['instituicao']
                aluno.serie = request.form['serie']
                aluno.pret_profissional = request.form['pretProficional']

                session.commit()
                return redirect(url_for('home'))
            else:
                return "Aluno não encontrado"
        except Exception as e:
            session.rollback()
            return "Ocorreu um erro ao atualizar: " + str(e)
