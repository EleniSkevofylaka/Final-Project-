import React, { useState } from 'react'; 

function RegisterUser() { 
    const [user, setUser] = useState(
        { name: '', email: '', password: '' }); 
        
    const handleChange = (e) => { setUser({ ...user, [e.target.name]: e.target.value }); 
    }; 
    
    const handleSubmit = async (e) => { e.preventDefault(); 
        try { 
            const res = await fetch('http://localhost:3000/users/register', { 
                method: 'POST', 
                headers: { 'Content-Type': 'application/json' }, 
                body: JSON.stringify(user), 
            }); 
            
            if (res.ok) { 
                const data = await res.json(); 
                console.log('User registered:', data); 
                
                // Reset the form 
                setUser({ name: '', email: '', password: '' }); 
            } else { 
                throw new Error('Failed to register user'); } 
            } catch (error) { 
                console.error('Error registering user:', error); 
            } 
        }; 
        
        return ( 
            <div> 
                <h2>Register User</h2> 
                <form onSubmit={handleSubmit}> 
                    <div className="mb-3"> 
                        <label className="form-label">Name</label> 
                        <input type="text" name="name" className="form-control" value={user.name} onChange={handleChange} required /> 
                    </div> 
                    <div className="mb-3"> 
                        <label className="form-label">Email</label> 
                        <input type="email" name="email" className="form-control" value={user.email} onChange={handleChange} required /> 
                    </div> 
                    <div className="mb-3"> 
                        <label className="form-label">Password</label> 
                        <input type="password" name="password" className="form-control" value={user.password} onChange={handleChange} required /> 
                    </div> 
                    <button type="submit" className="btn btn-primary">Register</button> 
                </form> 
            </div> 
        ); 
    } 
    
export default RegisterUser;
