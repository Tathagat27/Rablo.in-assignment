import React from 'react'
import { useNavigate } from 'react-router-dom'

const EmployeeCard = ({item, handleSingleDelete, multiSelect, selectedItems, setSelectedItems}) => {
    
    const nav = useNavigate();

    const handleItemSelect = (itemId) => {
        if (selectedItems.includes(itemId)) {
          setSelectedItems(selectedItems.filter(id => id !== itemId)); // Deselect item
        } else {
          setSelectedItems([...selectedItems, itemId]); // Select item
        }
    }

  return (
    <div className='card' >
        <div className='card-info' onClick={() => nav(`/employee/${item.id}`, {state: {item}})} title='Click to view the employee details' >
            <div className='employee-name-1'>{item.name}</div>
            <div className='employee-details'>
            <table>
                <tbody>
                <tr>
                   <td>Id </td> 
                   <td> : </td>
                   <td>{item.id}</td>
                </tr>
                <tr>
                   <td>Username </td> 
                   <td> : </td>
                   <td>{item.username}</td>
                </tr>
                <tr>
                   <td>Email </td> 
                   <td> : </td>
                   <td>{item.email}</td>
                </tr>
                <tr>
                   <td>Phone </td> 
                   <td> : </td>
                   <td>{item.phone}</td>
                </tr>
                </tbody>
                
            </table>
                
            </div>
        </div>
        
        {
            (multiSelect) ?
            (
                <div className='card-bottom' onClick={() => handleItemSelect(item.id)} style={{cursor: 'pointer', userSelect: 'none', justifyContent:'center', gap: '10px'}}>
                    <input
                        type="checkbox"
                        checked={selectedItems.includes(item.id)}
                        onChange={() => handleItemSelect(item.id)}
                    />
                    <p style={{fontSize: 'small'}}>Select to DELETE this card.</p>
                </div>
            ) :
            (
                <div className='card-bottom'>
                    <button className='editButton' title='For display purpose only (as mentioned)'>Edit</button>
                <button className='deleteButton' onClick={() => handleSingleDelete(item.id)}>Delete</button>
                </div>
            )
        }
        
    </div>
  )
}

export default EmployeeCard