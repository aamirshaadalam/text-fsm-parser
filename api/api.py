import flask
from flask_cors import CORS

app = flask.Flask(__name__)
CORS(app)
app.config["DEBUG"] = True


@app.route('/', methods=['GET'])
def home():
    response = "API running at port number 5000"
    return response


@app.route('/result', methods=['POST'])
def parseOutput():
    output = flask.request.json['output']
    template = flask.request.json['template']
    if output or template:
        return output + '----' + template
    else:
        return ""


app.run()
