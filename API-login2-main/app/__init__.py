from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_marshmallow import Marshmallow 
from flask_migrate import Migrate
from flask_cors import CORS

app = Flask(__name__)
app.config.from_object('config')
app.app_context().push()
CORS(app)

db = SQLAlchemy(app)
ma = Marshmallow(app)
migrate = Migrate(app, db)

from .models import User
from .routes import routes