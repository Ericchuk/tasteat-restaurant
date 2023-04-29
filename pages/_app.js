import '@/styles/globals.scss';
import variables from '../styles/_variables.scss'
import { cartProvider } from '../contextApi'

export default function App({ Component, pageProps }) {
  return (
    <cartProvider >
      <article>
        <Component {...pageProps} />
      </article>
    </cartProvider>


  )
}
