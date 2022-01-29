# from crypt import methods
from flask import Flask
from flask import jsonify
from flask import request
from flask_cors import CORS
import app

app = Flask(__name__)
CORS(app)
app.config['JSON_SORT_KEYS'] = False

ggeett = {
    "metodo"                          : "GET",
    "resposta email e senha teste"    : True,
    "email teste"                     : "teste@gmail.com",
    "senha teste"                     : "testeTeste",
    "nome fantasia"                   : "Teste da silva",
    }

ppoosstt = {
    "metodo" : "POST",
    "email teste"   : "testeSilva@gmail.com",
    "senha teste"   : "testeTeste",
    "nome fantasia" : "Teste da silva",
    "credencias ainda não existentes": True
    }

ppuutt = {
    "metodo"                   : "PUT",
    "nova senha teste"         : True,
    "email teste ja existente" : "testeSilva@gmail.com",
    "nome de usuario"          : "Teste da silva",
    "codigo de verificação"    : True
    }

@app.route("/loguin/<email>/<senha>", methods=['POST']) # Essa rota vai ser usada para criar um loguin
def create_probe(email, senha):
    recebe_dados = request.json
    print(f"post{ppoosstt}")
    return jsonify(ppoosstt)

@app.route("/loguin/<email>/<senha>", methods=['GET']) # Essa rota vai ser usada para ter o acesso a conta do usuario
def select_the_probe(email, senha):
    recebe_dados = request.json
    print(f"get{ggeett}")
    return jsonify(ggeett)

@app.route("/loguin/<email>/<senha>", methods=['PUT']) # Essa rota vai ser usada para o usuario poder trocar sua senha 
def update_probe(email, senha):
    recebe_dados = request.json
    print(f"put{ppuutt}")
    return jsonify(ppuutt)


####### teste kkkkkkkkkkk