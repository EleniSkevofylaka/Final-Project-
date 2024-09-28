import React, { useState, useEffect } from 'react'; 
    
function ManageBookings() { 
        // State to hold the bookings data fetched from the server
        const [bookings, setBookings] = useState([]); 
        // useEffect to run fetchBookings function when the component loads 
        useEffect(() => { 
            fetchBookings(); 
        }, []); // This ensures it runs only once when the components mounts
         // Function to fetch bookings from server   
        const fetchBookings = async () => { 
            try { 
                // Make a Get request to fetch bookings from the backend
                const res = await fetch('http://localhost:3000/bookings'); 
                const data = await res.json(); 
                // Update state with the fetched bookings 
                setBookings(data); 
            } catch (error) { 
                console.error('Error fetching bookings:', error); 
            } 
        }; 
    // Function to handle deletion of a booking 
    const handleDelete = async (id) => { 
        try { 
            // Make a DELETE request to remove the selected bookings by ID
            await fetch(`http://localhost:3000/bookings/${id}`, { 
                method: 'DELETE', 
            }); 
            fetchBookings(); // Fetch the updated bookings list after deletion
        } catch (error) { 
            console.error('Error deleting booking:', error); 
        } 
    }; 
    
    return ( 
        <div> 
            {/* Page title */}
            <h2 className='text-center'>Manage Bookings</h2>
            {/* Conditionally render bookings list if available*/} 
            {bookings.length > 0 ? ( 
                <ul className="list-group"> 
                {/* Map over the bookings array to display each bookings */}
                {bookings.map((booking) => ( 
                    <li key={booking.booking_id} className="list-group-item d-flex justify-content-between align-items-center"> 
                    {/* Display booking details */}
                    {booking.car_make} - {booking.car_model} - {booking.car_year} - {booking.license_plate} - {booking.wash_type} - {booking.date} - {booking.time}
                        {/* Button to delete the selected booking*/} 
                        <button className="btn btn-danger btn-sm" onClick={() => handleDelete(booking.booking_id)} > Delete </button> 
                    </li> 
                ))} 
                </ul> 
            ) : ( 
                // If no bookings are found, display this message
                <p>No bookings found</p> 
            )} 
        </div> 
    ); 
} 

export default ManageBookings;