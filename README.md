# Exercício Node.js 30-04

## Alunos
* Estevão Bonatto
* Henrique Bonatto
* Pedro Lucas Dall' Igna

## Instalação
### Criar arquivo `.env`
Por razões de segurança e configuração, algumas variáveis utilizadas no projeto foram definidas dentro de um arquivo de ambiente.

O arquivo `.env` deverá conter as seguintes variáveis:
* `PORT` (opcional): porta em que será aberta a API; valor padrão é `3000`
* `MONGODB_URI`: valor deverá ser igual à URL do seu cluster MongoDB; deverá ser aquela fornecida pelo MongoDB sem mostrar as credenciais, no padrão `mongodb+srv://<username>:<password>@...`.
  * Observação: É necessário manter os valores `<username>` e `<password>`, pois serão alterados durante o setup com os valores que foram definidos nas variáveis `MONGODB_USER` e `MONGODB_PASSWORD`.
* `MONGODB_USER`: username de um usuário do seu banco de dados com permissões de leitura e escrita.
* `MONGODB_PASSWORD`: senha do usuário definido anteriormente para acessar o banco de dados.

Exemplo de arquivo `.env`:
```
PORT=3000
MONGODB_URI="mongodb+srv://<username>:<password>@cluster0..."
MONGODB_USER="myUser"
MONGODB_PASSWORD="myS3cureP4ssword!"
```

### Dependências
Para instalar as dependências da aplicação basta rodar o seguinte comando na raiz do projeto:
```
npm ci
```

## Execução
Para iniciar a API, basta rodar o seguinte comando:
```
npm run serve
```

## Testes unitários
Para executar os testes unitários, basta executar o seguinte comando:
```
npm run test
```
