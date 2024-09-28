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
        // {/* Page Header */}
            <h1 className="text-center">Register and create your booking</h1>
            {/* Main content section: Register and Booking links*/} 
            <div className="row justify-content-center mt-4"> 
                {/* Register Section */} 
                <div className="col-md-4"> 
                    <div className="card text-center"> 
                        <div className="card-body">
                            {/* Section title*/} 
                            <h5 className="card-title">Register </h5>
                            {/* Short description about registration */} 
                            <p className="card-text">Register here and then proceed to creating your booking.</p>
                            {/* Link to the registration page */} 
                            <Link to="/user/register" className="btn btn-primary"> Go to Register </Link> 
                        </div> 
                    </div> 
                </div> 
                
                {/* Create Booking Section */} 
                
                <div className="col-md-4"> 
                    <div className="card text-center"> 
                        <div className="card-body">
                            {/* Section title*/} 
                            <h5 className="card-title">Create booking</h5> 
                            {/* Short description about booking creation */} 
                            <p className="card-text">Start your booking process.</p>
                            {/* Link to the booking creation page */} 
                            <Link to="/user/booking" className="btn btn-primary"> Go to Create Bookings </Link> 
                        </div> 
                    </div> 
                </div> 
            </div> 
        </div> 
    ); 
}; 

export default UserHome;