import React, { useState, useEffect } from 'react';
    
function ManageUsers() { 
    const [users, setUsers] = useState([]); 
        
    useEffect(() => { 
        fetchUsers(); 
    }, []); 
            
    const fetchUsers = async () => { 
        try { 
            const res = await fetch('http://localhost:3000/users'); 
            const data = await res.json(); 
            setUsers(data); 
        } catch (error) { 
            console.error('Error fetching users:', error); 
        } 
    }; 
            
    const handleDelete = async (id) => { 
        try { 
            await fetch(`http://localhost:3000/users/${id}`, { 
                method: 'DELETE',
            }); 
            fetchUsers(); 
        } catch (error) { 
            console.error('Error deleting user:', error); 
        } 
    }; 
    return ( 
        <div> 
            <h2 className='text-center'>Manage Users</h2> 
            {users.length > 0 ? ( 
                <ul className="list-group"> 
                {users.map((user) => ( 
                    <li key={user.user_id} className="list-group-item d-flex justify-content-between align-items-center"> 
                    {user.name} - {user.email} 
                        <button className="btn btn-danger btn-sm" onClick={() => handleDelete( user.user_id)} > Delete </button> 
                        </li>  
                    ))} 
                </ul> 
            ) : ( 
                <p>No users found</p> 
            )} 
        </div> 
    );
}
             
export default ManageUsers;