# API de Interface de Estudos

## Como rodar esta API:

### Instale as dependências
Esta sendo usado o pipenv:

```sh
    pipenv install --dev
    pipenv shell
```

### Rode o banco de dados:
Você precisa ter instalado o docker e o docker-compose.

```sh
    docker compose up -d flask_db
```
Após isso o Docker rodará na porta 5432 o postgress que será usado pela aplicação

### Sete as variavei de desenvolvimento

```sh
    export FLASK_APP=app
    export FLASK_ENV=Development
    export FLASK_DEBUG=True
    export DB_URL=postgresql://apiapp:devpassword123@localhost:5432/APIEstudos
```

### Rode as migrações

```sh
    flask db init
    flask db migrate
    flask db upgrade
```

Se tiver algum problema com a primeira migração, isso pode resolver:

```sh
    flask db stamp head
```

### Finalmente

```sh
    flask run
```