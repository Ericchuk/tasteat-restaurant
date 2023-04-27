import Link from "next/link"
import Image from "next/image"
import logo from '../../assets/icons/logo.svg';
import home from '../../assets/icons/Home.svg';
import cake from '../../assets/icons/eaten-cake.svg';
import pizza from '../../assets/icons/pizza.svg';
import bell from '../../assets/icons/notification-bell.svg';
import bookmark from '../../assets/icons/bookmark-icon.svg';
import people from '../../assets/icons/people-red.svg';
import setting from '../../assets/icons/setting.svg';
import transfer from '../../assets/icons/transfer-icon.svg';

import styles from './sidebar.module.scss'

export default function Sidebar(){

    const navDatas = [
        {
            id:0,
            path:"/",
            icon:home,
        },
        {
            id:1,
            path:"/about",
            icon:cake,
        },
        {
            id:2,
            path:"/",
            icon:pizza,
        },
        {
            id:3,
            path:"/",
            icon:bell,
        },
        {
            id:4,
            path:"/",
            icon:bookmark,
        },
        {
            id:5,
            path:"/",
            icon:people,
        },
        {
            id:6,
            path:"/",
            icon:setting,
        },
    ]


    const navData = navDatas.map((item) => {
        return(
            <li key={item.id}>
                <Link href={item.path}>
                    <Image src={item.icon} alt={item.path} />
                </Link>
            </li>
        )
    })


    return(
        <nav className={styles.nav}>
            <div>
                 <Image src={logo} alt="logo" />
            </div>

            <main>
                {navData}
            </main>
            

            <span>
                <Image src={transfer} alt="transfer" />
            </span>
        </nav>
    )
}