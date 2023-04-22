import Image from 'next/image'
import searchIcon from '../assets/icons/Mask.svg';
import logo from '../assets/icons/logo.svg'
import cart from '../assets/icons/cart.svg';
import headerStyles from '@/styles/Header.module.css'


export default function Header() {
    return (
        <header className={headerStyles.header}>
            <main className={headerStyles.main}>
                <span>
                    <Image src={logo} alt="logo" />
                </span>
                <div>
                    <h1>Riverside Flamez</h1>
                    <p>Date</p>
                </div>
            </main>
            <main className={headerStyles.input}>
                <label htmlFor="search">
                    <input type="text" placeholder="search for foods,coffee, etc..." />
                    <Image src={searchIcon} />
                </label>
                <div>
                    <span>
                        <Image src={cart} alt="cart" />
                    </span>
                </div>

            </main>

        </header>
    )
}