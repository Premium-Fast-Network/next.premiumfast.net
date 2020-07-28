import Layouts from '../../components/Layouts'
import HeadContent from '../../components/HeadContent'
import HeadTitle from '../../components/HeadTitle'
import TableDefault from '../../components/TableDefault'
import Featured from '../../components/Featured'
import { Website } from '../../config/Website'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

export default function WhatsappGateway() {

    // Head Data
    const head = {
        title: 'Whatsapp Gateway',
        description: 'Kirim Notifikasi Pesan melalui Whatsapp seperti Whatsapp dari HP anda sendiri, dengan Device Less, anda tidak perlu menyiapkan device apapun lagi. Anda juga bisa menggunakan nomor pribadi anda sebagai gateway.',
        keywords: 'whatsapp gateway, whatsapp, kirim pesan whatsapp, whatsapp rest api, whatsapp api',
        image: '/img/png/undraw_note_list_re.png',
        imageSvg: '/img/undraw_note_list_re.svg'
    }

    // Products Data
    const products = [
        { 
            name: 'Budget',
            price: 'Rp. 200k',
            duration: '/bulan',
            featured: false,
            link: `${Website.clientarea}/cart.php?a=add&pid=173`,
            description: [
                '1 Private Nomor Whatsapp',
                '2500 Quota Pesan',
                'Addons Quota Pesan',
                'Kirim/Terima Pesan Text',
                'Maksimal 25.000 Kontak HP',
                'Simulate Typing',
                'Auto Leave Group',
                'Privacy Message',
                'Tracking Message',
                'Webhook Incoming Message',
                'Terima Pesan Text Dari Group',
                'API Limit 30x/Menit',
                'Tracking Log 30 Days',
                'Device Less',
                'Aktivasi 24 Jam (Max)',
            ]
        },
        { 
            name: 'Full',
            price: 'Rp. 325k',
            duration: '/bulan',
            featured: true,
            link: `${Website.clientarea}/cart.php?a=add&pid=162`,
            description: [
                '1 Private Nomor Whatsapp',
                '3 Nomor Whatsapp Cadangan',
                '5000 Quota Pesan',
                'Addons Quota Pesan',
                'Kirim/Terima Pesan Text',
                'Maksimal 25.000 Kontak HP',
                'Simulate Typing',
                'Auto Leave Group',
                'Privacy Message',
                'Tracking Message',
                'Webhook Incoming Message',
                'Terima Pesan Text Dari Group',
                'API Limit 40x/Menit',
                'Tracking Log 90 Days',
                'Device Less',
                'Aktivasi 24 Jam (Max)',                
            ]
        },
        { 
            name: 'Full VIP',
            price: 'Rp. 659k',
            duration: '/bulan',
            featured: false,
            link: `${Website.clientarea}/cart.php?a=add&pid=182`,
            description: [
                '1 Private Nomor Whatsapp',
                '5 Nomor Whatsapp Cadangan',
                '10000 Quota Pesan',
                'Addons Quota Pesan',
                'Kirim/Terima Pesan Text',
                'Maksimal 25.000 Kontak HP',
                'Simulate Typing',
                'Auto Leave Group',
                'Privacy Message',
                'Tracking Message',
                'Webhook Incoming Message',
                'Webhook Tracking Message',
                'Kirim Pesan Gambar (2 MB)',
                'Terima Pesan Gambar',
                'Kirim Pesan Dokumen (2 MB)',
                'Terima Pesan Dokumen',
                'Terima Pesan Text Dari Group',
                'API Limit 50x/Menit',
                'Tracking Log 180 Days',
                'Deviceless',
                'Aktivasi 24 Jam (Max)',                
            ]
        },
        { 
            name: 'Full VVIP',
            price: 'Rp. 999k',
            duration: '/bulan',
            featured: true,
            link: `${Website.clientarea}/cart.php?a=add&pid=183`,
            description: [
                '1 Private Nomor Whatsapp',
                '10 Nomor Whatsapp Cadangan',
                '20000 Quota Pesan',
                'Addons Quota Pesan',
                'Kirim/Terima Pesan Text',
                'Maksimal 25.000 Kontak HP',
                'Simulate Typing',
                'Auto Leave Group',
                'Privacy Message',
                'Tracking Message',
                'Webhook Incoming Message',
                'Webhook Tracking Message',
                'Kirim Pesan Gambar (5 MB)',
                'Terima Pesan Gambar',
                'Kirim Pesan Dokumen (5 MB)',
                'Terima Pesan Dokumen',
                'Kirim Pesan Text ke Group',
                'Terima Pesan Text Dari Group',
                'Kirim Pesan Gambar ke Group',
                'Terima Pesan Gambar Dari Group',
                'Kirim Pesan Dokumen ke Group',
                'Terima Pesan Dokumen Dari Group',
                'API Limit 60x/Menit',
                'Tracking Log 365 Days',
                'Deviceless',
                'Aktivasi 24 Jam (Max)',                
            ]
        }
    ];

    const featuredLists = [
        {
            name: 'Nama dan Foto Profile',
            icon: ['fas', 'id-card'],
            description: 'Anda bisa menggunakan nama dan foto profile whatsapp sesuai yang anda inginkan, layaknya akun whatsapp pada umumnya (Pesan yang di terima oleh pengguna berupa nomor, bukan nama).'
        },
        {
            name: 'REST API',
            icon: ['fas', 'paper-plane'],
            description: 'Kami menyediakan REST API beserta DOKUMENTASI PENGGUNAAN beserta SDK atau Module yang bisa anda gunakan untuk Integrasi ke Sistem Anda.'
        },
        {
            name: 'Privacy Kirim Pesan',
            icon: ['fas', 'user-secret'],
            description: 'Jika fitur ini diaktifkan, semua pesan keluar tidak akan tersimpan atau tercatat pada sistem kami.'
        },
        {
            name: 'Webhook',
            icon: ['fas', 'route'],
            description: 'Lacak setiap pesan masuk, dibaca atau tidak oleh user dan integrasi ke sistem anda dengan Webhook Incoming Message dan Webhook Tracking Message.'
        },
        {
            name: 'Kirim dan Terima Pesan',
            icon: ['fas', 'exchange-alt'],
            description: 'Anda bisa melakukan pengiriman dan menerima pesan melalui panel kami. Semua pesan masuk akan diteruskan ke email atau whatsapp sebagai notifikasi.'
        },
        {
            name: 'BOT Auto Reply',
            icon: ['fas', 'robot'],
            description: 'Anda bisa setting bot autoreply yang bisa digunakan untuk membalas pesan masuk secara instant jika mengandung kata-kata tertentu.'
        },
        {
            name: 'Auto Sync to Google Contact',
            icon: ['fas', 'address-book'],
            description: 'Setiap kontak yang disimpan, akan di sinkronkan automatis ke google contact oleh sistem kami.'
        },
        {
            name: 'Contact List and Group',
            icon: ['fas', 'file-contract'],
            description: 'Tersedia fitur list kontak dan grup kontak untuk mempermudah anda untuk memilah kontak dan mengirim pesan per-grup kontak.'
        },
        {
            name: 'Automatis Masuk/Keluar Group',
            icon: ['fas', 'users-cog'],
            description: 'Tidak ingin nomor anda dimasukkan ke group? Fitur ini memungkinkan anda langsung keluar dari group setiap kali mereka menambahkan kontak anda.'
        },
        {
            name: 'Pesan Template',
            icon: ['fas', 'file-signature'],
            description: 'Buat pesan anda semakin natural dengan template pesan.'
        },
        {
            name: 'Unlimited Storage',
            icon: ['fas', 'hdd'],
            description: 'Unlimited penyimpanan gambar atau dokumen dari pesan masuk atau keluar.'
        },
        {
            name: 'Phone Validation',
            icon: ['fas', 'id-card-alt'],
            description: 'Validasi Kontak dan Dapatkan Foto Profile Gambar Kontak.'
        }
    ]

    return (
        <>
            <HeadTitle customHead={head} />

            <Layouts>
                <HeadContent
                    title={((<><FontAwesomeIcon icon={faEnvelope} /> {head.title}</>))}
                    description={head.description}
                    imageSvg={head.imageSvg}
                >
                </HeadContent>

                <TableDefault products={products} />

                <Featured lists={featuredLists} />

            </Layouts>
        </>
    )
}