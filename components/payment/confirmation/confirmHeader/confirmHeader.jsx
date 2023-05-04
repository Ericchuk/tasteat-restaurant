import Image from 'next/image';
import line from '../../../../assets/icons/Line.svg';
import plus from '../../../../assets/icons/plus.svg';
import styles from './confirmHeader.module.scss';

export default function ConfirmHeader({back}){
    return(
        <section className={styles.section}>
            <Image src={line} alt="back arrow" onClick={back} />

            <div>
                <aside>
                    <h1>Confirmation</h1>
                    <p>Order #34562</p>
                </aside>
                <span>
                    <Image src={plus} alt="plus" />
                </span>
            </div>
        </section>
    )
}