# Ohm Calculator
Ohm calculator is a web app and api developed on react (frontend) and node.js (backend) to calculate the electric resistance
with a friendly interface.

![image](https://github.com/ALANCRUZ96942/ohm_calculator/assets/65994761/7293c4c7-5e62-4fbf-a6e7-879afeb7c852)

## Clonning repository
Clone the repository on your local:
```
git clone https://github.com/ALANCRUZ96942/ohm_calculator.git
```
And enter to the root project
``` 
cd ohm_calculator
```
## Backend configuration
Enter to the backend folder and run npm (only for the first time)
``` 
cd backend
npm install
```
### Configure the Database
Make sure that your system has a supported database server installed (MySQL)
Create a new empty database for the project and put the name into .env file,
### configure the .env file 
You can change the .env.example, put the name of the database on the DATABASE field, you can use the .env.example and rename it to .env
Configure the rest of the params in order to your server database configurations,
the REACT_APP_BASE_URL have to be the same of the .env frontend file (it will be highlited on the frontend part )

### run the database commands and to start the server
You have to receive success messages
```
npx sequelize-cli  db:migrate
npx sequelize-cli  db:seed:all
npm run dev
```
Finnally a success messsage like this has to appear:
App listening on PORT 4000

## Frontend configuration
In another terminal you have to run the frontend web-app
go to the root project /ohm_calculator in this case and
then go to the frontend folder and install the dependences (for the first time only)
```
cd frontend
npm install 
```
### configure the .env file 
configure the .env file, you can change the .env.example and rename it to .env;
REACT_APP_API_BASE_URL for your server direction (the port used in the backend part)
REACT_APP_BASE_URL for the webapp frontend part, ussually it is not necessary change this direction and 
have to be the same of the .env backend file

fiinaly run to start the frontend client
```
npm start 
```
And the app will run on REACT_APP_API_BASE_URL 

