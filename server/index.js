require('dotenv').config();
const express = require("express");
const bcrypt = require('bcrypt');
const cors = require('cors');

    const app = express();
    const pool = require("./db");

    app.use(cors());
    app.use(express.json());

    // Helper function to check for empty fields
    
    const checkEmptyFields = (fields) => { 
        for (const field of fields) { 
            if (typeof field === 'string' && field.trim() === "") { 
                return false; } 
                if (field === undefined || field === null){
                    return false;
                }
            } return true; 
        }; 

 //  User Endpoints 

 // Get all users by name
    app.get('/users', async (req, res) => { 

        const name = req.query.name;

        if (!name) { 
            return res.status(400).json({ message: 'Name is required' }); }

    try { 
        //Search for users whose names match the query (case-insensitive)
        const result = await pool.query(
            'SELECT * FROM users WHERE name ILIKE ($1)',
            [`%${name}%`]
        ); 
        if (result.rows.length === 0) {
            return res.status(404).json({message: 'Name not found'});
        }
            
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
        
    app.delete('/users/delete', async (req, res) => { 

    const {id, name } = req.body; 

    //Check if user ID and name are provided
    if (!id || !name) { 
        return res.status(400).json({ message: 'User ID and name are required' }); }
            
    try { 

        //Delete the user with the matching ID and name 
         const result = await pool.query(
            'DELETE FROM Users WHERE user_id = $1 AND name ILIKE $2', 
            [id, name]); 

            if (result.rowCount === 0) { 
                return res.status(404).json({ message: 'User not found or does not match the provided name' }); } 
                    
        res.status(200).json({ message: 'User deleted' }); 
                
    } catch (error) { 
        res.status(500).json({ message: error.message }); 
    } 
    });


 // Wash Type Endpoints
 
 // Get all wash types by name 
 
 app.get('/wash-types', async (req, res) => { 

    const name = req.query.name;

    if (!name) { 
        return res.status(400).json({ message: 'Name is required' }); }
    
    try { 
        // Search for wash types that match the name (case-insensitive)
        const result = await pool.query(
            'SELECT * FROM WashTypes WHERE name ILIKE ($1)',
            [`%${name}%`]
        );

        if (result.rows.length === 0) {
            return res.status(404).json({message: 'Wash type not found'});
        }
            //Return the matched wash types
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
        
    // Update an existing wash type by ID 
        
    app.put('/wash-types/update', async (req, res) => { 
            
    const { name, description, price, duration, washtype_id } = req.body;

    // Check if all required fields are provided 
    if (!washtype_id || !name || !description || !price || !duration) { 
        return res.status(400).json({ message: 'All are required' }); }
            
    try { 
        //Update the wash type in the database
        const result = await pool.query( 
            'UPDATE WashTypes SET name = $1, description = $2, price = $3, duration = $4 WHERE washtype_id = $5', 
            [name, description, price, duration, washtype_id] ); 

            if (result.rowCount === 0) { 
                return res.status(404).json({ message: 'Wash-type not found or does not match the provided ID' }); } 
                    
        res.status(200).json({ message: 'Wash type updated' }); 
                
    } catch (error) { 
        res.status(500).json({ message: error.message }); 
    } 
    }); 
            
    // Delete a wash type by ID and name 
            
    app.delete('/wash-types/delete', async (req, res) => { 
                 
    const {washtype_id, name} = req.body;
        
    //Check if the wash type ID and name are provided
    if (!washtype_id || !name) { 
        return res.status(400).json({ message: 'Name and wash-type ID are required' }); }
    

    try { 
        // Delete the wash types with the matching ID and name 
       const result = await pool.query(
            'DELETE FROM WashTypes WHERE washtype_id = $1 AND name ILIKE $2', 
            [washtype_id, name]); 

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

app.delete('/bookings/delete', async (req, res) => { 
    
    const { booking_id, license_plate } = req.body; 

    // Check if the booking ID and license plate are provided
    if (!booking_id || !license_plate) { 
        return res.status(400).json({ message: 'license_plate and wash-type ID are required' }); }
    


    try { 
        // Delete the booking with the matching ID and license plate 
       const result = await pool.query(
            'DELETE FROM Bookings WHERE booking_id = $1 AND license_plate = $2', 
            [booking_id, license_plate]); 

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
