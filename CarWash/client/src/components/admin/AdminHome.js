import React from 'react'; 
import { Link } from 'react-router-dom'; 

const AdminHome = () => { 
    return ( 
        <div className="container mt-5"> 
            {/* Title for the Admin Dashboard */}
            <h1 className="text-center text-dark mb-5" style={{ fontWeight: 'bold', letterSpacing: '1px'}}>Admin Dashboard</h1> 
            {/* Section containing management options */}
            <div className="row justify-content-center"> 
                {/* Manage Users Section */} 
                <div className="col-md-4 mb-4"> 
                    <div className="card text-center border-0 shadow-lg" style={{ backgroundColor:'#007bff', borderRadius: '15px'}}> 
                        <div className="card-body text-light py-5"> 
                            <h5 className="card-title mb-3" style={{ fontSize: '1.5rem', fontWeight: '600'}}>Manage Users</h5> 
                            <p className="card-text mb-4" style={{ fontSize: '1rem'}}>View, delete, and manage users.</p> 
                            {/* Link to navigate to the Manage users page*/}
                            <Link to="/admin/manage-users" className="btn btn-outline-light px-4 py-2" style={{ borderRadius: '30px'}}> Go to Manage Users </Link> 
                        </div> 
                    </div> 
                </div> 
                
                {/* Manage Wash Types Section */} 
                
                <div className="col-md-4 mb-4"> 
                    <div className="card text-center border-0 shadow-lg" style={{ backgroundColor:'#0056b3', borderRadius: '15px'}}> 
                        <div className="card-body text-light py-5"> 
                            <h5 className="card-title mb-3" style={{ fontSize: '1.5rem', fontWeight: '600'}}>Manage Wash Types</h5> 
                            <p className="card-text mb-4" style={{ fontSize: '1rem'}}>Create, update, and delete wash types.</p>
                             {/* Link to navigate to the Manage wash types page*/}
                            <Link to="/admin/manage-wash-types" className="btn btn-outline-light px-4 py-2" style={{ borderRadius: '30px'}}> Go to Manage Wash Types </Link> 
                        </div> 
                    </div> 
                </div> 
                
                {/* Manage Bookings Section */} 
                
                <div className="col-md-4 mb-4"> 
                    <div className="card text-center border-0 shadow-lg" style={{ backgroundColor:'#003366', borderRadius: '15px'}}> 
                        <div className="card-body text-light py-5"> 
                            <h5 className="card-title mb-3" style={{ fontSize: '1.5rem', fontWeight: '600'}}>Manage Bookings</h5> 
                            <p className="card-text mb-4" style={{ fontSize: '1rem'}}>View and manage all bookings.</p> 
                            {/* Link to navigate to the Manage bookings page*/}
                            <Link to="/admin/manage-bookings" className="btn btn-outline-light px-4 py-2" style={{ borderRadius: '30px'}}> Go to Manage Bookings </Link> 
                        </div> 
                    </div> 
                </div> 
            </div> 
        </div> 
    ); 
}; 

export default AdminHome;