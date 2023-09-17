# Project Title: Airline Reservation System

# Welcome to the flight and Search service built by using nodeJS 
(Note: This is one of the repositories of the Airline Reservation Backend System. Please check other repository i.e. AUTHSERVICE which handles all the authentications)

# project setup

    -clone the project into your local
    -execute `npm install` on the same path as your root directory of the download project
    -Create a `.env` file in the root directory and add the following environment variables
    -       `PORT=3000`
    -Inside the `src/config` folder create a new file `config.json` and then the following piece of JSON

```
{
    "development": {
    "username": "YOUR DB NAME",
    "password": "YOUR DB PASSWORD",
    "database": "WRITE YOUR DB NAME",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
}
```
For table creation: please use sequelize-cli to create all the tables in the one go by executing simple commands and all the tables created in your local MySQL database. Please first run npm it will install all the npm packages that are required to run sequelize commands

Project Overview:
The Airline Reservation System is a web-based application that allows users to search for flights, make reservations, and manage their bookings. It's built using Node.js as the backend server, MySQL as the database to store flight information and user data, and Sequelize as the ORM for database interactions. This system aims to provide a user-friendly interface for travelers to book their flights conveniently.

Key Features:

## User Authentication:

Users can create accounts, log in, and log out.
Passwords are securely hashed and stored in the database.
User sessions are managed for authentication.

## Flight Management:

Admins can add, edit, and delete flight details.
Flight information includes flight numbers, departure and arrival locations, departure times, seat availability, and ticket prices.

## Search and Booking:

Users can search for available flights based on criteria like date, destination, and class (economy, business, first).
Users can select flights and choose their preferred seats.
The system calculates the total cost of the reservation.


## Tables created : 
City Table, Airplanes Table, Users Table, Roles Table, Airports Table and many more:


UPCOMING INTEGRATIONS :

Payment gateway integration
Email notifications
Frontend using ReactJs
