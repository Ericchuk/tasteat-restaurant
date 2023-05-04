import styles from './paymentHeader.module.scss';

export default function PaymentHeader() {
    return (
      <section className={styles.section}>
        <main>
          <h1>Payment</h1>
          <p>3 payment method available</p>
        </main>
      </section>
    );
  }