from flask import Flask, render_template, request, redirect, session,jsonify, url_for
from sqlalchemy import create_engine, Column, Integer, String, Date, Text, ForeignKey, PrimaryKeyConstraint, Time
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import relationship, sessionmaker, scoped_session
from datetime import datetime, timedelta
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate

import os

app = Flask(__name__)
app.secret_key = '1234567890'
app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql+mysqlconnector://root:admin@localhost/InterfaceEstudos'


# Configuração do SQLAlchemy
engine = create_engine(app.config['SQLALCHEMY_DATABASE_URI'])
db = SQLAlchemy(app)
migrate = Migrate(app, db)

# Importar módulos de rotas após a criação do app, caso contrário, as rotas não terão acesso ao app
from routes import auth, usuario, aluno, professor, disciplina

# Registro de blueprints
app.register_blueprint(auth.auth_bp)
app.register_blueprint(aluno.aluno_bp)
app.register_blueprint(disciplina.disciplina_bp)
app.register_blueprint(professor.professor_bp)
app.register_blueprint(usuario.usuario_bp)


if __name__ == '__main__':
    app.run(debug=True)