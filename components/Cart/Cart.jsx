import Image from "next/image";
import cart from "../../assets/icons/cart.svg";
import styles from "./cart.module.scss";
import { useContext, useState } from "react";
import { cartContext } from "../../contextApi";
import CartItems from "./cartItems/cartItems";
import CartFooter from "./cartFooter/CartFooter";

export default function Cart() {
  // const {cartItems, setCartItems} = useContext(cartContext)

  const [open, setOpen] = useState(false);

  function openCart() {
    setOpen(true);
  }

  function closeCart(){
    setOpen(false)
  }

  return (
    <section className={`${!open ? styles.removeWidth : styles.addWidth} ${styles.section}` }>
      {!open ? (
        <div className={styles.imageContainer} onClick={openCart}>
          <Image src={cart} alt="cart" />
        </div>
      ) : (
        ""
      )}

      {open ? (
        <main>
          <h2>Order #34562</h2>
          <span>Delivery</span>
          <div>
            <h3>Item</h3>
            <h3>Qty</h3>
            <h3>Price</h3>
          </div>
          <CartItems />
          <CartFooter closeCart={closeCart} />
        </main>
      ) : (
        ""
      )}
    </section>
  );
}
