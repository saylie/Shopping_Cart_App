import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import ButtonComponent from "./Button_Component";
import { removeFromCart } from "../../Actions/ShoppingAppActions";

const Cart = () => {
    const cartItems = useSelector((state) => state.ProductReducer.cartItems);
    const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
    
    const dispatch = useDispatch();
    const handleRemoveFromCart = (productId) =>{
        dispatch(removeFromCart(productId)); 
    }
    return(
        <div className="Cart">
            <div>{React.createElement(FaShoppingCart)}<label>Cart</label></div>
            <ul>
                {cartItems.map(item => (
                <div className='cart'>
                    {item.title} - {item.quantity} - {item.price * item.quantity}
                    <div style={{margin:'20px'}}>
                    <ButtonComponent variant='success' btnClick={() => handleRemoveFromCart(item.id)} id={item.id} buttonName='remove' buttonText='Remove'/>
                    </div>
                </div>
                ))}
            </ul>
            <h3 style={{padding:'30px'}}>Total Price: $ {totalPrice}</h3>
        </div>
    )

}

export default Cart