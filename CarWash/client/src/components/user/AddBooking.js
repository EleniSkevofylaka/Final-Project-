import React, { useState } from 'react'; 

function AddBooking() { 
    // State to store booking details 
    const [booking, setBooking] = useState({ car_make: '', car_model: '', car_year: '', license_plate: '', wash_type: '', date: '', time: '' });
    
    const getYears = () => {
        const currentYear = new Date().getFullYear();
        const years = [];
        for (let year = currentYear; year >= 1980; year--) {years.push(year);
        }
        return years;
}; 
    
    // handler to update the booking state as the user types into form inputs 
    const handleChange = (e) => { console.log(e.target.name, e.target.value);
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
                setBooking({ car_make: '', car_model: '', car_year: '', license_plate: '', wash_type: '', date: '', time: '' }); 
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
        <div className='container mt-5'> 
            <h2 className='text-center text-dark mb-4' style={{ fontWeight: 'bold', letterSpacing: '1px'}}>Add Booking</h2> 
            {/* Form for creating a new booking*/}
            <form onSubmit={handleSubmit} className='shadow-lg p-4 rounded' style={{ backgroundColor: '#f8f9fa'}}> 
                <div className="mb-3"> 
                    <label className="form-label text-dark">Car Make</label> 
                    <input type="text" name="car_make" className="form-control" style={{ borderRadius: '8px'}} value={booking.car_make} onChange={handleChange} required /> 
                </div> 
                <div className="mb-3"> 
                    <label className="form-label text-dark">Car Model</label> 
                    <input type="text" name="car_model" className="form-control" style={{ borderRadius: '8px'}} value={booking.car_model} onChange={handleChange} required /> 
                </div> 
                <div className="mb-3"> 
                    <label className="form-label text-dark">Car Year</label> 
                    <select  name="car_year" className="form-control" style={{ borderRadius: '8px'}} value={booking.car_year} onChange={handleChange} required >
                    <option value="">Select Year</option> 
                    {getYears().map(year => (
                        <option key={year} value={year}>{year}</option>
                    ))}
                    </select>
                </div> 
                <div className="mb-3"> 
                    <label className="form-label text-dark">License Plate</label> 
                    <input type="text" name="license_plate" className="form-control" style={{ borderRadius: '8px'}} value={booking.license_plate} onChange={handleChange} required /> 
                </div> 
                <div className="mb-3"> 
                    <label className="form-label text-dark">Wash Type</label> 
                    <select name="wash_type" className="form-control" style={{ borderRadius: '8px'}} value={booking.wash_type} onChange={handleChange} required > 
                        <option value="">Select Wash Type</option>
                        <option value="Premium Wash">Premium Wash</option>
                        <option value="Deluxe Wash">Deluxe Wash</option>
                        <option value="Basic Wash">Basic Wash</option>
                        </select>


                </div> 
                <div className="mb-3"> 
                    <label className="form-label text-dark">Date</label> 
                    <input type="date" name="date" className="form-control" style={{ borderRadius: '8px'}} value={booking.date} onChange={handleChange} required /> 
                </div> 
                <div className="mb-3"> 
                    <label className="form-label text-dark">Time</label> 
                    <input type="time" name="time" className="form-control" style={{ borderRadius: '8px'}} value={booking.time} onChange={handleChange} required /> 
                </div> 
                {/* Button to submit the form */}
                <button type="submit" className="btn btn-primary w-100" style={{ backgroundColor: '#0056b3', borderRadius: '20px', fontWeight:'bold'}}>Add Booking</button> 
            </form> 
        </div> 
    );
} 

export default AddBooking;