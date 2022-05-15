import '../styles/globals.css'
import type { AppProps } from 'next/app'
// import 'pure-react-carousel/dist/react-carousel.es.css'
function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp
