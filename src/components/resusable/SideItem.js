import React, {Fragment} from "react";
import "../../static/css/resusable/SideItem.css";


const SideItem = (props) => {
    return (
        <Fragment>


            
            <p className="sidebar_title"> {props.title} </p>
            <div style={{...props.style}} className="sidebar_side_item">
               <div className="checkbox_box">
                    <input onClick={props.onChange} type="checkbox" id={props.firstOne} value={props.firstOne} name={props.firstOne} />
                    <label for={props.firstOne}> {props.firstOne} </label>
                </div>

                <div className="checkbox_box">
                   <input onClick={props.onChange} type="checkbox" id={props.secondOne} value={props.secondOne} name={props.secondOne}  />
                   <label for={props.secondOne}> {props.secondOne}  </label>
                </div>

                <div style={{...props.thirdBoxStyle}} className="checkbox_box">
                    <input onClick={props.onChange} type="checkbox" id={props.thirdOne} value={props.thirdOne} name={props.thirdOne} />
                    <label for={props.thirdOne} > {props.thirdOne} </label>
                </div>
                {props.children}
            </div>

        </Fragment>
    );

}

export default SideItem;