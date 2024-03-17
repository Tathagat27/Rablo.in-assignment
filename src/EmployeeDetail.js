import React from 'react'
import { useLocation } from 'react-router-dom';

const EmployeeDetail = (props) => {

  const location = useLocation();
  const { item } = location.state;

  return (
    <div className='App'>
        <div className='employee-detail-container'>
            <div className='employee-name'>
                {item.name}
            </div>
            <div className='employee-detail-table'>
                <table className='employee-detail-table-1'>
                    <tbody>
                    <tr>
                        <td>Id</td>
                        <td>{item.id}</td>
                    </tr>
                    <tr>
                        <td>name</td>
                        <td>{item.name}</td>
                    </tr>
                    <tr>
                        <td>username</td>
                        <td>{item.username}</td>
                    </tr>
                    <tr>
                        <td>email</td>
                        <td>{item.email}</td>
                    </tr>
                    <tr>
                        <td>address</td>
                        <td>
                            <table>
                                <tbody>
                                <tr>
                                <td>street</td>
                                <td>{item.address.street}</td>
                            </tr>
                            <tr>
                                <td>suite</td>
                                <td>{item.address.suite}</td>
                            </tr>
                            <tr>
                                <td>city</td>
                                <td>{item.address.city}</td>
                            </tr>
                            <tr>
                                <td>zipcode</td>
                                <td>{item.address.zipcode}</td>
                            </tr>
                            <tr>
                                <td>geo</td>
                                <td>
                                    <table>
                                        <tbody>
                                            <tr>
                                        <td>lat</td>
                                        <td>{item.address.geo.lat}</td>
                                    </tr>
                                    <tr>
                                        <td>lng</td>
                                        <td>{item.address.geo.lng}</td>
                                    </tr>
                                        </tbody>
                                    </table>
                                    
                                </td>
                            </tr>
                                </tbody>
                            </table>
                                                        
                        </td>
                    </tr>
                    <tr>
                        <td>phone</td>
                        <td>{item.phone}</td>
                    </tr>
                    <tr>
                        <td>website</td>
                        <td>{item.website}</td>
                    </tr>
                    <tr>
                        <td>company</td>
                        <td>
                            <table>
                                <tbody>
                                <tr>
                                <td>name</td>
                                <td>{item.company.name}</td>
                            </tr>
                            <tr>
                                <td>catchPhrase</td>
                                <td>{item.company.catchPhrase}</td>
                            </tr>
                            <tr>
                                <td>bs</td>
                                <td>{item.company.bs}</td>
                            </tr>
                                </tbody>
                            </table>
                            
                        </td>
                    </tr>
                    </tbody>
                    
                </table>
            </div>
        </div>
    </div>
  )
}

export default EmployeeDetail