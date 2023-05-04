import styles from './CartFooter.module.scss'


export default function CartFooter({closeCart, proceed, proceedToPayment}){
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

           {!proceed ? <main>
                <button onClick={closeCart}>Go back</button>
                <button onClick={proceedToPayment}>Continue to Payment</button>
            </main> : " "}
        </section>
    )
}