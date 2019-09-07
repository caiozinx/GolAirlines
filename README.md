# GolAirlines

O objetivo principal é criar uma aplicação contendo o CRUD completo da
tabela Airplane:
Campos:
· Código do Avião
· Modelo
· Quantidade de passageiros
· Data de criação do registro
Tecnologias e patterns obrigatórios:
· FRONT-END – Angular 6
· BACK-END - .Net Core / Entity Framework Core / RESTful Api
· PATTERNS – DDD e Injeção de Dependência

# Docker

docker pull microsoft/mssql-server-linux

docker run --name testegol -e "ACCEPT_EULA=Y" -e "MSSQL_SA_PASSWORD=#CaioCarneiro" -e "MSSQL_PID=Developer" --cap-add SYS_PTRACE -p 11433:1433 -d microsoft/mssql-server-linux:2017-latest


# Migrations

Add-Migration Airplane

Update-Database
