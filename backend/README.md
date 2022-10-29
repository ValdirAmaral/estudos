Schema do banco:
username
name
email
password

secret: nodevue

Rotas:
/user/all = Mostra todos os users no banco
/user/add = Cadastrar usuário
/user/login = Logar usuário
/user/me = Utilizando o token no bearer responde o ID do usuário que veio do login


/hello = retorna um json simples
/ = html estático