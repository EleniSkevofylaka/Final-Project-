import React, { useState, useEffect } from 'react'; 

function ManageWashTypes() { 
    const [washTypes, setWashTypes] = useState([]); 
    const [newWashType, setNewWashType] = useState({ name: '', description: '', price: '', duration: '' });
    const [editingWashType, setEditingWashType] = useState(null); 
    useEffect(() => { 
        fetchWashTypes(); 
    }, []); 
        
    const fetchWashTypes = async () => { 
        try { 
            const res = await fetch('http://localhost:3000/wash-types'); 
            const data = await res.json(); 
            setWashTypes(data); 
        
        } catch (error) { 
            console.error('Error fetching wash types:', error); 
        }
     }; 
     const handleAdd = async (e) => { e.preventDefault();  
                try { 
                    await fetch('http://localhost:3000/wash-types/create', { 
                        method: 'POST', 
                        headers: { 'Content-Type': 'application/json', }, 
                        body: JSON.stringify(newWashType), 
                    }); 
                    fetchWashTypes(); 
                    setNewWashType({ name: '', description: '', price: '', duration: '' }); 
        } catch (error) { 
            console.error('Error adding wash type:', error); 
        } 
    
    }; 
    const handleDelete = async (id) => { 
        
        try { 
            await fetch(`http://localhost:3000/wash-types/${id}`, { 
                method: 'DELETE', 
            }); 
            fetchWashTypes(); 
        } catch (error) { 
            console.error('Error deleting wash type:', error); 
        } 
    }; 
    const handleEdit = (washType) => {
        setNewWashType({
            name: washType.name || '',
            description: washType.description || '',
            price: washType.price || '',
            duration: washType.duration || ''
        });
        setEditingWashType(washType);
    };

    const handleUpdate = async (e) => {
        e.preventDefault();
        
        try { 
            await fetch(`http://localhost:3000/wash-types/${editingWashType.washtype_id}`, { 
                method: 'PUT', 
                headers: { 'Content-Type': 'application/json' }, 
                body: JSON.stringify(newWashType), 
            }); 
            fetchWashTypes(); 
            setNewWashType({ name: '', description: '', price: '', duration: '' }); 
            setEditingWashType(null); 
            // Clear the editing state after updating 
            } catch (error) { 
                console.error('Error updating wash type:', error); 
            } 
        };
    
    
    return ( 
    <div> 
        <h2 className='text-center'>Manage Wash Types</h2>
        <h3>All wash types</h3> 
        {washTypes.length > 0 ? ( 
            <ul className="list-group mt-3"> 
            {washTypes.map((washType) => ( 
                <li key={washType.washtype_id} className="list-group-item d-flex justify-content-between align-items-center"> 
                {washType.name} - {washType.description} - ${washType.price} - {washType.duration} mins 
                <div>
                <button className="btn btn-secondary btn-sm me-2" onClick={() => handleEdit(washType)} > Edit </button>
                <button className="btn btn-danger btn-sm" onClick={() => handleDelete(washType.washtype_id)} > Delete </button>
                    </div> 
                </li> 
            ))} 
            </ul>
        ) : (  
            <p>No wash types found</p>  
    )}

       
          
            <form onSubmit={editingWashType ? handleUpdate : handleAdd}> 
            <div className="mb-3"> 
                <label className="form-label">Name</label> 
                <input type="text" className="form-control" value={newWashType.name} onChange={(e) => setNewWashType({ ...newWashType, name: e.target.value })} /> 
                </div> 
                <div className="mb-3"> 
                <label className="form-label">Description</label> 
                <input type="text" className="form-control" value={newWashType.description} onChange={(e) => setNewWashType({ ...newWashType, description: e.target.value })} /> 
                </div> 
                    <div className="mb-3"> 
                        <label className="form-label">Price</label> 
                        <input type="number" className="form-control" value={newWashType.price} onChange={(e) => setNewWashType({ ...newWashType, price: e.target.value })} /> 
                        </div> 
                        <div className="mb-3"> 
                            <label className="form-label">Duration (mins)</label> 
                            <input type="number" className="form-control" value={newWashType.duration} onChange={(e) => setNewWashType({ ...newWashType, duration: e.target.value })} /> 
                            </div> 
                            <button type="submit" className="btn btn-primary">{editingWashType ? 'Update Wash Type' : 'Add Wash Type'}</button>
                            </form> 
                    
                            </div> 
                        ); 
                    } 
                
export default ManageWashTypes;
