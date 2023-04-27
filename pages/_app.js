import '@/styles/globals.scss';
import variables from '../styles/_variables.scss'
import { Barlow } from 'next/font/google';


const barlow = Barlow({
  weight: ['400', '700'],
  subsets: ['latin'],
})



export default function App({ Component, pageProps }) {
  return(
    <article className={barlow.className}>
<Component {...pageProps} />
    </article>
      
  ) 
}
