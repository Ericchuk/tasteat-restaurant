import styles from './CartFooter.module.scss'


export default function CartFooter({closeCart}){
    return(
        <section className={styles.section}>
            <div>
                <p>Discount</p>
                <p>$0</p>
            </div>
            <div>
                <p>Sub total</p>
                <p>$21.03</p>
            </div>

            <main>
                <button onClick={closeCart}>Go back</button>
                <button>Continue to Payment</button>
            </main>
        </section>
    )
}