# Use a imagem oficial do MySQL como base
FROM mysql:latest

# Defina variáveis de ambiente para a configuração do MySQL
ENV MYSQL_ROOT_PASSWORD=rootpassword
ENV MYSQL_DATABASE=mydatabase
ENV MYSQL_USER=myuser
ENV MYSQL_PASSWORD=mypassword

# Copie um arquivo SQL personalizado (se necessário) para o diretório /docker-entrypoint-initdb.d/
# Isso será executado na inicialização para criar um banco de dados e tabelas, se necessário
COPY ./database.sql /docker-entrypoint-initdb.d/

# Exponha a porta padrão do MySQL
EXPOSE 3306

# Comando de inicialização do MySQL
CMD ["mysqld"]