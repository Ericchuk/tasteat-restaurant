import Image from "next/image";
import { useState } from 'react';
import dish from "../../../assets/images/image 4 (1).png";
import bin from "../../../assets/icons/bin.svg";
import styles from "./cartItem.module.scss";
import { useCartContext } from "../../../contextApi";

export default function CartItems() {
  
  // const { cartItems, setCartItems } = useCartContext();
  const [cartItems, setCartItems] =  useState([
    {
        id:0,
        img:dish,
        name:"Spicy seasoned seafood noodles",
        price:2.29,
        quantity:1,
    }
]);


  const cartItem = cartItems.map((item) => {
    const totalPrice = item.price * item.quantity;
    return(
      <>
        <main className={styles.cartItemName} key={item.id}>
        <div>
          <Image src={item.img} alt="dish" />
          <span>
            <p className={styles.description}>{item.name}</p>
            <p>${item.price}</p>
          </span>
        </div>
        <div>
          <span>{item.quantity}</span>
          <p>${totalPrice}</p>
        </div>
      </main>
      <aside>
        <label>
          <input
            type="text"
            placeholder="Order note..."
          />
        </label>

        <div>
            <Image src={bin} alt="bin" />
        </div>
      </aside>
      </>
    )
  })


  return (
    <section className={styles.section}>
      {cartItem}
    </section>
  );
}
