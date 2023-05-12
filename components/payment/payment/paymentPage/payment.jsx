import PaymentHeader from '../paymentHeader/paymentHeader';
import Cards from '../cards/cards';
import CardDetails from '../cardDetail/carddetail'
import Footer from '../footer/footer'
import styles from './payment.module.scss'


export default function PaymentPageClog(){
    return(
        <section className={styles.paymentSection}>
            <PaymentHeader />
            <Cards />
            <CardDetails />
            <Footer />
        </section>
    )
}