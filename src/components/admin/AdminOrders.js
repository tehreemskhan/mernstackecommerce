import React, {useEffect} from "react"
import "../../static/css/admin/AdminOrders.css"
import {Table} from "react-bootstrap";
import axios from "axios";


const AdminOrders = () => {

    useEffect(() => {
        axios.get("/status")
        .then(res => {
            if(res.data.status === "not verified") {
                window.location.href = "login";
            }
        })
    }, [])



    return (
        <div className="admin_orders_container" >
            <div className="admin_order_title"> 
                <h1> Manage Orders </h1>
            </div>
            <div className="admin_order_title">
                <Table striped bordered hover>
                <thead>
                    <tr>
                    <th>#</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Username</th>
                    <th> View Order </th>
                    <th> Delete Order </th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <td>1</td>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                    <td> <a href="#"> View Order </a> </td>
                    <td> <a href="#" > Delete Order </a> </td>
                    </tr>
                    <tr>
                    <td>2</td>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>

                    </tr>
                    <tr>
                    <td>3</td>
                    <td colSpan="2">Larry the Bird</td>
                    <td>@twitter</td>
                    </tr>
                </tbody>
                </Table>
               
            </div>
            <a href="/admin" style={{marginTop: '20px'}} > Go Back </a>
        </div>
    )
}



export default AdminOrders