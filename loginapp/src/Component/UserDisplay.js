import React from 'react';
import {Link} from 'react-router-dom'

const UserDisplay = (props) => {
    const renderTable = ({userdata}) => {
        if(userdata){
            return userdata.map((item) => {
                return(
                    <tr key={item._id}>
                        <td>{item._id}</td>
                        <td>{item.name}</td>
                        <td>{item.phone}</td>
                        <td>{item.email}</td>
                        <td>{item.role}</td>
                    </tr>
                )
            })
        }
    }
    return(
        <div className="container">
            <center><h3>User List</h3></center>
            <Link to="/profile" className="btn btn-info">Profile</Link>
            <table className="table">
                <thead>
                    <tr>
                        <th>_Id</th>
                        <th>Name</th>
                        <th>Phone</th>
                        <th>Email</th>
                        <th>Role</th>
                    </tr>
                </thead>
                <tbody>
                    {renderTable(props)}
                </tbody>
            </table>
        </div>
    )
}

export default UserDisplay