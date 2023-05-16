import PaymentHeader from '../paymentHeader/paymentHeader';
import Cards from '../cards/cards';
import CardDetails from '../cardDetail/carddetail'
import Footer from '../footer/footer'
import styles from './payment.module.scss'


export default function PaymentPageClog({confirmPayment,cancelPayment, confirm}){
    return(
        <section className={styles.paymentSection}>
            <PaymentHeader />
            <Cards />
            <CardDetails />
            {confirm ? " " : <Footer confirmPayment={confirmPayment} cancelPayment={cancelPayment} />}
        </section>
    )
}