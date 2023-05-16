import styles from './footer.module.scss';

export default function paymentFooter({confirmPayment, cancelPayment}){
    return(
        <footer className={styles.footer}>
            <button onClick={cancelPayment}>Cancel</button>
            <button onClick={confirmPayment}>Confirm Payment</button>
        </footer>
    )
}