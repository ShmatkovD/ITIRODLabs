from flask import Flask, render_template
app = Flask(__name__)

@app.route("/lala")
def hello():
    return "Hello World!"

@app.route("/")
def lala():
    return render_template('tester.html')

if __name__ == "__main__":
    app.run()

