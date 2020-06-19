import React, {useEffect} from "react";
import "../../static/css/admin/MainContent.css";
import axios from "axios";
const MainContent = () => {

    useEffect(() => {
        axios.get("/status")
        .then(res => {
            if(res.data.status === "not verified") {
                window.location.href = "login";
            }
        })
    }, [])


    return (
        <div className="main_admin_content_container">
            Hwello
        </div>
    )
}

export default MainContent;