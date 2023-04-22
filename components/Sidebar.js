import Link from 'next/link';
import Image from 'next/image'

import home from '../assets/icons/Home.svg';
import cake from '../assets/icons/eaten-cake.svg';
import pizza from '../assets/icons/pizza.svg';
import notificationBell from '../assets/icons/notification-bell.svg';
import bookmark from '../assets/icons/bookmark-icon.svg';
import peopleRed from '../assets/icons/people-red.svg';
import setting from '../assets/icons/setting.svg';
import transfer from '../assets/icons/transfer-icon.svg';
import sidebarStyles from '@/styles/Sidebar.module.css'

export default function Sidebar(){

    const icons = [
        {   id:0,
            icon:home,
            path:'/',
            alt:"logo",
        },
        {   
            id:1,
            icon:cake,
            path:'/',
            alt:"cake",
        },
        {   
            id:2,
            icon:pizza,
            path:'/',
            alt:"pizza",
        },
        {   
            id:3,
            icon:notificationBell,
            path:'/',
            alt:"notification-bell",
        },
        {   
            id:4,
            icon:bookmark,
            path:'/',
            alt:"Bookmark",
        },
        {   
            id:5,
            icon:peopleRed,
            path:'/',
            alt:"group of individuals",
        },
        {   
            id:6,
            icon:setting,
            path:'/',
            alt:"setting",
        },
        {   
            id:7,
            icon:transfer,
            path:'/',
            alt:"share",
        },
    ]

    const icon = icons.map((item) => {
        return(
            <li key={item.id} className={sidebarStyles.do}>
                <Link href={item.path}><Image src={item.icon} alt={item.alt} /></Link>
            </li>
        )
    })

    return(
        <nav className={sidebarStyles.nav}>
            {icon}
        </nav>
    )
}