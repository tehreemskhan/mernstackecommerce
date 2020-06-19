import React from "react";
import "../../static/css/resusable/Card_Data.css";


const CardData = (props) => {
    
    
    return (
        <div style={{...props.style}}  className="card_content_container" >
            <h4> {props.title} </h4>
            <h3> {props.count} </h3>
            <a href={props.linkAddress} > {props.linkTitle} </a> 
        </div>
    )
}

export default CardData;