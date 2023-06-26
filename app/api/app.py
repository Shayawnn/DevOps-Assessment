from flask import Flask
from flask_cors import CORS
import os

app = Flask(__name__)

cors = CORS(app, resources={r"/*": {"origins": 'http://localhost:3000'}})

@app.errorhandler(404)
def not_found(e):
    return {"error": "route not found"}, 404


@app.route('/')
def index():
    return 'Hello', 200

@app.route('/api/welcome')
def get_welcome():
    return {'msg': os.environ.get('WELCOME')}

if __name__ == "__main__":
    app.run(debug=True)
