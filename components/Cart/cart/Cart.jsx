import Image from "next/image";
import cart from "../../../assets/icons/cart.svg";
import styles from "./cart.module.scss";
import { useContext, useState } from "react";
import { cartContext } from "../../../contextApi";
import CartHeader from '../cartHeader/cartHeader';
import CartItems from "../cartItems/cartItems";
import CartFooter from "../cartFooter/CartFooter";
import PaymentPage from '../../payment/paymentPage/PaymentPage';

export default function Cart() {
  // const {cartItems, setCartItems} = useContext(cartContext)

  const [open, setOpen] = useState(false);
  const [proceed, setProceed] = useState(false);

  function openCart() {
    setOpen(true);
  }

  function closeCart() {
    setOpen(false);
  }

  function proceedToPayment(){
    setProceed(true);
    setOpen(false);
  }

  function back(){
    setProceed(false)
    setOpen(true)
    console.log("wwwwww")
  }

  return (
    <>
      <section
        className={`${!open ? styles.removeWidth : styles.addWidth} ${
          styles.section
        }`}
      >
        {!open ? (
          <div className={styles.imageContainer} onClick={openCart}>
            <Image src={cart} alt="cart" />
          </div>
        ) : (
          ""
        )}

        {open ? (
          <main className={styles.main}>
            <CartHeader />
            <CartItems />
            <CartFooter closeCart={closeCart} proceed={proceed} proceedToPayment={proceedToPayment}/>
          </main>
        ) : (
          ""
        )}
      </section>
      {proceed ? <PaymentPage back={back} /> : " "}
    </>
  );
}
