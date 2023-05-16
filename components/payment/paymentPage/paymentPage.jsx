import PaymentPageClog from '../payment/paymentPage/payment';
import ConfirmationPage from '../confirmation/confirmationPage';
import LocationPage from '../location/locationPage/locationPage';
import styles from "./paymentPage.module.scss";
import { useState } from 'react';

export default function PaymentPage({back}) {

  const [confirm, setConfirm] = useState(false);

  function confirmPayment(){
    setConfirm(true);
  }

  function cancelPayment(){
    setConfirm(false);
  }
  
  return (
    <section className={styles.section}>
      <main className={`${confirm ? styles.addWidth : styles.removeWidth} ${
          styles.section
        }`}>
        <ConfirmationPage back={back} />
        <PaymentPageClog confirmPayment={confirmPayment} cancelPayment={cancelPayment} confirm={confirm} />
        {confirm ? <LocationPage cancelPayment={cancelPayment} /> : ""}  
      </main>
    </section>
  );
}
