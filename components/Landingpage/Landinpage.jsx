import Cart from "../Cart/Cart";
import Mainpage from "../Mainpage/Mainpage";
import Sidebar from "../Sidebar/Sidebar";
import styles from './landingpage.module.scss'

export default function Landingpage(){
    return(
        <article className={styles.article}>
            <Sidebar />
            <Mainpage />
            <Cart />
        </article>
    )
}