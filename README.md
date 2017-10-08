# SnapCount Front End Project

## Overview

### What is this application for?

This is a front-end web application that reports american football news in the USA.

### What does it do?

This application allows users to listen to weekly podcasts by the SnapCount team, look at images and video of recent weeks of NFL sport.

### How does it work?

This application uses a single document page with main nav-bar. The site is powered by Angular JS and styled using Bootstrap.

## Features

### Exciting Features
- None yet!

### Features Left to Implement
- User Based Features
    - Button slideup and slide down to show and hide information
- SnapCount Based Features
    - Listen or download lastest podcasts of the SnapCount Team.
    - Keep up to date with the latest news in the NFL.
    - Look through images and videos of recent NFL games.
    - Register interest with the mailing team using email.
    - Register booking with the SnapCount team.

## Tech Used

### Technology used includes:
- [AngularJS](https://angularjs.org/)
    - We use **AngularJS** to handle page routing.
- [Bootstrap](https://getbootstrap.com/)
    - We use **Bootstrap** to give our project a simple, responsive layout.
- [npm](https://www.npmjs.com/)
    - We use **npm** to help manage some of the dependancies in the application.
- [bower](https://bower.io/)
    - **Bower** is used to manage the installation of our libraries and frameworks.

## Contributing

### Getting the code up and running
1. Firstly you need to clone this repository by running the ```git clone <project's Github URL>``` command.
2. After you've that you'll need to make sure that you have **npm** and **bower** installed
    1. You can get **npm** by installing Node from [here](https://nodejs.org/en/)
    2. Once you've done this you'll need to run the following command:
        ```npm install -g bower # this may require sudo on Mac/Linux```
3. Once **npm** and **bower** are installed, you'll need to install all of the denpendencies in **package.json** and **bower.json**.

    ```
    npm install
    ```
    
    ```
    bower install
    ```
4. After those denpendencies have been installed you'll need to make sure that you have **http-server** installed. You can install  this by running the following: ```npm install -g bower # this also may require sudo on Mac/Linux```
5. Once **http-server** is installed run ```http-server -c-1```
6. The project will now run on [localhost](https://127.0.0.1:8080)
7. Make changes to the code and if you think it belongs in here then just submit a pull request