# ohm_calculator
## git clone https://github.com/ALANCRUZ96942/ohm_calculator.git
## cd ohm_calculator
### backend configuration
## cd backend
## npm install (for the first time only)
## Configure the Database
Make sure your system has a supported database server installed (MySQL)
Create a new empty database for the project and put the name into .env file

## configure the .env file, you can change the .env.example
put the name of the database on the DATABASE field, you can use the same name
-configure the rest of the params in order to your server database configurations
the REACT_APP_BASE_URL have to be the same of the .env frontend file (it will be highlited on the frontend part )

# run the command 

npx sequelize-cli  db:migrate
npx sequelize-cli  db:seed:all

npm run dev
App listening on PORT 4000

### frontend 
on another terminal we have to run the frontend web-app
go to the root project /ohm_calculator on this case

then cd frontend
npm install (for the first time only)

configure the .env file, you can change the .env.examplo
REACT_APP_API_BASE_URL for your server direction (the port used on the backend part)
REACT_APP_BASE_URL for the webapp frontend part, ussually it is not necessary change these directions

REACT_APP_BASE_URL have to be the same of the .env backend file

fiinally run 
npm start 
