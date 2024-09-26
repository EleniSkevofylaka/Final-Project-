import React, { useState } from 'react'; 

function AddBooking() { 
    const [booking, setBooking] = useState({ userId: '', washTypeId: '', date: '' }); 
    
    const handleChange = (e) => { 
        setBooking({ ...booking, [e.target.name]: e.target.value }); 
    }; 
    
    const handleSubmit = async (e) => { e.preventDefault(); 
        try { 
            const res = await fetch('http://localhost:3000/bookings/create', { 
                method: 'POST', 
                headers: { 'Content-Type': 'application/json' }, 
                body: JSON.stringify(booking), 
            }); 
            
            if (res.ok) { 
                const data = await res.json(); 
                
                console.log('Booking created:', data); 
                
                // Reset the form 
                setBooking({ userId: '', washTypeId: '', date: '' }); 
            } else { 
                throw new Error('Failed to create booking'); 
            } 
        } catch (error) { 
            console.error('Error creating booking:', error); 
        } 
    }; 
    
    return ( 
        <div> 
            <h2>Add Booking</h2> 
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
                <button type="submit" className="btn btn-primary">Add Booking</button> 
            </form> 
        </div> 
    );
} 

export default AddBooking;