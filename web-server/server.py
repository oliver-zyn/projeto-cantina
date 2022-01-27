from flask import Flask # caso forem testar usem os camandos : pip install flask , pip install CORS , pip install jsonify , pip install request, pip install app
from flask import jsonify 
from flask import request
from flask_cors import CORS 
import app

app = Flask(__name__)
CORS(app)
app.config['JSON_SORT_KEYS'] = False

a = {
    "teste" : 1,
    "teste" : 2
    }

@app.route("/loguin/<email>/<senha>", methods=["POST"]) # Essa rota vai ser usada para criar um loguin
def create_probe(email, senha):
    recebe_dados = request.json
    return jsonify(a)

@app.route("/loguin/<email>/<senha>", methods=["GET"]) # Essa rota vai ser usada para ter o acesso a conta do usuario
def select_the_probe(email, senha):
    recebe_dados = request.json
    return jsonify(a)

@app.route("/loguin/<email>/<senha>", methods=["PUT"]) # Essa rota vai ser usada para o usuario poder trocar sua senha 
def update_probe(email, senha):
    recebe_dados = request.json
    return jsonify(a)


######## teste kkkkkkkkkkk