from flask import Flask, render_template, request, redirect, session,jsonify, url_for
from sqlalchemy import create_engine, Column, Integer, String, Date, Text, ForeignKey, PrimaryKeyConstraint, Time
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import relationship, sessionmaker, scoped_session
from datetime import datetime, timedelta
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate

import os
from app import db

Base = declarative_base()
Session = scoped_session(sessionmaker(bind=engine))
Base.query = Session.query_property()

class EnumAcesso(Base):
    __tablename__ = 'enum_acesso'
    id = Column(Integer, primary_key=True)
    nivel_acesso = Column(String(30))

class User(Base):
    __tablename__ = 'user'
    idUsuario = Column(Integer, primary_key=True,autoincrement=True)
    nome = Column(String(50))
    email = Column(String(60))
    cpf = Column(String(20))
    telefone = Column(String(20))
    username = Column(String(50))
    password = Column(String(100))
    acesso_id = Column(Integer, ForeignKey('enum_acesso.id'))
    acesso = relationship('EnumAcesso', backref='user')

class Responsavel(Base):
    __tablename__ = 'responsavel'
    idResponsavel = Column(Integer, primary_key=True, autoincrement=True)
    nome = Column(String(50))
    telefone = Column(String(20))
    email = Column(String(60))

class Endereco(Base):
    __tablename__ = 'endereco'
    idEndereco = Column(Integer, primary_key=True, autoincrement=True)
    cep = Column(String(20))
    rua = Column(String(60))
    bairro = Column(String(40))
    estado = Column(String(30))
    complemento = Column(String(50))

class Alunos(Base):
    __tablename__ = 'alunos'
    idAluno = Column(Integer, primary_key=True, autoincrement=True)
    idUsuario = Column(Integer,ForeignKey('user.idUsuario'))
    idResponsavel = Column(Integer,ForeignKey('responsavel.idResponsavel'))
    instituicao = Column(String(60))
    serie = Column(String(8))
    pretProfissional = Column(String(60))
    idEndereco = Column(Integer,ForeignKey('endereco.idEndereco'))   

class Professor(Base):
    __tablename__= 'professor'
    idProfessor = Column(Integer, primary_key=True, autoincrement=True)
    idUsuario = Column(Integer, ForeignKey('user.idUsuario'))

class Disciplina(Base):
    __tablename__= 'disciplina'
    idDisciplina = Column(Integer, primary_key=True, autoincrement=True)
    idProfessor = Column(Integer, ForeignKey('professor.idProfessor'))
    cdgDisciplina = Column(String(8))
    nome = Column(String(30))

class AlunoDisciplina(Base):
    __tablename__= 'alunoDisciplina'
    idDiciplina = Column(Integer, ForeignKey('disciplina.idDisciplina'),primary_key=True)
    idaluno = Column(Integer, ForeignKey('alunos.idAluno'), primary_key= True)

class Conteudo(Base):
    __tablename__= 'conteudo' 
    idDiciplina = Column(Integer, ForeignKey('disciplina.idDisciplina'),primary_key=True)
    idConteudo = Column(Integer, primary_key= True, autoincrement=True)
    nome = Column(String(50))

class VideoAula(Base):
     __tablename__= 'videoAula'
     idVideo = Column(Integer, primary_key=True, autoincrement=True)
     idConteudo = Column(Integer, ForeignKey('conteudo.idDConteudo'),primary_key=True)
     titulo = Column(String(50))
     link= Column(Text)

class Exercicios(Base):
    __tablename__ = 'exercicios'
    idExercicios = Column(Integer, primary_key=True, autoincrement=True)
    idDiciplina = Column(Integer, ForeignKey('disciplina.idDisciplina'),primary_key=True)
    #add campos necessarios para os exercicios / definir como sera registrado as perguntas e respostas
    


    
### Descomente para criar as tabelas no banco
'''
Base.metadata.create_all(engine)  
Session = sessionmaker(bind=engine)
session = Session()
'''