import React, { useState } from 'react'; 

function AddBooking() { 
    // State to store booking details 
    const [booking, setBooking] = useState({ userId: '', washTypeId: '', date: '' }); 
    // handler to update the booking state as the user types into form inputs 
    const handleChange = (e) => { 
        // Dynamically update the specific field in the booking object
        setBooking({ ...booking, [e.target.name]: e.target.value }); 
    }; 
    // Handler for form submission to add a new booking 
    const handleSubmit = async (e) => { e.preventDefault();
        // Prevent the form refreshing the page  
        try { 
            const res = await fetch('http://localhost:3000/bookings/create', { 
                method: 'POST', 
                headers: { 'Content-Type': 'application/json' }, 
                body: JSON.stringify(booking),
                // Send the booking data in JSON format  
            }); 
            
            if (res.ok) { 
                const data = await res.json();
                // parse the response if successful  
                
                console.log('Booking created:', data);
                // Log the newly created booking  
                
                // Reset the form adter successful booking creation 
                setBooking({ userId: '', washTypeId: '', date: '' }); 
            } else { 
                throw new Error('Failed to create booking');
                // throw error if the response is OK  
            } 
        } catch (error) { 
            console.error('Error creating booking:', error);
            // log any error encountered during the request 
        } 
    }; 
    
    return ( 
        <div> 
            <h2>Add Booking</h2> 
            {/* Form for creating a new booking*/}
            <form onSubmit={handleSubmit}> 
                <div className="mb-3"> 
                    <label className="form-label">User ID</label> 
                    <input type="text" name="userId" className="form-control" value={booking.userId} onChange={handleChange} required /> 
                </div> 
                <div className="mb-3"> 
                    <label className="form-label">Wash Type ID</label> 
                    <input type="text" name="washTypeId" className="form-control" value={booking.washTypeId} onChange={handleChange} required /> 
                </div> 
                <div className="mb-3"> 
                    <label className="form-label">Date</label> 
                    <input type="date" name="date" className="form-control" value={booking.date} onChange={handleChange} required /> 
                </div> 
                {/* Button to submit the form */}
                <button type="submit" className="btn btn-primary">Add Booking</button> 
            </form> 
        </div> 
    );
} 

export default AddBooking;