# Car Wash Booking App

 ## Overview
 
  This project is a **Car Wash Booking App**  The website allows users to book car wash services by entering details such as car make, model, year, and wash type, as well as schedule a time for the service. The application also includes features for administrators to manage users, bookings, and wash types. 
  
  The project utilizes **React** for the front end, **Node.js** and **Express** for the back end, and **PostgreSQL** for the database.

  ## Features

   ### User Functionality

    - **Booking System**: Users can book a car wash by providing details such as car make, model, year, license plate, wash type, and preferred date and time. 
    
    - **Registration**: Users can register to create an account (Note: The website does not include functionality for updating user information after registration). 
    
    
### Admin Functionality 
    
    - **Manage Users**: Admins can view, edit, and delete users from the system. 
    
    - **Manage Wash Types**: Admins can create, edit, and delete car wash types, including setting the name, description, price, and duration of the service. 
    
    - **Manage Bookings**: Admins can view and delete car wash bookings. 
    
### Frontend 
    
    - **React**: The website is built using React for a responsive and dynamic UI. 
    
    - **React Router**: Navigation between different pages is managed using `React Router DOM`. 
    
    - **State Management**: Managed using `useState` and `useEffect` hooks. 
    
    - **Conditional Rendering**: The application uses conditional rendering to display data such as user lists and bookings only when available. 
    
    - **Forms**: Users can fill out forms to register, book a wash, or create and update wash types. Admins have access to additional forms for managing data. 
    
    - **Bootstrap**: Styling is achieved using Bootstrap, providing a clean and modern UI. A custom **dark blue theme** is applied across the site with different shades of blue for consistency. 
    
### Backend 
    
    - **Node.js and Express**: The backend API is built with Express to handle routing and CRUD operations. 
    
    - **PostgreSQL**: A PostgreSQL database is used for storing user data, bookings, and wash types. 
    
    - **RESTful API**: The backend exposes endpoints for managing users, bookings, and wash types. 
    
    - **CORS**: The app uses `CORS` middleware to enable communication between the front end and back end. 
    
    ## Technologies Used 
    
    ### Frontend 
    
    - **React** 
    - **React Router DOM** 
    - **Bootstrap** 
    - **JavaScript** 
    
    ### Backend 
    
    - **Node.js** 
    - **Express** 
    - **CORS** 
    - **PostgreSQL** 
    
    ## Installation 
    
    
    Ensure you have the following installed: 
    - Node.js 
    - PostgreSQL 
    
    ### Database Setup

    Create a PostgresSQL database name Final-Project

    Run these SQL query to create the required tables for users, bookings, and wash types.

    -** wash types Table

    CREATE TABLE WashTypes (
            WashType_id SERIAL PRIMARY KEY,
            name VARCHAR (100) NOT NULL,
            description TEXT,
            price DECIMAL (10, 2) NOT NULL,
            duration INTEGER NOT NULL
    );

    -** bookings Table

    CREATE TABLE Bookings (
            booking_id SERIAL PRIMARY KEY
            user_id INTEGER REFERENCES Users (user_id) ON DELETE CASCADE
            car make VARCHAR (50) NOT NULL,
            car_model VARCHAR (50) NOT NULL,
            car year INTEGER NOT NULL.
            license plate VARCHAR (20) NOT NULL,
            wash tvpe VARCHAR (50) NOT NULL
            date DATE NOT NULL.
            time TIME NOT NULL
            status VARCHAR (50) DEFAULT 'Pending'
    );

    -** users Table

        CREATE TABLE users (
            user_id SERIAL PRIMARY KEY,
            name VARCHAR (100) NOT NULL,
            email VARCHAR (100) UNIQUE NOT NULL,
            password VARCHAR (255) NOT NULL,
            role VARCHAR (50) DEFAULT 'customer'
    );