import React, {useState, useEffect,  Fragment} from "react";
import { PayPalButton } from "react-paypal-button-v2";


import axios from "axios";


const Paypal = (props) => {
 
    useEffect(() => {
        console.log(props.amount);
    })
    
    const handleSuccess = (data) => {
        props.callback(data);
        
    }
    const handleError = (data) => {
        props.callback(data);
    }

    const buttonStyles = {
        layout: 'vertical',
        shape: 'rect',
    }

    
    return (
        <PayPalButton
            amount={props.amount}
            onSuccess={() => handleSuccess(true)}
            onError={() => handleError(false)}
            options={{
                clientId: "AVYgWCSQDVgwKFPE8hnCWG4VDCElQPlzRRX4il76P8I9QjYSAiKcNPi7yYFXwkalkTTt_Z2uodF5n9qK"
            }}
        />
    )
}



export default Paypal;



















