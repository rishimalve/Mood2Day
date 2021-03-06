# Mood2Day

## Author

- [Rishi Malve](https://www.linkedin.com/in/rishi-malve-28b568a4/)

## Description

- This is a React + Flask full stack application with SQLAlchemy database. User input his or her thougth in the input box which is sent back to the python backend via REST API call. At the backend, a NLP model based on Spacy and Vader libarary calculates the polarity of the sentence and it is sent back to the frontend via REST api.

- History of all the thoughts written by the user is saved in the database, which can be accessed via History tab in the header.

## Installation and Execution Steps

1) Download the repo.
2) Inside the frontend folder, run the following command from the terminal to install the requierd node packages.

```bash
npm install
```

3) Inside the backend folder, run the following command from the terminal to install the required python libraries and setup the flask database.

```bash
pip3 install -r requirements.txt
export FLASK_APP=app.py
flask db init
flask db migrate
flask db upgrade
```

4) To run the flask backend, run the following command in the terminal from the backend folder.

```bash
python3 app.py
```

5) To run the react frontend, run the following command in the terminal from the frontend folder

```bash
npm start
```

6) Application will be hosted on <http://localhost/3000>

## Testing the flask backend

To test the flask backend run the following command in the backend folder

```bash
python3 -m unittest test_app.py
```

## Testing the react frontend

To test the react frontend run the following command in the frontend folder

```bash
npm test
```

## Materials used for help

- [For Flask general setup](https://realpython.com/flask-by-example-part-1-project-setup/)
- [SQLAlchemy Setup](https://flask-sqlalchemy.palletsprojects.com/en/2.x/quickstart/#a-minimal-application)
- [REST APIs in React](https://www.digitalocean.com/community/tutorials/react-axios-react)
- [React component testing](https://dev.to/richardigbiriki/testing-your-first-react-component-with-jest-and-enzyme-p38)
- [Flask unit testing](https://www.patricksoftwareblog.com/unit-testing-a-flask-application/)
