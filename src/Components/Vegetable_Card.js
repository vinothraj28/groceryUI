import React from 'react';
import {Navigate, useNavigate} from "react-router-dom";

const Vegetable_Card = (props) =>{

    let Navigate = useNavigate();
    const {name, price, date} = props.grocery;

    const ClickHandler = (name) => {
        props.getGroceryTrend(name);
        console.log(name);
        Navigate(`/final`);
    }
    return(
        
                    <tr onClick={() => {ClickHandler(name)}}>
                        <td>{name}</td>
                        <td>{price}</td>
                        <td>{date}</td>  
                    </tr>
    )

}

export default Vegetable_Card;