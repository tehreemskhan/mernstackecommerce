import React, { Fragment } from "react";

//Components Import Start
import ProductLinks from "../productLinks/ProductLinks";
import Discount from "../Main_Content/Discount";
import SideSplit from "../resusable/SideSplit";
import Newsletter from "./Newsletter";
import Footer from "../footer/Footer";
import Copyright from "../Main_Content/Copyright";
//Components Import End
import "../../static/css/main_content/Main_Content.css";



const Main_Content = () => {
    return (
        <Fragment>
            <ProductLinks />
            <Discount />
            <ProductLinks />
            <SideSplit />
            <Newsletter />
            <Footer />
            <Copyright />
        </Fragment>
    );

}

export default Main_Content;