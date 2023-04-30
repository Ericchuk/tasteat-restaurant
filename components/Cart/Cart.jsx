import Image from "next/image";
import cart from "../../assets/icons/cart.svg";
import styles from "./cart.module.scss";
import { useContext } from "react";
import { cartContext } from "../../contextApi";
import CartItems from './cartItems/cartItems';
import CartFooter from './cartFooter/CartFooter';


export default function Cart() {

    // const {cartItems, setCartItems} = useContext(cartContext)

  return (
    <section className={styles.section}>
      <div className={styles.imageContainer}>
        <Image src={cart} alt="cart" />
      </div>
      <main>
        <h2>Order #34562</h2>
        <span>Delivery</span>
        <div>
          <h3>Item</h3>
          <h3>Qty</h3>
          <h3>Price</h3>
        </div>
        <CartItems />
        <CartFooter />
      </main>
    </section>
  );
}
