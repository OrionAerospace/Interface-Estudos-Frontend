import datetime  # Importa o módulo datetime para trabalhar com datas e horas.

from app import db, ma  # Importa as bibliotecas db e ma do módulo 'app'.

# Define uma classe chamada 'Users' que representa a tabela de usuários no banco de dados.
class Users(db.Model):
    id = db.Column(db.Integer, primary_key=True, autoincrement=True)  # Define uma coluna 'id' como chave primária autoincrementável.
    username = db.Column(db.String(20), unique=True, nullable=False)  # Define uma coluna 'username' como string única e não nula.
    password = db.Column(db.String(200), nullable=False)  # Define uma coluna 'password' como string não nula.
    name = db.Column(db.String(20), nullable=False)  # Define uma coluna 'name' como string não nula.
    email = db.Column(db.String(20), unique=True, nullable=False)  # Define uma coluna 'email' como string única e não nula.
    created_on = db.Column(db.DateTime, default=datetime.datetime.now())  # Define uma coluna 'created_on' como uma data e hora com um valor padrão definido como o momento atual.

    def __init__(self, username, password, name, email):
        self.username = username  # Inicializa o atributo 'username' com o valor fornecido.
        self.password = password  # Inicializa o atributo 'password' com o valor fornecido.
        self.name = name  # Inicializa o atributo 'name' com o valor fornecido.
        self.email = email  # Inicializa o atributo 'email' com o valor fornecido.

# Define uma classe 'UsersSchema' que representa um esquema de serialização/desserialização para a classe 'Users'.
class UsersSchema(ma.Schema):
    class Meta:
        fields = ('id', 'username', 'password', 'name', 'email', 'created_on')  # Define os campos que serão incluídos na serialização/desserialização.

# Cria uma instância de 'UsersSchema' chamada 'user_schema' para serializar/desserializar objetos individuais da classe 'Users'.
user_schema = UsersSchema()

# Cria uma instância de 'UsersSchema' chamada 'users_schema' para serializar/desserializar listas de objetos da classe 'Users'.
users_schema = UsersSchema(many=True)
