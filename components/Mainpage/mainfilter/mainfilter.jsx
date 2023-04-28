// import dropdown from '../../../assets/icons/Mask.png';
import dropdown from '../../../assets/icons/Mask.png'
import Image from 'next/image';
import styles from './mainfilter.module.scss'

export default function Mainfillter(){
    return(
        <section className={styles.container}>
            <h3 className={styles.header}>Choose Dishes</h3>
            <label htmlFor='dropdown'>
                <select id="dropdown">
                    <option value="Cheaper">Cheaper</option>
                    <option value="Mid-range">Mid-range</option>
                    <option value="Luxury">Luxury</option>
                    <option value="Crispy">Crispy</option>
                </select>
                <Image src={dropdown} alt="dropdown" />
            </label>
        </section>
    )
}