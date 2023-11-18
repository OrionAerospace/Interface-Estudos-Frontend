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

# Configuração do SQLAlchemy
app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql+mysqlconnector://root:admin@localhost/InterfaceEstudos'
engine = create_engine(app.config['SQLALCHEMY_DATABASE_URI'])

db = SQLAlchemy(app)
migrate = Migrate(app, db)

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
    link = Column(Text)
    nome = Column(Text)
    
### Descomente para criar as tabelas no banco
'''
Base.metadata.create_all(engine)  
Session = sessionmaker(bind=engine)
session = Session()
'''

@app.route('/', methods=['GET', 'POST'])
def login():   


    if request.method == 'POST':
        username = request.form['username']
        password = request.form['password']

        user = User.query.filter_by(username=username, password=password).first()
        if user:
            session['username'] = user.username
            return redirect(url_for('home'))        
            
        else:
            error_message = 'usuario ou senha incorretos. Tente novamente.'
            return render_template('login.html', error_message=error_message)

    return render_template('login.html')


###################### Usuario ##############################

## obs. "request.form" estao solicitando os dados de um forms HTML mas é possivel pegar de outras formas

@app.route('/cadastro/usuario', methods = ['GET','POST'])#rota de cadastro de usuario
def cadastro_usuario():  

    if request.method == 'POST':
        
        nome = request.form['nome']
        email = request.form['email']
        cpf = request.form['cpf']
        telefone = request.form['telefone']
        username = request.form['usuario']
        password = request.form['senha']
        acesso_id = request.form['acesso']     
        

        novo_cadastro = User(username=username, password=password, nome = nome, email = email, telefone = telefone, cpf = cpf, acesso_id = acesso_id)
        session = Session()
        session.add(novo_cadastro)
        session.commit()

        
        return  redirect(url_for('home'))
    


@app.route('/atualizar/usuario/', methods=['POST'])
def atualizar_usuario():
    if request.method == 'POST':
        session = Session()
        usuario = session.query(User).get(2) # o "2" é o id do usuario a ser editado("criar metodo para selecionar usuario" )

        if usuario:
            # Atualize os campos do usuário diretamente no banco de dados
            usuario.nome = request.form['nome']
            usuario.email = request.form['email']
            usuario.cpf = request.form['cpf']
            usuario.telefone = request.form['telefone']
            usuario.username = request.form['usuario']
            usuario.password = request.form['senha']
            usuario.acesso_id = request.form['acesso']

            # Não é necessário chamar session.add() neste caso, pois o usuário já existe na sessão.

            # Salve as alterações diretamente no banco de dados
            session.commit()

            return redirect(url_for('home'))
        

@app.route('/apagar/usuario/', methods=['POST'])
def apagar_usuario():
    if request.method == 'POST':
        session = Session()
        usuario = session.query(User).get(3)

        if usuario:
            # Remova o usuário da sessão e do banco de dados
            session.delete(usuario)
            session.commit()

            return redirect(url_for('home'))
        
    return redirect(url_for('home')) # trocar por messagem de erro
        


 ###################### Aluno ##############################

@app.route('/cadastro/aluno', methods = ['GET','POST'])# cadastro de usuario-aluno
def cadastro_aluno():  ### ver necessidade de didividir em 3 funçces cd_endereco/ cd_responsavel/ cd_aluno 

    if request.method == 'POST':

            #cadastro, endereco do aluno 
            cep = request.form['cep']
            rua = request.form['rua']
            bairro = request.form['bairro']
            estado = request.form['estado']
            complemento = request.form['complemento']

            novo_cadastro = Endereco( cep = cep, rua = rua,  bairro = bairro, estado = estado, complemento = complemento )
            session = Session()
            session.add(novo_cadastro)
            session.commit()

            #cadastro responsavel do aluno
            nome = request.form['nome']
            telefone = request.form['telefone']
            email = request.form['email']

            novo_cadastro = Responsavel(nome = nome, telefone = telefone, email = email)
            session = Session()
            session.add(novo_cadastro)
            session.commit()

            #cadastro aluno
            idUsuario = 0 # pegar id do usuario
            idResponsavel  = 0 # pegar id do resp..
            idEndereco = 0 #pegar id endereco
            instituicao = request.form[instituicao]
            serie = request.form[serie]
            pretProficional = request.form['pretProficional']


            novo_cadastro = Alunos( idUsuario = idUsuario, idResponsavel = idResponsavel,  idEndereco = idEndereco, instituicao = instituicao,
                                    serie = serie, pretProficional = pretProficional)
            
            session = Session()
            session.add(novo_cadastro)
            session.commit()

 
            return  redirect(url_for('home'))
    
