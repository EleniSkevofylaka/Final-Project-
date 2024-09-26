import React from 'react'; 
import { Link } from 'react-router-dom'; 

const AdminHome = () => { 
    return ( 
        <div className="container mt-5"> 
            <h1 className="text-center">Admin Dashboard</h1> 
            <div className="row justify-content-center mt-4"> 
                {/* Manage Users Section */} 
                <div className="col-md-4"> 
                    <div className="card text-center"> 
                        <div className="card-body"> 
                            <h5 className="card-title">Manage Users</h5> 
                            <p className="card-text">View, delete, and manage users.</p> 
                            <Link to="/admin/manage-users" className="btn btn-primary"> Go to Manage Users </Link> 
                        </div> 
                    </div> 
                </div> 
                
                {/* Manage Wash Types Section */} 
                
                <div className="col-md-4"> 
                    <div className="card text-center"> 
                        <div className="card-body"> 
                            <h5 className="card-title">Manage Wash Types</h5> 
                            <p className="card-text">Create, update, and delete wash types.</p> 
                            <Link to="/admin/manage-wash-types" className="btn btn-primary"> Go to Manage Wash Types </Link> 
                        </div> 
                    </div> 
                </div> 
                
                {/* Manage Bookings Section */} 
                
                <div className="col-md-4"> 
                    <div className="card text-center"> 
                        <div className="card-body"> 
                            <h5 className="card-title">Manage Bookings</h5> 
                            <p className="card-text">View and manage all bookings.</p> 
                            <Link to="/admin/manage-bookings" className="btn btn-primary"> Go to Manage Bookings </Link> 
                        </div> 
                    </div> 
                </div> 
            </div> 
        </div> 
    ); 
}; 

export default AdminHome;