import ConfirmHeader from './confirmHeader/confirmHeader';
import CartItems from '../../Cart/cartItems/cartItems';
import CartFooter from '../../Cart/cartFooter/cartFooter';
import styles from './confirmationPage.module.scss';

export default function ConfirmationPage({back}){
    return(
        <section className={styles.section}>
            <ConfirmHeader back={back} />
            <CartItems />
            <CartFooter />
        </section>
    )
}