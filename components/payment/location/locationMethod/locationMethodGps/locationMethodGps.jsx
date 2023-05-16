import Image from 'next/image';
import locator from '../../../../../assets/icons/card.svg'
import locationMethodGpsStyles from './locationMethodGps.module.scss';

export default function LocationMethodGps(){
    return(
        <section className={locationMethodGpsStyles.gps}>
            <h2>Location Method</h2>

            <aside>
                <div>
                <Image src={locator} alt="locator" />
                <p>Use GPS</p>
                </div>
            </aside>
            <div>
                <hr />
                <p>or</p>
                <hr />
            </div>

            <aside className={locationMethodGpsStyles.manually}>
                <h5>Manually Entered Address</h5>
                <p>Please note that we only offer delivery within a 4-mile radius of our <span>restaurant location.</span></p>
                <input type="text" placeholder="Federal University of Agriculture, Abeokuta, Ogun state"/>
                <label>
                    <p>Delivery Note</p>
                    <input type="text" placeholder="Knock the door 3 times."/>
                </label>
            </aside>
        </section>
    )
}