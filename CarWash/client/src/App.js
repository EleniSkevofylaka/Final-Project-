import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; 
import HomePage from './components/HomePage' 
import AdminHome from './components/admin/AdminHome';
import ManageUsers from './components/admin/ManageUsers';
import ManageWashTypes from './components/admin/ManageWashTypes';
import ManageBookings from './components/admin/ManageBookings';
import UserHome from './components/user/UserHome';
import RegisterUser from './components/user/RegisterUser';
import AddBooking from './components/user/AddBooking';
import Header from './components/Header';
import Footer from './components/Footer';

function App() { 
  return (
     <Router> 
        {/* Inclued the Header component at the top of every page */}
        <Header />
        {/* Define a container for the main content with full view height and width*/}
        <div className='vh-100 vw-100'>
          <Routes> 
            {/* Route to render HomePage component at the root URL */}
            <Route path="/" element={<HomePage />} /> 
              {/* Admin- related routes*/}
            <Route path="/admin" element={<AdminHome />} /> 
            <Route path="/admin/manage-users" element={<ManageUsers />} />
            <Route path="/admin/manage-wash-types" element={<ManageWashTypes />} />
            <Route path="/admin/manage-bookings" element={<ManageBookings />} />
                {/* User-related routes*/}
              <Route path="/user" element={<UserHome />} />
              <Route path="/user/register" element={<RegisterUser />} />
              <Route path="/user/booking" element={<AddBooking />} />
          </Routes> 
        </div> 
        {/* Inclued the Footer component at the bottom of every page */}
        <Footer />
    
    </Router> 
  ); 
} 

export default App;