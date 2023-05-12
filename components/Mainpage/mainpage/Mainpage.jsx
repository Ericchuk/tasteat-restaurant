import Mainnav from "../Mainnav/mainnav";
import Maincard from "../maincards/Maincard";
import Mainfillter from "../mainfilter/mainfilter";
import Mainhead from "../mainhead/Mainhead";
import styles from './mainpage.module.scss';

export default function Mainpage({placeOrder}){
    return(
        <section className={styles.section}>
            <Mainhead />
            <Mainnav />
            <Mainfillter />
            <Maincard placeOrder={placeOrder} />
        </section>
    )
}