# from crypt import methods
from flask import Flask
from flask import jsonify
from flask import request
from flask_cors import CORS
import app

app = Flask(__name__)
CORS(app)
app.config['JSON_SORT_KEYS'] = False

# lista responsavel por abordar todos os outros dicionarios onde guardam os dados {
funcoes_de_usuario = list()
# }

# Dicionarios para armazenar os dadostemporariamente antes de enviar paraobanco de dados {
novo_usuario = dict()
nova_senha = dict()
loguin_do_usuario = dict()
# }

# Aqui estou salvando os dicionarios na lista para poder ter um acesso mais simples a estes dados {
funcoes_de_usuario.append(novo_usuario)
funcoes_de_usuario.append(nova_senha)
funcoes_de_usuario.append(loguin_do_usuario)
# }

# Aqui está a rota http usada para acessarmos os dados da pg web e assim criarmos um usuario {
@app.route("/loguin/<nome>/<sobre_nome>/<email>/<usuario>/<senha>", methods=['POST'])
# }

# Aqui está a função que vai tratar os nossos dados vindos da pagina da forma devida { 
def cria_loguin (nome, sobre_nome, email, usuario, senha):

# Aqui estou nomeando variaveis locais para poder tratar os dados do usuario {
    nome_do_usuario = nome
    sobre_nome_do_usuario = sobre_nome
    email_do_usuario = email
    usuario_de_usuario = usuario
    senha_do_usuario = senha
# }

# Aqui estou adicionando as variveis recemcriadas ao dicionario onde eles serão salvos temporariamente antes de salvar no banco de dados {
    novo_usuario['nome_do_usuario'] = nome_do_usuario
    novo_usuario['sobre_nome_do_usuario'] = sobre_nome_do_usuario 
    novo_usuario['email_do_usuario'] = email_do_usuario 
    novo_usuario['usuario_de_usuario'] = usuario_de_usuario 
    novo_usuario['senha_do_usuario'] = senha_do_usuario
# } 

# Fiz um for temporario só para ver se deu certo { 
    for teste_paraver_se_deu_certo in funcoes_de_usuario[0] :  
        print(f"novo usuario : {teste_paraver_se_deu_certo}")
# }
    return jsonify("True")

# }

@app.route("/loguin/<email>/<senha>", methods=['GET']) # Essa rota vai ser usada para ter o acesso a conta do usuario
def verificação_de_loguin (email, senha):
    recebe_dados = request.json
    # print(f"get{ggeett}")
    # return jsonify(ggeett)

@app.route("/loguin/<email>/<usuario>/<nova_senha>", methods=['PUT']) # Essa rota vai ser usada para o usuario poder trocar sua senha 
def nova_senha_de_loguin (email, usuario, nova_senha):
    recebe_dados = request.json
    # print(f"put{ppuutt}")
    # return jsonify(ppuutt)
