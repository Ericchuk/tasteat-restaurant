import Image from 'next/image';
import searchIcon from '../../../assets/icons/Mask.svg';
import styles from './mainhead.module.scss';

export default function Mainhead(){
    return(
        <header className={styles.header}>
            <div>
                <h1>Tasteat</h1>
                <p>Wednesday, 26 April 2023 </p>
            </div>
            <div>
                <label htmlFor="search">
                    <input type="text" id="search" placeholder="Search for food, coffe, etc.."/>
                    <Image src ={searchIcon} alt="search-icon" />
                </label>
            </div>
        </header>
    )
}