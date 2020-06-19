import React, { useEffect, useState, Fragment } from "react";
import "../../static/css/admin/Admin.css";
import Card from "../resusable/CardData";
import axios from "axios";

const Admin = () => {

    const [usersCount, setUsersCount] = useState();
    const [productCount, setProductCount] = useState();
    useEffect(() => {
        axios.get("/status")
        .then(res => {
            if(res.data.status === "not verified") {
                window.location.href="/login";
            }
        })

        axios.get("/dbCount/cart")
        .then(res => {
            setUsersCount(res.data.length);
        })

        axios.get("/dbCount/products")
        .then(res => {
            setProductCount(res.data.length);
        })

    }, [])

    return (
        <Fragment>
        <div className="admin_main_container">
            <h1> Welcome Admin </h1>
            <div className="admin_card_container">
                <Card linkAddress="/admin/users" count={usersCount} linkTitle="Manage Users" title="Users" style={{backgroundColor: "#8D5A97"}}  />
                <Card linkAddress="/admin/products" count={productCount} linkTitle="Manage Products" title="Products" style={{backgroundColor: "#907F9F"}} />
            </div>
        </div>
        <div className="backButtonContainer">
            <a href="/" style={{textAlign: "center"}} > Go Back </a>
        </div>

        </Fragment>
    )
}

export default Admin;
