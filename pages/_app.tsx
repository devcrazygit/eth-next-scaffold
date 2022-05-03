import '../styles/globals.css'
import type { AppProps } from 'next/app'

import '../styles/feature/feature.css';
import '../styles/vendor/bootstrap.min.css';
import '../styles/vendor/nice-select.css';
import '../styles/vendor/slick-theme.css';
import '../styles/vendor/slick.css';

import '../styles/style.scss';


function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp
