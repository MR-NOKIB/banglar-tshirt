/* eslint-disable react/prop-types */
import React from 'react';
import './Cart.css'

const Cart = ({ cart, handleRemoveFromCart }) => {
    // 1. if or if else conditional rendering
    let message;
    if (cart.length == 0) {
        message = <p>Please Add Some products</p>
    }
    else {
        message = <div>
            {/* Normal class and conditional class as well */}
            <h3 className={`flex rounded ${cart.length > 3 ? 'blue' : 'red'}`}>Boroloxxxx</h3>
            <p className={cart.length > 1 ? 'red' : 'blue'}><small>Thanks For Wasting Your money</small></p>
        </div>
    }
    return (
        <div>
            <h2>Order Summary: {cart.length}</h2>
            {/* 2 .Ternary Operator conditional rendering */}
            {
                cart.length > 2
                    ? <span>Aro Kino</span>
                    : <span>Fokira</span>
            }
            {message}
            {
                cart.map(tshirt => <p
                    key={tshirt._id}
                >{tshirt.name} <button onClick={() => handleRemoveFromCart(tshirt._id)}>X</button></p>)
            }
            {/* 3.  logical && conditional rendering  */}
            {
                cart.length === 2 && <p>Double Bonanja</p>
            }
            {/* 4. logical || conditional rendering */}
            {
                cart.length === 3 || <h3>Tinta to hoilo na</h3>
            }
        </div>
    );
};

export default Cart;


/**
 * CONDITIONAL RENDERING 
 * 1. Use if or if else to set a variable that will contain and element , components
 * 2. ternary Operator: condition ? 'for true' : 'false'
 * 3. logical &&: if the condition is true then code will execute
 * 4. logical ||: if the condition is false then the code will execute
**/

/**
 * Conditional CSS Class/Style
 * 
 **/ 