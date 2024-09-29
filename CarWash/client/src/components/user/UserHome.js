/*import React from 'react'; 

function UserHome() { 
    return ( 
        <div> 
            <h2>Welcome to the Car Wash System</h2> 
            <p>Here you can manage your bookings and register as a user.</p> 
        </div> 
    ); 
} 


export default UserHome; */


import React from 'react'; 
import { Link } from 'react-router-dom'; 

const UserHome = () => { 
    return ( 
        <div className="container mt-5"> 
         {/* Page Header */}
            <h1 className="text-center text-dark mb-5" style={{ fontWeight: 'bold', letterSpacing: '1px'}}>Register and create your booking</h1>
            {/* Main content section: Register and Booking links*/} 
            <div className="row justify-content-center"> 
                {/* Register Section */} 
                <div className="col-md-4 mb-4"> 
                    <div className="card text-center border-0 shadow-lg" style={{ backgroundColor:'#007bff', borderRadius: '15px'}}> 
                        <div className="card-body text-light py-5">
                            {/* Section title*/} 
                            <h5 className="card-title mb-3" style={{ fontSize: '1.5rem', fontWeight: '600'}}>Register </h5>
                            {/* Short description about registration */} 
                            <p className="card-text mb-4" style={{ fontSize: '1rem'}}>Register here and then proceed to creating your booking.</p>
                            {/* Link to the registration page */} 
                            <Link to="/user/register" className="btn btn-outline-light px-4 py-2" style={{ borderRadius: '30px'}}> Go to Register </Link> 
                        </div> 
                    </div> 
                </div> 
                
                {/* Create Booking Section */} 
                
                <div className="col-md-4 mb-4"> 
                    <div className="card text-center border-0 shadow-lg" style={{ backgroundColor:'#0056b3', borderRadius: '15px'}}> 
                        <div className="card-body text-light py-5">
                            {/* Section title*/} 
                            <h5 className="card-title mb-3" style={{ fontSize: '1.5rem', fontWeight: '600'}}>Create booking</h5> 
                            {/* Short description about booking creation */} 
                            <p className="card-text mb-4" style={{ fontSize: '1rem'}}>Start your booking process.</p>
                            {/* Link to the booking creation page */} 
                            <Link to="/user/booking" className="btn btn-outline-light px-4 py-2" style={{ borderRadius: '30px'}}> Go to Create Bookings </Link> 
                        </div> 
                    </div> 
                </div> 
            </div> 
        </div> 
    ); 
}; 

export default UserHome;