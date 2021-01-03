# Dr. Duwe Research Lab Website

# Instructions to install on ubuntu machine

## Install Node Version Manager (NVM)

`curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.37.2/install.sh | bash`

Restart terminal or do 

`source ~/.profile`

## Install Nodejs using NVM

`nvm install 12.13`

This installs Nodejs with Node Package Manager (npm) 

## Install angular cli

`npm install -g @angular/cli`

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.3.0 (updated to version 10).

## Install all packages

`npm install`

This will install all the packages specified in package.json file.

## Development server

Run `ng serve` for a dev server. Navigate to http://localhost:4200/. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Deploy

Connect to ISU VPN.
Run `sudo mkdir -p /Volumes/DuweWebsite`.
Run `sudo mount_smbfs //duwe@myfiles.iastate.edu/engr/sites/home/duwe /Volumes/DuweWebsite/`.
Run `cp -rf dist/research-lab-website/* /Volumes/DuweWebsite/`.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
