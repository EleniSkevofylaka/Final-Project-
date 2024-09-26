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
      <div> 
        <Header />
        <div className='vh-100 vw-100'>
          <Routes> 
            <Route path="/" element={<HomePage />} /> 

            <Route path="/admin" element={<AdminHome />} /> 
            
            <Route path="/admin/manage-users" element={<ManageUsers />} />
            <Route path="/admin/manage-wash-types" element={<ManageWashTypes />} />
            <Route path="/admin/manage-bookings" element={<ManageBookings />} />
            

              <Route path="/user" element={<UserHome />} />
              
              <Route path="/user/register" element={<RegisterUser />} />
              <Route path="/user/booking" element={<AddBooking />} />
            
          </Routes> 
        </div> 
        <Footer />
      </div>
    </Router> 
  ); 
} 

export default App;