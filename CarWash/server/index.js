require('dotenv').config();
const express = require("express");
const bcrypt = require('bcrypt');
const cors = require('cors');

    const app = express();
    const pool = require("./db");

    app.use(cors());
    app.use(express.json());

 //  User Endpoints 

 // Get all users by name
    app.get('/users', async (req, res) => { 
    
        try { 
        //Search for users whose names match the query (case-insensitive)
        const result = await pool.query(
            'SELECT * FROM users');
            
        res.status(200).json(result.rows); 
        //Return the matched users
        
    } catch (error) { 
        res.status(500).json({ message: error.message }); 
    } 
    }); 
    
// Register a new user 
    
    app.post('/users/register', async (req, res) => { 
        
    const { name, email, password } = req.body; 

    //Check if required fields are provided
    if (!name || !email || !password) { 
        return res.status(400).json({ message: 'Name, email, and password are required' }); } 
        
    try { 
            //Hash the user's password for security
        const hashedPassword = await bcrypt.hash(password, 10); 
        
        //Insert the new user into the database
        await pool.query(
            'INSERT INTO Users (name, email, password) VALUES ($1, $2, $3)', 
            [name, email, hashedPassword]); 
                
            res.status(201).json({ message: 'User registered' });
            
    } catch (error) { 
        res.status(500).json({ message: error.message }); 
    } 
    }); 
            
// Delete a user by ID and name
        
    app.delete('/users/:id', async (req, res) => { 

    const {id } = req.params; 
            
    try { 

        //Delete the user with the matching ID and name 
         const result = await pool.query(
            'DELETE FROM Users WHERE user_id = $1', 
            [id]
        ); 

            if (result.rowCount === 0) { 
                return res.status(404).json({ message: 'User not found' }); } 
                    
        res.status(200).json({ message: 'User deleted' }); 
                
    } catch (error) { 
        res.status(500).json({ message: error.message }); 
    } 
    });


 // Wash Type Endpoints
 
 // Get all wash types by name 
 
 app.get('/wash-types', async (req, res) => { 

    try { 
        // Retrive all wash-types from the database
        const result = await pool.query(
            'SELECT * FROM washtypes'
        );
            res.status(200).json(result.rows); 
        
        } catch (error) { 
            res.status(500).json({ message: error.message }); 
        } 
    }); 
    
    // Add a new wash type 
    
    app.post('/wash-types/create', async (req, res) => { 
        
        const { name, description, price, duration } = req.body; 

        //Check if all required fields are provided 
        if (!name || !description || !price || !duration) { 
            return res.status(400).json({ message: 'Name, description, price and duration are required' }); } 
            
        
        try { 
            // Insert the new wash type into the database 
            await pool.query( 
                'INSERT INTO WashTypes (name, description, price, duration) VALUES ($1, $2, $3, $4)', 
                [name, description, price, duration] ); 
                
                res.status(201).json({ message: 'Wash type added' }); 
            
            } catch (error) { 
                res.status(500).json({ message: error.message }); 
            } 
        }); 
        
    // Update an existing wash type by name 
        
    app.put('/wash-types/:id', async (req, res) => { 
    
    const { id } = req.params;
    const { name, description, price, duration } = req.body;
    
    // Check if all required fields are provided 
    if (!name || !description || !price || !duration) { 
        return res.status(400).json({ message: 'All are required' }); }
           
    try { 
        //Update the wash type in the database
        const result = await pool.query( 
            'UPDATE WashTypes SET name = $1, description = $2, price = $3, duration = $4 WHERE washtype_id = $5', 
            [name, description, price, duration, id] ); 

            if (result.rowCount === 0) { 
                return res.status(404).json({ message: 'Wash-type not found or does not match the provided name' }); } 
                    
            
        res.status(200).json({ message: 'Wash type updated' }); 
                
    } catch (error) { 
        res.status(500).json({ message: error.message }); 
    } 
    }); 
            
    // Delete a wash type by ID and name 
            
    app.delete('/wash-types/:id', async (req, res) => { 
                 
    const {id} = req.params;
        

    try { 
        // Delete the wash types with the matching ID and name 
       const result = await pool.query(
            'DELETE FROM WashTypes WHERE washtype_id = $1', 
            [id]); 

            if (result.rowCount === 0) { 
                return res.status(404).json({ message: 'Wash-type not found or does not match the provided name' }); } 
                        
        res.status(200).json({ message: 'Wash type deleted' }); 

    } catch (error) { 
        res.status(500).json({ message: error.message }); 
    } 
    });


// Booking Endpoints
// Get all bookings 

app.get('/bookings', async (req, res) => { 
    
    try { 
        // Retrieve all bookings from the database
        const result = await pool.query(
            'SELECT * FROM Bookings'); 
            
            res.status(200).json(result.rows); 
        
        } catch (error) { 
            res.status(500).json({ message: error.message }); 
        } 
    }); 
    
    // Add a new booking 
    
app.post('/bookings/create', async (req, res) => { 
    
    const { user_id, car_make, car_model, car_year, license_plate, wash_type, date, time, status } = req.body; 
    
 // Check if all required fields are provided  
 if (!user_id || !car_make || !car_model || !car_year || !license_plate || !wash_type || !date || !time) { 
    return res.status(400).json({ message: 'All fields are required' }); } 

    try { 
        // Ensure the user exists in the database
        const userCheck = await pool.query(
            'SELECT * FROM users WHERE user_id = $1', [user_id]); 
            if (userCheck.rowCount === 0) { 
                return res.status(400).json({ message: 'User does not exist' }); } 
        
        // Inserts the new bookings into the database
        await pool.query( 
            'INSERT INTO Bookings (user_id, car_make, car_model, car_year, license_plate, wash_type, date, time, status) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)', 
            [ user_id, car_make, car_model, car_year, license_plate, wash_type, date, time, status  || 'Pending'] ); 
            
            res.status(201).json({ message: 'Booking created' }); 
        
        } catch (error) { 
            res.status(500).json({ message: error.message }); 
        }
}); 

// Delete a booking by booking ID and license plate

app.delete('/bookings/:id', async (req, res) => { 
    
    const {id} = req.params; 


    try { 
        // Delete the booking with the matching ID and license plate 
       const result = await pool.query(
            'DELETE FROM Bookings WHERE booking_id = $1', 
            [id]); 

            if (result.rowCount === 0) { 
                return res.status(404).json({ message: 'License plate not found or does not match the provided ID' }); } 
                
            
            res.status(200).json({ message: 'Booking deleted' }); 
        
        } catch (error) { res.status(500).json({ message: error.message }); 
    }
 }); 

 //Start the server
 
 const PORT = 3000;
    app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
 });
