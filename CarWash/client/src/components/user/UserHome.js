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
            <h1 className="text-center">Register and create your booking</h1> 
            <div className="row justify-content-center mt-4"> 
                {/* Manage Users Section */} 
                <div className="col-md-4"> 
                    <div className="card text-center"> 
                        <div className="card-body"> 
                            <h5 className="card-title">Register </h5> 
                            <p className="card-text">Register here and then proceed to creating your booking.</p> 
                            <Link to="/user/register" className="btn btn-primary"> Go to Register </Link> 
                        </div> 
                    </div> 
                </div> 
                
                {/* Manage Bookings Section */} 
                
                <div className="col-md-4"> 
                    <div className="card text-center"> 
                        <div className="card-body"> 
                            <h5 className="card-title">Create booking</h5> 
                            <p className="card-text">Start your booking process.</p> 
                            <Link to="/user/booking" className="btn btn-primary"> Go to Create Bookings </Link> 
                        </div> 
                    </div> 
                </div> 
            </div> 
        </div> 
    ); 
}; 

export default UserHome;