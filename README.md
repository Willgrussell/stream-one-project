# SnapCount Front End Project

## Overview
### What is this application for?
This is a static front-end website for a group called SnapCount. This group records a podcast weekly reporting on all the latest news on american football.

### What does it do?
This application allows users to listen to weekly podcasts by the SnapCount team, look at images and video of recent weeks of NFL sport.

### How does it work?
This application uses a single document page with main nav-bar. The site is powered by Angular JS and styled using Bootstrap.

## Wireframes
- **Proto.io** was used to design original features and feel of website. Please view [Wireframes](other/)

## Cross Browser Testing
- Tested features with automated browser website **BrowserStack**, used on browsers highlighted below. I have included a few examples of the tests using a screenshot, these can be found inside **browser-tests** folder. 

### Chrome
- Tested on, responsive with full JS and navigation functionality.

### Safari
- Tested on, responsive with full JS and navigation functionality.

### Internet Explorer
- Tested on internet explorer and edge, responsive with full JS and navigation functionality.

### FireFox
- Tested on, responsive with full JS and navigation functionality. Does not scroll down on media page. 

## Features
### Exciting Features
- User Based Features
    - Button slideup and slide down to show and hide information
- SnapCount Based Features
    - Listen or download lastest podcasts of the SnapCount Team.
    - Keep up to date with the latest news in the NFL.
    - Look through images and videos of recent NFL games.
    - Register interest with the mailing team using email.
    - Register booking with the SnapCount team.

### Features Left to Implement
- None

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
- [BrowserStack](https://browserstack.com)
    - **BrowserStack** was used for automated cross browser testing.
- [Proto.io](https://proto.io)
    - **Proto.io** was used to wireframe the original design and features of the website. Examples can be found inside **other** folder based inside project.
- [Jasmine](https://jasmine.github.io/)
    - **Jasmine** has been used to test javascript code during my project.

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

## Author
- This project has been created by William Russell

## Demo
- A demo of this project is [stream-one-project](https://willgrussell.github.io/stream-one-project/)
