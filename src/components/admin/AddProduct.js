import React, { useEffect } from "react";
import "../../static/css/admin/AddProduct.css";
import axios from "axios";

const AddProduct = () => {

    useEffect(() => {
        axios.get("/status")
        .then(res => {
            if(res.data.status === "not verified") {
                window.location.href = "login";
            }
        })
    }, [])

    return (
        <div className="add_product_container">
            <div className="add_product_form_container" >
                <h1 className="add_product_title"> Add Product </h1>
              <div className="products_form">
                <form method="POST" action="/admin/add-product" enctype="multipart/form-data" >
                        <div className="form_group">
                            {/* <label> Name: </label> */}
                            <input className="add_products_input" type="text" name="product_name" placeholder="Product Name" />
                        </div>
                        <div className="form_group">
                            {/* <label> Category: </label> */}
                            <select name="cat_select" className="select_option_container add_products_input">
                                <option value="null">
                                    Please select a category
                                </option>
                                <option>
                                    Summer
                                </option>
                                <option>
                                    Winter
                                </option>
                                <option>
                                    Spring
                                </option>
                                <option>
                                    Fall
                                </option>
                                <option>
                                    Other
                                </option>
                            </select>
                        </div>
                        <div className="form_group">
                            <select name="product_cat_select" className="select_option_container add_products_input"> 
                                <option value="shirt">
                                    Shirt
                                </option>
                                <option value="coat">
                                    Coat
                                </option>
                                <option value="watch" >
                                    Watch
                                </option>
                                <option value="shoe" >
                                    Shoe
                                </option>
                            </select>
                        </div>
                        <div className="form_group">
                            {/* <label> Name: </label> */}
                            <input type="text" name="product_tags" placeholder="Product Tags" className="add_products_input" />
                        </div>

                        <div className="form_group textarea_group">
                            {/* <label> Product Name: </label> */}
                            <textarea name="desc" placeholder="Product Description" rows="5"  cols="38" />
                        </div>
                    
                        <div className="form_group">
                            {/* <label> Product Name: </label> */}
                            <input name="product_price"  className="add_products_input" type="text" placeholder="Product Price" />
                        </div>
                    
                        <div className="form_group">
                            {/* <label> Product Name: </label> */}
                            <input name="image" size="60" className="file_input" type="file" />
                        </div>
                        <div className="form_group submit_group">
                            <input className="submit_button_add_product" type="submit" value="Submit" />
                        </div>
                    </form>  
              </div>
            </div> 
            <a style={{marginTop: '50px'}} href="#" > Go Back </a>
        </div>
    )
}

export default AddProduct;