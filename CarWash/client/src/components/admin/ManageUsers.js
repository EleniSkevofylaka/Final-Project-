import React, { useState, useEffect } from 'react';
    
function ManageUsers() {
    // State to hold the users data fetched from the server 
    const [users, setUsers] = useState([]); 
    // useEffect to run fetchUsers function when the component loads    
    useEffect(() => { 
        fetchUsers(); 
    }, []); // Ensures this runs only once when the component mounts
    // Function to fetch users from the server        
    const fetchUsers = async () => { 
        try { 
            // Make a Get request to fetch users from the backend 
            const res = await fetch('http://localhost:3000/users'); 
            const data = await res.json(); 
            setUsers(data); // Update state with the fetched users  
        } catch (error) { 
            console.error('Error fetching users:', error); 
        } 
    }; 
    // Function to handle deletion of a user        
    const handleDelete = async (id) => { 
        try { 
            // Make a DELETE request to remove the selected users by ID 
            await fetch(`http://localhost:3000/users/${id}`, { 
                method: 'DELETE',
            }); 
            fetchUsers(); // Fetch the updated users list after deletion
        } catch (error) { 
            console.error('Error deleting user:', error); 
        } 
    }; 
    return ( 
        <div className='container mt-5'> 
            {/* Page title*/}
            <h2 className='text-center text-dark mb-4' style={{ fontWeight: 'bold', letterSpacing: '1px'}}>Manage Users</h2> 
            {/* Conditionally render users list if available*/}
            {users.length > 0 ? ( 
                <ul className="list-group shadow-lg">
                {/* Map over the users array to display each user*/} 
                {users.map((user) => ( 
                    <li key={user.user_id} className="list-group-item d-flex justify-content-between align-items-center" style={{ backgroundColor: '#007bff', borderRadius: '10px', marginBottom: '10px', padding: '15px', color: '#ffffff', fontSize: '1.1rem'}}>
                    {/* Display user details */} 
                    <span>{user.name} - {user.email}</span>
                        {/* Button to delete the selected user */}
                        <button className="btn btn-sm px-4 py-2" style={{backgroundColor: '#0056b3', color: '#ffffff', borderRadius: '20px', fontWeight: 'bold', fontSize: '1.1rem', border: 'none'}} onClick={() => handleDelete( user.user_id)} > Delete </button> 
                        </li>  
                    ))} 
                </ul> 
            ) : (
                //If no users are found, display this message 
                <p className='text-center text-muted'>No users found</p> 
            )} 
        </div> 
    );
}
             
export default ManageUsers;