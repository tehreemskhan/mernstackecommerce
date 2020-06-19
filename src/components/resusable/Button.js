import React from "react";
import "../../static/css/resusable/Button.css";

const Button = (props) => {

    const styles = {
        button: {
            border: "none",
            outline: "none",
            padding: '15px',
            borderRadius: '10px',
            backgroundColor: "#503047",
            color: "white"
        }
    }

    return (
        <button onClick={props.onClick} className="button" style={{ ...styles.button, ...props.style }} > {props.children} </button>
    );
}


export default Button;