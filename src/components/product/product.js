import React, { useState } from "react";

import Form from "../form/form";
import ProductList from "../productslist/productlist";
import { useNavigate } from "react-router-dom";

import './product.css'

function Products(props) {
    var navigateto=useNavigate();
    const [foods, setfoods] = useState([]);

    const addNewFoods = (food) => {
        setfoods((prevfoods) => { return [food, ...prevfoods] });
        // console.log(order);
    }

    const logout = () => {
        localStorage.setItem('login',false);
        props.logout(false);
        navigateto("/logout");
    }


    return (
        <div className="body">
            <button onClick={logout} className='logout'>Log out</button>
            <Form add={addNewFoods} />
            <div className="myorder">
                <div>
                    <h1>My Foods</h1>
                    <ProductList foods={foods}></ProductList>
                </div>
            </div>
        </div>
    )
}

export default Products;