# Intruções de execução

 ### Backend
Para rodar o backend, é necessário ter instalado o MySql. Primeiramente, é necessário editar o arquivo _appsettings.Development.json_ de forma que
```
server=localhost;user=admin;password=admin;database=DB_TESTE_PRATICO
```
tenha seus dados de login:
```
server=localhost;user=SEU_USUARIO;password=SUA_SENHA;database=DB_TESTE_PRATICO
```
Depois, rode o comando para criar o banco de dados
```
dotnet ef database update DB
```
caso esteja utilizando o CLI, ou
```
Update-Database DB
```
caso esteja utilizando o package manager do Visual Studio.  
Por fim, para rodar a api, execute o comando 
```
dotnet run
```
no diretório backend/  

### Frontend
Para o frontend, primeiramente execute o comando para instalar as dependências
```
yarn install
```
depois, rode o app com
```
yarn start
```
