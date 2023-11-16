# API de Interface de Estudos

## Está send usado pipenv

```sh
    pipenv install --dev
    pipenv shell
```

## Como rodar esta API

```sh
    export FLASK_APP=app
    export FLASK_ENV=Development
    export FLASK_DEBUG=True

    flask run
```

## Como fazer as migrações

```sh
    flask db init
    flask db migrate
    flask db upgrade
```