import LocationHeader from '../locationHeader/locationHeader';
import LocationMethodGps from '../locationMethod/locationMethodGps/locationMethodGps';
import Footer from '../../payment/footer/footer';
import locationPageStyle from './locationPage.module.scss'

export default function LocationPage({cancelPayment}){
    return(
        <section className={locationPageStyle.locationPage}>
            <LocationHeader />
            <LocationMethodGps />
            <Footer cancelPayment={cancelPayment} />
        </section>
    )
}