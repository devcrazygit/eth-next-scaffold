import '../styles/globals.css';
import type { AppProps } from 'next/app';

import '../styles/feature/feature.css';
import '../styles/vendor/bootstrap.min.css';
import '../styles/vendor/nice-select.css';
import '../styles/vendor/slick-theme.css';
import '../styles/vendor/slick.css';

import '../styles/style.scss';
import store from '../lib/store';
import { Provider } from 'react-redux';

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <Provider store={store}>
            <Component {...pageProps} />
        </Provider>
    );
}

export default MyApp;
