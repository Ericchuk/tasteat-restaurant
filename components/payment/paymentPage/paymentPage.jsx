import PaymentPageClog from '../payment/paymentPage/payment';
import ConfirmationPage from '../confirmation/confirmationPage'
import styles from "./paymentPage.module.scss";

export default function PaymentPage({back}) {
  return (
    <section className={styles.section}>
      <main>
        <ConfirmationPage back={back} />
        <PaymentPageClog />
      </main>
    </section>
  );
}
