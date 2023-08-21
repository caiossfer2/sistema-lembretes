### Premissas assumidas
- O projeto tem uma entidade: o lembrete. Tal entidade possui os atributos id, nome e data;
- A função *sort* do javascript será utilizada para ordenar as datas;
- A data inserida deve ser ao menos o dia atual;
- Será necessário converter a data digitada para o formato yyyy-mm-dd para a comparação entre datas, e também converter a data retornada do backend para o formato utilizado no Brasil;

### Decisões de projeto
 - Utilização do TypeScript
 - Escolha do banco de dados MySql por já ter familiaridade com seu uso;
 - Utilização da biblioteca styled-components;
 - Divisão do frontend nas pastas *controllers*, *services*, *components* e *types*;
 - Divisão do backend nas pastas *Controllers*, *Data* e *Model*;

## Intruções de execução

 ### Backend
Para rodar o backend, é necessário ter instalado o MySql. Primeiramente, é necessário editar o arquivo _appsettings.Development.json_ de forma que
```
server=localhost;user=admin;password=admin;database=DB_TESTE_PRATICO
```
tenha seus dados de login:
```
server=localhost;user=SEU_USUARIO;password=SUA_SENHA;database=DB_TESTE_PRATICO
```
Depois, no diretório *backend*, rode o comando para criar o banco de dados
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
