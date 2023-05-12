import styles from './footer.module.scss';

export default function paymentFooter(){
    return(
        <footer className={styles.footer}>
            <button>Cancel</button>
            <button>Confirm Payment</button>
        </footer>
    )
}