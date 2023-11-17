import string
import random
from os import environ

randon_str = string.ascii_letters + string.digits + string.ascii_uppercase
key = ''.join(random.choice(randon_str) for i in range(12))
DEBUG = True
SQLALCHEMY_DATABASE_URI = environ.get('DB_URL')
SQLALCHEMY_TRACK_MODIFICATIONS = False
SECRET_KEY = key
