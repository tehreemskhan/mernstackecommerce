import React, { useState, useEffect } from "react";
import {Table} from "react-bootstrap";
import "../../static/css/admin/AdminProducts.css";
import axios from "axios";


const AdminProducts = () => {

    const [data, setData] = useState([]);

    fetch("/admin/products/show-all")
    .then(res => res.json())
    .then(data => {
        console.log(data);
        setData(data);
    });

    useEffect(() => {
        axios.get("/status")
        .then(res => {
            if(res.data.status === "not verified") {
                window.location.href = "login";
            }
        })
    }, [])

    const deleteProduct = (id) => {
        axios.post(`/deleteProduct/${id}`)
        .then(res => {
            if(res.data) {
                window.location.reload();
            }
        })
    }



    return (
        <div className="admin_products_container" > 
            <div className="admin_products_title">
                <h1> Manage Products </h1>
            </div>
            <div className="admin_products_table">
                <Table striped bordered hover>
                <thead>
                    <tr>
                    <th>Name</th>
                    <th>Category</th>
                    <th>Description</th>
                    <th>Tags</th>
                    <th> Price </th>
                    <th> Delete Product </th>
                    </tr>
                </thead>
                <tbody>

                 {
                     data.map((item, index) => {
                        return (
                            <tr>
                                <td> {item.name} </td>
                                <td> {item.category} </td>
                                <td> {item.description} </td>
                                <td> {item.tags} </td>
                                <td> {item.price} </td>
                                <td> <a onClick={deleteProduct.bind(this, item._id)} href="#"> Delete Product </a> </td>
                            </tr>
                        )
                     })
                 }


                </tbody>
                </Table>
            </div>
            <div className="admin_products_quick_links">
                <a href="/admin/add-product" > Add Product </a>
                <a href="/admin"> Go Back </a>
            </div>
        </div>
    )
}

export default AdminProducts;