import string
import random

randon_str = string.ascii_letters + string.digits + string.ascii_uppercase
key = ''.join(random.choice(randon_str) for i in range(12))
DEBUG = True
SQLALCHEMY_DATABASE_URI = 'mysql+pymysql://root:Orion123!@localhost/banco_api'
SQLALCHEMY_TRACK_MODIFICATIONS = False
SECRET_KEY = key