@app.route('/atualizar/aluno/', methods=['POST']) 
def atualizar_aluno():
     
     if request.method == 'POST':
        session = Session()
        endereco = session.query(Endereco).get(1) #seleciona o endereco com id 1

        endereco.rua = request.form['rua']
        endereco.bairro = request.form['bairro']
        # ADD OS OUTROS CAMPOS

        responsavel = session.query(Responsavel).get(1) #seleciona o responsavel com id 1

        responsavel.nome = "nome resp"


        aluno = session.query(Alunos).get(1) #seleciona o aluno com id 1

        # add campos do aluno

        
        


        return  redirect(url_for('home'))


  ###################### Professor ##############################  

@app.route('/cadastro/professor', methods = ['GET','POST'])
def cadastro_professor():  

    if request.method == 'POST':

        idUsuario = 5 #pega o id do usuario  cadastrado    
        
        #adicionar mais campos se necessario

        novo_cadastro = Professor(idUsuario = idUsuario)
        session = Session()
        session.add(novo_cadastro)
        session.commit()

        
        return  redirect(url_for('home'))
    
###################### Diciplina ##############################
    
@app.route('/cadastro/disciplina', methods = ['GET','POST'])
def cadastro_disciplina():  

    if request.method == 'POST':

        idProfessor = 1 # pega o id do professor responsavel pela diciplina  
        cdgDisciplina = "A1"  
        nome = "Calculo 1"
        
        #adicionar mais campos se necessario

        novo_cadastro = Disciplina(idProfessor= idProfessor, cdgDisciplina = cdgDisciplina, nome = nome)
        session = Session()
        session.add(novo_cadastro)
        session.commit()

        
        return  redirect(url_for('home'))
    
@app.route('/atualizar/disciplina', methods = ['GET','POST'])
def atualizar_disciplina():  

    if request.method == 'POST':
        session = Session()
        disciplina = session.query(Disciplina).get(1) # o "1" é o id da diciplina a ser alterada

        if disciplina:
            # Atualize os campos de diciplina diretamente no banco de dados
            disciplina.idProfessor =1
            disciplina.cdgDisciplina = "111"
            disciplina.nome = "nome da diciplina"
            

            # Não é necessário chamar session.add() neste caso, pois o usuário já existe na sessão.

            # Salve as alterações diretamente no banco de dados
            session.commit()

            return redirect(url_for('home'))
        


@app.route('/apagar/disciplina/', methods=['POST'])
def apagar_disciplina(id):
    if request.method == 'POST':
        session = Session()
        disciplina = session.query(User).get(id) #recebe o id da disciplina a ser apagada

        if disciplina:
            # Remova o  disciplina da sessão e do banco de dados
            session.delete(disciplina)
            session.commit()

            return redirect(url_for('home'))

        
    
    

    
@app.route('/cadastro/AlunoDisciplina', methods = ['GET','POST'])
def cadastro_alunoDisciplina():


    if request.method == 'POST':

        idDisciplina = 0 # pega o id da disciplina a ser cadastrada
        idAluno = 0 #pegar o id do aluno  

        novo_cadastro = AlunoDisciplina(idDisciplina = idDisciplina, idAluno = idAluno)
        session = Session()
        session.add(novo_cadastro)
        session.commit()
    

 
    

###################### Inicialização do app ######################

@app.route('/home')
def home():
    return render_template('home.html')

if __name__ == '__main__':
    app.run(debug=True)