import locationHeaderStyles from './locationHeader.module.scss';

export default function LocationHeader(){
    return(
        <section className={locationHeaderStyles.header}>
            <h1>Location</h1>
            <p>Let us know where you are!</p>
        </section>
    )
}