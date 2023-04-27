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
            </label>
        </section>
    )
}