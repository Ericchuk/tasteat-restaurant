import Cart from "../Cart/cart/Cart";
import Mainpage from "../Mainpage/mainpage/Mainpage";
import Sidebar from "../Sidebar/Sidebar";
import Image from "next/image";
import { useState } from 'react';
import dish from "../../assets/images/image 4 (1).png";
import styles from './landingpage.module.scss';

export default function Landingpage(){

    const [cartItems, setCartItems] =  useState([
        {
            id:0,
            img:dish,
            name:"Spicy seasoned seafood noodles",
            price:2.29,
            quantity:1,
        }
    ]);
    
    //  append to cartItem 
    function placeOrder(item){
        setCartItems([...cartItems, item])
        console.log(cartItems)
    }
    
    return(
        <article className={styles.article}>
            <Sidebar />
            <Mainpage placeOrder={placeOrder} />
            <Cart cartItems={cartItems}/>
        </article>
    )
}