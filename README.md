# rent2nite reservations system

> This repository serves as the reservation system for the rent2nite application. The repository contains an interactive calendar that allows a user to book a reservation if the chosen timeslot is available.

## Related Projects

- https://github.com/rent2nite/proxySteve
- https://github.com/rent2nite/Recommendations
- https://github.com/rent2nite/Descriptor-and-Reviews
- https://github.com/rent2nite/Main-Gallery

## Table of Contents

1. [Usage](#Usage)
1. [Requirements](#Requirements)
1. [Development](#Development)
1. [Dependencies](#Dependencies)

## Usage

> You may send a GET request to '/api/reservations/properties' providing a property_id (number) as the sole argument. The server will respond with an array containing a single object which contains info related to the property associated with the property_id that you sent.
> You may send a GET request to '/api/reservations/bookings' providing a property_id (number) as the sole argument. The server will respond with an array containing many objects which contain info related to bookings associated with the property_id that you sent.
> You may send a POST request to '/api/reservations/bookings' providing an object which contains property_id (number), starting_date (string), ending_date (string), adults (number), children (number), infants (number), and total_price (number) as the sole argument. The server will respond with an a booking_id number that it generates. This booking_id number is meant to serve as booking verification to the user who sends the POST request.
> You may send a GET request to '/api/reservations/blackout_days' providing a property_id (number) as the sole argument. The server will respond with an array containing many objects which contain info related to blackout days associated with the property_id that you sent.

## Requirements

- Node 6.13.0
- nvm 0.35.2

## Development

After installing all dependencies:
- Setup your file structure so that there is a client directory with src and dist subdirectories.
- Put your index.html file in the dist subdirectory. Create a script that imports bundle.js (webpack creates this artifact).
- Setup webpack.config.js using the react and env presets.
- Setup your .eslintrc.js file.
- Setup your babel.config.js file.
- Setup your jest.config.js file. Ensure that you create a test folder.
- Setup your express server to serve the client/dist directory staticly.
- Setup your database folder with schema, db (used to connect), and seed (used to populate sample data) files.
- To create your initial db go to terminal and run ```sh mysql -u root < database/schema.sql ``` from the root directory of this project.
- Style your project in the Styles component
- Write code for your components, starting with index, then App, then ReserveForm, then Calendar, then Guests, then PriceInfo
- Next run ```sh npm run seed ``` to populate your database with sample data.
- Next run ```sh npm run react-dev ``` then ```sh nom run server-dev``` to start webpack and run your express server.
- Finally open up your favorite browser and type http://localhost:3001/ into your URL bar!


## Dependencies

From within the root directory:

```sh
npm install --save react react-dom react-modal prop-types styled-components jquery express body-parser mysql moment faker
npm install --save-dev @babel/core @babel/preset-env @babel/preset-react babel-eslint babel-jest babel-loader
npm install --save-dev webpack webpack-cli nodemon jest jest-enzyme jest-environment-enzyme enzyme enzyme-adapter-react-16
npm install eslint eslint-config-airbnb eslint-plugin-import eslint-plugin-jsx-a11y eslint-plugin-react eslint-plugin-react-hooks
```
