import React, { useState } from 'react'; 

function RegisterUser() { 
    // state to hold usre information
    const [user, setUser] = useState(
        { name: '', email: '', password: '' }); 
     // function to handle input changes and update state accordingly    
    const handleChange = (e) => { setUser({ ...user, [e.target.name]: e.target.value }); 
    // update the respective field in the user state
    }; 
    // function to handle form submission and send user data to the server 
    const handleSubmit = async (e) => { e.preventDefault();
        // Prevent the form from refreshing the page  
        try { 
            const res = await fetch('http://localhost:3000/users/register', { 
                method: 'POST', 
                headers: { 'Content-Type': 'application/json' }, 
                body: JSON.stringify(user), 
                // send user data in JSON format
            }); 
            
            if (res.ok) { 
                const data = await res.json(); 
                // parse the response data if successful
                console.log('User registered:', data);
                // log the registered user data  
                
                // Reset the form after successful registration
                setUser({ name: '', email: '', password: '' }); 
            } else { 
                throw new Error('Failed to register user');
                // throw error if the response is not OK   
            } 
            } catch (error) { 
                console.error('Error registering user:', error);
                // Log any error encountered during the request 
            } 
        }; 
        
        return ( 
            <div className='container mt-5'> 
                <h2 className='text-center text-dark mb-4' style={{ fontWeight: 'bold', letterSpacing: '1px'}}>Register User</h2> 
                {/* Form for registering a new user */}
                <form onSubmit={handleSubmit} className='shadow-lg p-4 rounded' style={{ backgroundColor: '#f8f9fa'}}> 
                    <div className="mb-3"> 
                        <label className="form-label text-dark">Name</label> 
                        <input type="text" name="name" className="form-control" style={{ borderRadius: '8px'}} value={user.name} onChange={handleChange} required /> 
                    </div> 
                    <div className="mb-3"> 
                        <label className="form-label text-dark">Email</label> 
                        <input type="email" name="email" className="form-control" style={{ borderRadius: '8px'}} value={user.email} onChange={handleChange} required /> 
                    </div> 
                    <div className="mb-3"> 
                        <label className="form-label text-dark">Password</label> 
                        <input type="password" name="password" className="form-control" style={{ borderRadius: '8px'}} value={user.password} onChange={handleChange} required /> 
                    </div> 
                    {/* Button to submit the form*/}
                    <button type="submit" className="btn btn-primary w-100" style={{ backgroundColor: '#0056b3', borderRadius: '20px', fontWeight:'bold'}} >Register</button> 
                </form> 
            </div> 
        ); 
    } 
    
export default RegisterUser;
