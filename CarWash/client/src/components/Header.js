import React from 'react'; 
import { Link } from 'react-router-dom'; 

function Header() { 
    return ( 
        <nav className="navbar navbar-expand-lg navbar-info bg-info"> 
            <div className="container"> 
                {/* Brand logo/link - navigates to the homepage */}
                <Link className="navbar-brand" to="/">Clean Car Wash</Link>
                {/* Button for toggling the navbar on smaller screens*/} 
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation"> 
                    <span className="navbar-toggler-icon"></span> 
                </button> 
                {/* Collapsible menu (responsive navbar)*/}
                <div className="collapse navbar-collapse" id="navbarNav"> 
                    <ul className="navbar-nav ms-auto"> 
                        <li className="nav-item"> 
                            {/* Link to homepage*/}
                            <Link className="nav-link" to="/">Home</Link> 
                        </li> 
                        {/* Link to User homepage*/}
                        <li className="nav-item"> 
                            <Link className="nav-link" to="/user">User Home</Link> 
                        </li> 
                        {/* Link to Admin homepage*/}
                        <li className="nav-item"> 
                            <Link className="nav-link" to="/admin">Admin Home</Link> 
                        </li> 
                    </ul> 
                </div> 
            </div>
        </nav>
    ); 
} 

export default Header;