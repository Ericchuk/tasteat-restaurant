import styles from './mainnav.module.scss'

export default function Mainnav(){

    const navItems = [
        {
            id:0,
            // path:'/',
            text:"Hot dishes",
        },
        {
            id:1,
            // path:'/',
            text:"Cold dishes",
        },
        {
            id:2,
            // path:'/',
            text:"Soup",
        },
        {
            id:3,
            // path:'/',
            text:"Grill",
        },
        {
            id:4,
            // path:'/',
            text:"Appetizer",
        },
        {
            id:5,
            // path:'/',
            text:"Dessert",
        },
    ]

    const navitem = navItems.map((item) => {
        return(
            <li key={item.id}>
                    {item.text}
            </li>
        )
    })

    return(
        <nav className={styles.nav}>
            {navitem}
        </nav>
    )
}