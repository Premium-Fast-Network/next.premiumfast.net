import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { useEffect } from 'react';
import ReactGA from 'react-ga';
ReactGA.initialize('UA-76200999-2');

export default function Layouts(props) {
    function tawkTo(propertyId){

        if (!window) {
            throw new Error('DOM is unavailable')
        }
    
        window.Tawk_API       = window.Tawk_API || {};
        window.Tawk_LoadStart = new Date();
    
        const tawk = document.getElementById('tawkId');
        if (tawk) {
            // Prevent TawkTo to create root script if it already exists
            return window.Tawk_API;
        }
    
        const script = document.createElement("script");
        script.id    = 'tawkId';
        script.async = true;
        script.src   = 'https://embed.tawk.to/' + propertyId + '/default';
        script.charset = 'UTF-8';
        script.setAttribute('crossorigin', '*');
    
        const first_script_tag = document.getElementsByTagName("script")[0];
        if (!first_script_tag || !first_script_tag.parentNode) {
            throw new Error('DOM is unavailable')
        }
    
        first_script_tag.parentNode.insertBefore(script, first_script_tag)
    }

    useEffect(() => {
        tawkTo('565f1adc143d6d8f72be968d')
        ReactGA.pageview(window.location.pathname + window.location.search);
    }, [])

    return (
        <>
            <Navbar />

            <main>
                {props.children}
            </main>

            <Footer />
            
        </>
    )
}