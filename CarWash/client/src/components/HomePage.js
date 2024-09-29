/*import React from 'react'; 
import { Link } from 'react-router-dom'; 

function HomePage() { 
    return ( 
        <div className="container text-center mt-5"> 
            <h2 className="text-info">Welcome to Clean Car Wash!</h2> 
            <p className="lead"> At Clean Car Wash, we provide top-notch car cleaning services to make your vehicle shine like new. 
                Our dedicated team uses high-quality products and techniques to ensure your car is spotless and well cared for. 
                Choose us for a professional touch and exceptional results! 
            </p> 
            <p>Please choose an option:</p> 
            <div className="mt-4"> 
                <Link to="/user" className="btn btn-primary mx-2">User Home</Link> 
                <Link to="/admin" className="btn btn-secondary mx-2">Admin Home</Link> 
            </div> 
        </div> 
    ); 
} 
export default HomePage; */

import React from 'react'; 
import { Link } from 'react-router-dom'; 

function HomePage() { 
    return ( 
        <div> 
            {/* Hero Section - Jumbotron for main welcome message */} 
            <div className="jumbotron jumbotron-fluid text-black text-center bg-light" 
                style={{ 
                    height: '70vh', 
                    display: 'flex', 
                    justifyContent: 'center', 
                    alignItems: 'center', 
                    flexDirection: 'column' 
                }}> 
                {/* Main heading and introduction text */}
                <h1 className="display-4">Welcome to Clean Car Wash!</h1> 
                <p className="lead">At Clean Car Wash, we provide top-notch car cleaning services to make your vehicle shine like new. 
                    Our dedicated team uses high-quality products and techniques to ensure your car is spotless and well cared for. 
                    Choose us for a professional touch and exceptional results!</p> 
                <div> 
                    {/* Links to User and AAdmin HomePages */}
                    <Link to="/user" className="btn btn-lg btn-primary mx-2">User Home</Link> 
                    <Link to="/admin" className="btn btn-lg btn-secondary mx-2">Admin Home</Link> 
                </div> 
            </div> 
            
            {/* Car Wash Packages Section */} 
            <div className="container my-5"> 
                <h3 className="text-center text-info mb-4">Our Car Wash Packages</h3> 
                <div className="row justify-content-center"> 
                    {/* Basic Wash Package card*/} 
                    <div className="col-lg-3 col-md-6 mb-4"> 
                        <div className="card h-100 shadow-sm border-0" style={{ borderRadius: '15px' }}> 
                            <div className="card-header" style={{backgroundColor: '#007bff', color: 'white'}}>Basic Wash</div> 
                            <div className="card-body"> 
                                <p className="card-text">Exterior hand wash and towel dry</p> 
                                <h5 style={{ color: '#007bff' }}><strong>$15</strong></h5> 
                            </div>  
                        </div> 
                    </div> 
                    {/* Deluxe Wash package card */} 
                    <div className="col-lg-3 col-md-6 mb-4"> 
                        <div className="card h-100 shadow-sm border-0" style={{ borderRadius: '15px' }}> 
                            <div className="card-header" style={{backgroundColor: '#0056b3', color: 'white'}}>Deluxe Wash</div> 
                            <div className="card-body"> 
                                <p className="card-text">Exterior wash, towel dry, tire shine, and windows</p> 
                                <h5 style={{ color: '#0056b3' }}><strong>$25</strong></h5> 
                            </div> 
                        </div> 
                    </div> 
                    {/* Premium Wash package card */} 
                    <div className="col-lg-3 col-md-6 mb-4"> 
                        <div className="card h-100 shadow-sm border-0" style={{ borderRadius: '15px' }}> 
                            <div className="card-header" style={{backgroundColor: '#003366', color: 'white'}}>Premium Wash</div> 
                            <div className="card-body"> 
                                <p className="card-text">Full exterior and interior clean</p> 
                                <h5 style={{ color: '#0056b3' }}><strong>$40</strong></h5> 
                            </div> 
                        </div> 
                    </div> 
                </div> 
            </div> 
        </div> 
        
);

} 
export default HomePage;