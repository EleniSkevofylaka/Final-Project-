import React, { useState, useEffect } from 'react'; 

function ManageWashTypes() {
    // State for storing the list of wash types 
    const [washTypes, setWashTypes] = useState([]);
    // State for storing the new or edited wash types  
    const [newWashType, setNewWashType] = useState({ name: '', description: '', price: '', duration: '' });
    // State to track the wash type currently being edited 
    const [editingWashType, setEditingWashType] = useState(null);
    // useEffect to fetch wash types on components mount 
    useEffect(() => { 
        fetchWashTypes(); 
    }, []); // Ensures the effect runs only once

    // Function to fetch all wash types from the server    
    const fetchWashTypes = async () => { 
        try { 
            const res = await fetch('http://localhost:3000/wash-types'); 
            const data = await res.json(); 
            setWashTypes(data); // Update the washtypes state with fetched data  
        
        } catch (error) { 
            console.error('Error fetching wash types:', error); // Log any error
        }
     }; 
     // Function to handle adding a new wash type
     const handleAdd = async (e) => { e.preventDefault(); // Prevents form submission from refreshing the page   
                try { 
                    await fetch('http://localhost:3000/wash-types/create', { 
                        method: 'POST', 
                        headers: { 'Content-Type': 'application/json', }, 
                        body: JSON.stringify(newWashType), // Send the new wash type data
                    }); 
                    fetchWashTypes();
                    // Refresh the list after adding
                    setNewWashType({ name: '', description: '', price: '', duration: '' }); // Reset form fields
        } catch (error) { 
            console.error('Error adding wash type:', error); // log any error
        } 
    
    }; 
    // Function to handle deleting a wash type 
    const handleDelete = async (id) => { 
        
        try { 
            await fetch(`http://localhost:3000/wash-types/${id}`, { 
                method: 'DELETE', 
                // Send DELETE request to the server 
            }); 
            fetchWashTypes(); 
            // Refresh the list after deletion
        } catch (error) { 
            console.error('Error deleting wash type:', error); 
        } 
    }; 

    // Function to populate the form with data for editing  
    const handleEdit = (washType) => {
        setNewWashType({
            name: washType.name || '',
            description: washType.description || '',
            price: washType.price || '',
            duration: washType.duration || ''
        });
        // Set the wash type being edited 
        setEditingWashType(washType);
    };
    // Function to handle updating a wash type 
    const handleUpdate = async (e) => {
        // Prevent form submission from refreshing the page 
        e.preventDefault();
        
        try { 
            await fetch(`http://localhost:3000/wash-types/${editingWashType.washtype_id}`, { 
                method: 'PUT', 
                headers: { 'Content-Type': 'application/json' }, 
                body: JSON.stringify(newWashType), // Send the update wash type data  
            }); 
            fetchWashTypes(); 
            // Refresh the list after update 
            setNewWashType({ name: '', description: '', price: '', duration: '' });
            // Reset form fields  
            setEditingWashType(null); 
            // Clear the editing state  
            } catch (error) { 
                console.error('Error updating wash type:', error); 
            } 
        };
    
    
    return ( 
    <div className='container mt-5'> 
        <h2 className='text-center text-dark mb-4' style={{ fontWeight: 'bold', letterSpacing: '1px'}}>Manage Wash Types</h2>
        {/* Display all wash types */}
        <h3 className='text-center text-muted mb-4'>All wash types</h3> 
        {washTypes.length > 0 ? ( 
            <ul className="list-group shadow-lg"> 
            {washTypes.map((washType) => ( 
                <li key={washType.washtype_id} className="list-group-item d-flex justify-content-between align-items-center" style={{ backgroundColor: '#007bff', borderRadius: '10px', marginBottom: '10px', padding: '15px', color: '#ffffff', fontSize: '1.1rem'}} >
                    {/* Wash type details*/} 
                {washType.name} - {washType.description} - ${washType.price} - {washType.duration} mins 
                <div>
                    {/* Edit and delete buttons*/}
                <button className="btn btn-sm me-2" style={{backgroundColor: '#0056b3', color: '#ffffff', borderRadius: '20px', fontWeight: 'bold', border: 'none'}} onClick={() => handleEdit(washType)} > Edit </button>
                <button className="btn btn-danger btn-sm" style={{borderRadius: '20px', fontWeight: 'bold', fontSize: '0.9rem', padding: '8px 16px'}} onClick={() => handleDelete(washType.washtype_id)} > Delete </button>
                    </div> 
                </li> 
            ))} 
            </ul>
        ) : (  
            <p className='text-center text-muted'>No wash types found</p>  
    )}
            {/* Form for adding or updating wahs types */}
            <form onSubmit={editingWashType ? handleUpdate : handleAdd} className="mt-5 shadow-lg p-4" style={{ backgroundColor: '#003366', borderRadius: '15px', color: '#ffffff', }}> 
                <h4 className="text-center mb-4">{editingWashType ? 'Update Wash Type' : 'Add New Wash Type'}</h4> 
                <div className="mb-3"> 
                    <label className="form-label">Name</label> 
                    <input type="text" className="form-control" value={newWashType.name} onChange={(e) => setNewWashType({ ...newWashType, name: e.target.value })} style={{ borderRadius: '10px' }} /> 
                </div> 
                <div className="mb-3"> 
                    <label className="form-label">Description</label> 
                    <input type="text" className="form-control" value={newWashType.description} onChange={(e) => setNewWashType({ ...newWashType, description: e.target.value })} style={{ borderRadius: '10px' }} /> 
                </div> 
                <div className="mb-3"> 
                    <label className="form-label">Price</label> 
                    <input type="number" className="form-control" value={newWashType.price} onChange={(e) => setNewWashType({ ...newWashType, price: e.target.value })} style={{ borderRadius: '10px' }} /> 
                </div> 
                <div className="mb-3"> 
                    <label className="form-label">Duration (mins)</label> 
                    <input type="number" className="form-control" value={newWashType.duration} onChange={(e) => setNewWashType({ ...newWashType, duration: e.target.value })} style={{ borderRadius: '10px' }} /> 
                </div> 
                <button type="submit" className="btn btn-light btn-block" style={{ borderRadius: '20px', fontWeight: 'bold', padding: '10px 20px' }}> {editingWashType ? 'Update Wash Type' : 'Add Wash Type'} </button> 
            </form> 
        </div> 
    ); 
} 

export default ManageWashTypes;