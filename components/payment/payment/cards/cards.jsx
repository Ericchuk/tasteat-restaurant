import cc from '../../../../assets/icons/card2.svg';
import card1 from '../../../../assets/icons/card.svg';
import paypal from '../../../../assets/icons/paypal.svg';
import tick from '../../../../assets/icons/tick-icon.svg';
import Image from 'next/image';
import styles from './cards.module.scss';

export default function Cards(){
    const cards = [
        {
            id:0,
            img:card1,
            name:'Credit card',
            quicker:tick,
        },
        {
            id:1,
            img:paypal,
            name:'Paypal'
        },
        {
            id:2,
            img:cc,
            name:'Cash'
        },
    ]

    const card = cards.map((item) => {
        return(
            <aside>
              {item.quicker ? <Image src={item.quicker} alt="verified" className={styles.tick} /> : " "}  
                <Image src={item.img} alt={item.name} />
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