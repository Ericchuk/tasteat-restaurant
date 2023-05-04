import cc from '../../../../assets/icons/card2.svg';
import paypal from '../../../../assets/icons/paypal.svg';
import Image from 'next/image';
import styles from './cards.module.scss';

export default function Cards(){
    const cards = [
        {
            id:0,
            img:cc,
            name:'credit card'
        },
        {
            id:1,
            img:paypal,
            name:'credit card'
        },
        {
            id:2,
            img:cc,
            name:'credit card'
        },
    ]

    const card = cards.map((item) => {
        return(
            <aside>
                <Image src={item.cc} alt={item.name} />
                <p>{item.name}</p>
            </aside>
        )
    })

    return(
        <section className={styles.section}>
            <h2>Payment Method</h2>

            <div>
                {card}
            </div>
        </section>
    )
}