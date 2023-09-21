# app/__init__.py

from flask import Flask  # Importa a classe Flask do Flask para criar uma instância de aplicativo.
from flask_sqlalchemy import SQLAlchemy  # Importa a extensão SQLAlchemy para interagir com o banco de dados.
from flask_marshmallow import Marshmallow  # Importa a extensão Marshmallow para serialização/desserialização de objetos.
from flask_migrate import Migrate  # Importa a extensão Migrate para migrações de banco de dados.

app = Flask(__name__)  # Cria uma instância do aplicativo Flask com o nome do módulo.
app.config.from_object('config')  # Configura o aplicativo com base nas configurações definidas no módulo 'config'.
app.app_context().push()  # Empurra o contexto do aplicativo para que as extensões possam funcionar corretamente.

db = SQLAlchemy(app)  # Cria uma instância do SQLAlchemy vinculada ao aplicativo para interagir com o banco de dados.
ma = Marshmallow(app)  # Cria uma instância do Marshmallow vinculada ao aplicativo para serialização/desserialização de objetos.
migrate = Migrate(app, db)  # Cria uma instância do Migrate vinculada ao aplicativo e ao banco de dados para migrações.

from .models import User  # Importa a classe User do módulo 'models' para definir o modelo de dados.
from .routes import routes  # Importa o módulo 'routes' para registrar as rotas do aplicativo.
