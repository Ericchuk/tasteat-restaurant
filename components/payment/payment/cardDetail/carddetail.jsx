import styles from './carddetail.module.scss';

export default function CardDetails(){
    const inputFields = [
        {
            id:0,
            label:"Cardholder Name",
            inputType:"text",
            placeholder:'Levi Ackerman'
        },
        {
            id:1,
            label:"Card Number",
            inputType:"number",
            placeholder:'2345 67890 1234 5678'
        },
        // {
        //     id:2,
        //     label:"Expiration Date",
        //     inputType:"date",
        //     placeholder:'02/2023'
        // },
        // {
        //     id:3,
        //     label:"CVV",
        //     inputType:"password",
        //     placeholder:'...'
        // },
    ]

    const inputField = inputFields.map((item)=>{
        return(
            <label key={item.id} id={item.inputType}>
                <p>{item.label}</p>
                <input type={item.inputType} placeholder={item.placeholder}/>
            </label>
        )
    })


    return(
        <section className={styles.field}>
            {inputField}
            <div>
         
            <label className={styles.date}>
                <p>Expiration Date</p>
                <input type="date" placeholder="02/2023"/>
            </label>
               <label className={styles.date}>
                <p>CVV</p>
                <input type="password" placeholder="..."/>
            </label>
            </div>
        </section>
    )
}