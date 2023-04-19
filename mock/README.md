# Como usar

1. Abra uma nova aba no terminal

2. Adicione instale o json ou global ou no seu projeto:
    Adicionando no projeto

```
yarn add -D json-server
        ou

npm add -D json-server 

Adicionando global

yarn add -g json-server
        ou
npm add -g json-server
```

3. Execute o seguinte comando : 

```
yarn run json-server -w -p 3333 ./mock/database.json
ou
npm run json-server -w -p 3333 ./mock/database.json
```