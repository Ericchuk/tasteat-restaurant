import noodles from '../../../assets/images/image 4 (3).png';
import pasta from '../../../assets/images/image 4.png';
import dumpings from '../../../assets/images/image 4 (1).png';
import spinach from '../../../assets/images/image 4 (2).png';
import omelette from '../../../assets/images/image 4(1).png';
import Image from 'next/image';
import styles from './maincard.module.scss';


export default function Maincard({placeOrder}){
    const dishes = [
        {
            id:0,
            img:noodles,
            name:"Spicy seasoned seafood noodles",
            price:2.29,
            rating:4.5,
            amountAvailable:20,
        },
        {
            id:1,
            img:pasta,
            name:"Spicy seasoned seafood noodles",
            price:2.29,
            rating:4.5,
            amountAvailable:20,
        },
        {
            id:2,
            img:dumpings,
            name:"Spicy seasoned seafood noodles",
            price:2.29,
            rating:4.5,
            amountAvailable:20,
        },
        {
            id:3,
            img:dumpings,
            name:"Spicy seasoned seafood noodles",
            price:2.29,
            rating:4.5,
            amountAvailable:20,
        },
        {
            id:4,
            img:dumpings,
            name:"Spicy seasoned seafood noodles",
            price:2.29,
            rating:4.5,
            amountAvailable:20,
        },
        {
            id:5,
            img:spinach,
            name:"Spicy seasoned seafood noodles",
            price:2.29,
            rating:4.5,
            amountAvailable:20,
        },
        {
            id:6,
            img:spinach,
            name:"Spicy seasoned seafood noodles",
            price:2.29,
            rating:4.5,
            amountAvailable:20,
        },
        {
            id:7,
            img:omelette,
            name:"Spicy seasoned seafood noodles",
            price:2.29,
            rating:4.5,
            amountAvailable:20,
        },
    ]

    const dish = dishes.map((item) => {
        return(
            <div key={item.id}>
                <Image src={item.img} alt={item.name} />
                <h3>{item.name}</h3>
                <p>${item.price}</p>
                <p>{item.amountAvailable} Bowls available</p>
                <button onClick={() => placeOrder(dish[item.id])}>Order now</button>
            </div>
        )
    })


    return(
        <section className={styles.section}>
            {/* fetch data using ssg*/}
            {dish}
        </section>
    )
}