import React, { useState, useEffect } from 'react'; 
    
function ManageBookings() { 
        const [bookings, setBookings] = useState([]); 
        
        useEffect(() => { 
            fetchBookings(); 
        }, []); 
            
        const fetchBookings = async () => { 
            try { 
                const res = await fetch('http://localhost:3000/bookings'); 
                const data = await res.json(); 
                setBookings(data); 
            } catch (error) { 
                console.error('Error fetching bookings:', error); 
            } 
        }; 
        
    const handleDelete = async (id) => { 
        try { 
            await fetch(`http://localhost:3000/bookings/${id}`, { 
                method: 'DELETE', 
            }); 
            fetchBookings(); 
        } catch (error) { 
            console.error('Error deleting booking:', error); 
        } 
    }; 
    
    return ( 
        <div> 
            <h2 className='text-center'>Manage Bookings</h2> 
            {bookings.length > 0 ? ( 
                <ul className="list-group"> 
                {bookings.map((booking) => ( 
                    <li key={booking.booking_id} className="list-group-item d-flex justify-content-between align-items-center"> 
                    {booking.car_make} - {booking.car_model} - {booking.car_year} - {booking.license_plate} - {booking.wash_type} - {booking.date} - {booking.time} 
                        <button className="btn btn-danger btn-sm" onClick={() => handleDelete(booking.booking_id)} > Delete </button> 
                    </li> 
                ))} 
                </ul> 
            ) : ( 
                <p>No bookings found</p> 
            )} 
        </div> 
    ); 
} 

export default ManageBookings;