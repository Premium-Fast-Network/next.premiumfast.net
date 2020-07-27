import '../styles/app.css';

// FontAwesome in SSR (Server Side Rendering)
import { config } from '@fortawesome/fontawesome-svg-core'
config.autoAddCss = false

// Added FontAwesome CSS
import '@fortawesome/fontawesome-svg-core/styles.css'

// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }) {
    return <Component {...pageProps} />
}