import styles from './cartHeader.module.scss';

export default function CartHeader(){
    return(
        <main className={styles.main}>
            <h2>Order #34562</h2>
            <span>Delivery</span>
            <div>
              <h3>Item</h3>
              <h3>Qty</h3>
              <h3>Price</h3>
            </div>
        </main>
    )
}