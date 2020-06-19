import React, { useState, useEffect } from "react";
import "../../static/css/admin/AdminUsers.css";
import { Table } from "react-bootstrap";
import axios from "axios";

const AdminUsers = () => {

    const [data, setData] = useState([]);

    fetch("/admin/users/all")
    .then(res => res.json())
    .then(data => {
        console.log(data);
        setData(data);
    })
    
    useEffect(() => {
        axios.get("/status")
        .then(res => {
            if(res.data.status === "not verified") {
                window.location.href = "/login";
            }
        })
    }, [])


    const deleteUser = (id) => {
        axios.post(`/deleteUser/${id}`)
        .then(res => {
            console.log(res);
            if(res) {
                window.location.reload();
            }
        })
    }


    return (
        <div className="admin_users_container" >
            <div className="admin_users_title">
                <h1> Manage Users </h1>
            </div>
            <div className="admin_users_table"> 
                <Table striped bordered hover>
                <thead>
                <tr>
                <th>Username</th>
                <th>Email</th>
                <th>Number</th>
                <th> Delete User </th>
                
                </tr>
                </thead>
                <tbody>
                
                {
                    data.map((item, index) => {
                        return (
                            <tr>
                                <td> {item.username} </td>
                                <td> {item.email} </td>
                                <td> {item.number} </td> 
                                <td> <a href="#" onClick={deleteUser.bind(this, item._id)}>Delete User</a> </td>
                            </tr>
                        )
                    })
                }

                </tbody>
                </Table>
            </div>
            <a href="/admin"> Go Back </a>
        </div>
    )
}

export default AdminUsers;