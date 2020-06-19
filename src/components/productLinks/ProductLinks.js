import React from "react";
import ProductCard from "../resusable/ProductCard";
import "../../static/css/main_content/ProductLink.css";

const ProductLinks = () => {

    const linkChange = (link) => {
        window.location.href=link;
    }

    return (
        <div className="products_link_container">
            <ProductCard linkChangeFunc={linkChange.bind(this, "/products/coats" )} imageClassName="image_div image_1" buttonName="Shop all Coats" />
            <ProductCard linkChangeFunc={linkChange.bind(this, "/products/shirts")} imageClassName="image_div image_2" buttonName="Shop all T-Shirts" />
            <ProductCard linkChangeFunc={linkChange.bind(this, "/products/shoes")} imageClassName="image_div image_3" buttonName="Shop all Shoes" />
            <ProductCard linkChangeFunc={linkChange.bind(this, "/products/watches")} imageClassName="image_div image_4" buttonName="Shop all Watches" />
        </div>
    );
}

export default ProductLinks;