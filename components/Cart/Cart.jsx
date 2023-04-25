import Image from "next/image";
import cart from '../../assets/icons/cart.svg';
import styles from './cart.module.scss'

export default function Cart(){
    return(
        <section className={styles.section}>
            <Image src={cart} alt="cart" />
        </section>
    )
}