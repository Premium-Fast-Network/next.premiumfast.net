import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faTicketAlt } from '@fortawesome/free-solid-svg-icons'
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import { Website } from '../config/Website'

export default function Help() {
    function tiketSupport(e) {
        e.preventDefault();

        window.location.href = `${Website.clientarea}/contact.php`
    }

    function sendEmail(e) {
        e.preventDefault();

        window.location.href = `mailto:${Website.email}`
    }

    function sendWa(e) {
        e.preventDefault();

        const message = encodeURI(`Halo, Saya ingin bertanya tentang produk yang di tawarkan oleh ${Website.name}`)

        window.location.href = `https://api.whatsapp.com/send?phone=${Website.whatsapp}&text=${message}`;
    }

    return (
        <>
            <img src="/img/bottom.svg" alt="" />

            <section className="container mx-auto text-center py-6 mb-12">
                <h1 className="w-full my-2 text-5xl font-bold leading-tight text-center text-white">Butuh Bantuan?</h1>
                <div className="w-full mb-4">
                    <div className="h-1 mx-auto bg-white w-1/6 opacity-25 my-0 py-0 rounded-t"></div>
                </div>

                <button onClick={tiketSupport} className="bg-white hover:bg-green-500 hover:text-white theme-font-color font-bold py-2 px-4 rounded-full mx-2 my-2">
                    <FontAwesomeIcon icon={faTicketAlt} /> Kirim Tiket Support
                </button>
                <button onClick={sendEmail} className="bg-white hover:bg-green-500 hover:text-white theme-font-color font-bold py-2 px-4 rounded-full mx-2 my-2">
                    <FontAwesomeIcon icon={faEnvelope} /> Email {Website.email}
                </button>
                <button onClick={sendWa} className="bg-white hover:bg-green-500 hover:text-white theme-font-color font-bold py-2 px-4 rounded-full mx-2 my-2">
                    <FontAwesomeIcon icon={faWhatsapp} /> Chat WA {Website.phone}
                </button>
            </section>
        </>
    )
}