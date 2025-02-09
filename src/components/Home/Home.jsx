import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import TShirt from '../TShirt/TShirt';
import Cart from '../Cart/Cart';
import './Home.css';
import toast from 'react-hot-toast';

const Home = () => {
    const tshirts = useLoaderData();
    const [cart, setCart] = useState([]);

    const handleAddToCart = tshirt => {

        const existingTshirt = cart.find(ts => ts._id === tshirt._id);
        if (existingTshirt) {
            toast('You Have Already Added this T-Shirt')
        }
        else {
            const newCart = [...cart, tshirt];
            setCart(newCart)
        }
    }

    const handleRemoveFromCart = id => {
        const remaining = cart.filter(ts => ts._id !== id);
        setCart(remaining);

    }
    console.log(cart)
    return (
        <div className='home-container'>
            <div className='t-shirts-container'>
                {
                    tshirts.map(tshirt => <TShirt
                        handleAddToCart={handleAddToCart}
                        key={tshirt._id}
                        tshirt={tshirt}
                    ></TShirt>)
                }
            </div>
            <div className="cart-container">
                <Cart
                    cart={cart}
                    handleRemoveFromCart={handleRemoveFromCart}
                ></Cart>
            </div>
        </div>
    );
};

export default Home;
