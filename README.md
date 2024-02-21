# React Guide
I made this repository focused on providing a good starting point to understand all 
basic concepts of this javascript library.

## Version
The react version I use was the 18.2.0

## Content
In every folder you will find a different proyect to practice or just learn.


## Initialization
When download master branch remember to install node modules (npm install) inside
the proyect folder you want to run.

After that initialize the proyect using npm start

Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

## Proyect Folders

### javascript-basics
This folder contains some javascript basics concepts and examples to get started.

### first-steps
This folder contains a simple web page with a counter example to get started 
with React. Also unit and integration tests are included using Jest.

### hooks
This folder contains various examples using the implementation of various custom 
hooks including the most used in React. Additionally the tests of the hooks and 
components created are included to advance in the use of Jest.

### time-management
This folder contains a web app that use a calendar to insert events with the
purpose of tracking your different activities.
This app consumes the REST API (https://github.com/marcosbuydid/time-management-backend)
In this proyect I use React Router, JWT Authentication, Redux Toolkit, React Redux, 
Axios and so much more.
Before run the proyect, create a .env file inside proyect folder and
put: VITE_API_URL=http://localhost:4000/api
After that install node modules, verify that the REST API is running and run 
the proyect using npm run dev.
