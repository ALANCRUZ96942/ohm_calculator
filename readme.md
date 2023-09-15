# Ohm Calculator
The Ohm Calculator is a web app and API developed using React (frontend) and Node.js (backend) 
to calculate electric resistance with a user-friendly interface.

![image](https://github.com/ALANCRUZ96942/ohm_calculator/assets/65994761/7293c4c7-5e62-4fbf-a6e7-879afeb7c852)

## Previous requeriments
Node.js: JavaScript execution engine.
npm: Node.js package manager.
Git: Version control system.
If it is your first time using npm, you need to run the following command instead of npm install in the next steps:
``` 
npm install npm -g
```
Instead of npm install in the next steps.

## Clonning repository
Clone the repository to your local machine:
```
git clone https://github.com/ALANCRUZ96942/ohm_calculator.git
```
Navigate to the root project directory:
``` 
cd ohm_calculator
```

## Backend configuration
Navigate to the backend folder and run npm to install dependencies (only for the first time):
``` 
cd backend
npm install
```

### Configure the Database
Ensure that your system has a supported database server installed (MySQL). 
Create a new empty database for the project and specify the database name in the .env file.

### configure the .env file 
You can modify the .env.example file by setting the DATABASE field to your database name. 
You can use the .env.example file as a template and rename it to .env. 
Configure the remaining parameters according to your server database settings. 
The REACT_APP_BASE_URL should match the one in the frontend .env file (highlighted in the frontend section).

### Run the database commands and to start the server
Run the following commands to set up the database and start the server:
```
npx sequelize-cli  db:migrate
npx sequelize-cli  db:seed:all
npm run dev
```
You should receive success messages like this:
App listening on PORT 4000

## Frontend configuration
In another terminal, you need to run the frontend web app. 
Navigate to the root project /ohm_calculator and then go to the frontend folder to install the dependencies (only for the first time):
```
cd frontend
npm install 
```

### Configure the .env file 
Configure the .env file by updating REACT_APP_API_BASE_URL with your server's address (the port used in the backend part). 
The REACT_APP_BASE_URL typically does not need to be changed and should match the one in the backend .env file.
Finally, run the following command to start the frontend client:
```
npm start 
```
The app will run on REACT_APP_API_BASE_URL.


