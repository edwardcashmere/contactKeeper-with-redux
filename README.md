# React-Node-Redux-Mongo Application

## Contact Keeper 
This application is a simple contact keeper for saving your contacts.It has authentications using JWT and state management using redux.

# Project
This a simple contact - Keeper web application build with mern stack with context api for state management.


## Run Locally

To run the app locally, clone the repository then proceed to run add environment variables for your mongoDB setup. Then run the command :-

```bash
npm run project-local

```

This script will install all the dependencies and run your development server.You can the register then login  and start using the application.


## Production Deployment

For deployment to heroku there is a heroku-postbuild script for that.

Go to your terminal and run:-

```bash
heroku login -i

```
Then type in your credentials,if the login is successful the run commad 

```bash
heroku create

```
The command will create an app with a random name, go to your browser and login to your heroku dashboard click on the app name of the app you created ,click on deploy tab ,scroll down ,under ``create a new git repository`` copy the command `heroku git: remote ....` and paste in your terminal to add the remote repository .

Next run 

```bash
git push heroku master

```

This will deploy and give you a url at the end where you can view your deployed application


## production deployment 2

This deployment will be done on a digital ocean server, a script has been added to the package.json file to make the deployment
as easy as possible.

However to set up the server ,google ``server set-up for node application ubuntu server`` and pick the digital ocean documentation.
The digital ocean documentation is clear and precise on the steps to take and commands to run to set up the server successfuly. 

After which you can run 

```bash
npm run prod 

```

This will do all dependency install and start the application. You can check by typing your server ip with the port 8080 included  i.e ` 172:89:54:30:8081` this will take you to the login page. 


You will notice the app will be running on the foreground,and this is not adviced ,install pm2 with command 

```bash
npm i pm2 -g

```

If you run into a permission problem add sudo to the start of the command. Use pm2 to run your application.

```bash
npm run prod2

```

This script the same as the `npm run prod` script but now this will run your application in the background.


## Author

>EDWIN OMONDI



