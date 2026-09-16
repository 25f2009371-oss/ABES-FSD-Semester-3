from flask import *
app=Flask(__name__)



@app.route('/')
@app.route('/login')
def login():
    return render_template('login.html')




@app.route("/quiz")
def quiz():
    return render_template("question2.html")



if __name__=="__main__":
    app.run(debug=True)
