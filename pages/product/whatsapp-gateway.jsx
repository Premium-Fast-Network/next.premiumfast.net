import Layouts from '../../components/Layouts'
import HeadContent from '../../components/HeadContent'
import HeadTitle from '../../components/HeadTitle'
import TableDefault from '../../components/TableDefault'
import Featured from '../../components/Featured'
import FAQ from '../../components/FAQ'
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

    const faqs = [
        {
            "title": "Apa itu Whatsapp Gateway?",
            "description": "Whatsapp Gateway merupakan software pengolahan data yang dapat dengan mudah mengirimkan pesan melalui panel website atau REST API.\n\nDengan Whatsapp Gateway, anda bisa integrasi ke sistem anda langsung dan melakukan pengiriman pesan whatsapp personal, group atau pesan massal (schedule)."
        },
        {
            "title": "Apakah Nama Profile dan Gambar Profile Bisa Di Ganti?",
            "description": "Tentu, untuk pergantian bisa menghubungi kami melalui support tiket."
        },
        {
            "title": "Apa itu Nomor Pengganti Cadangan?",
            "description": "Nomor Pengganti Cadangan adalah stock nomor whatsapp yang kami berikan secara gratis tiap bulannya kepada pelanggan.\n\nSehingga jika nomor anda terblokir, anda tidak perlu membayar biaya tambahan selama quota tersebut masih ada.\n\nSilahkan hubungi kami jika ingin melakukan pegantian atau pengecekan sisa nomor cadangan.\n\nNomor yang digunakan random berbagai operator tidak dapat pilih."
        },
        {
            "title": "Apa itu Privacy Kirim Pesan?",
            "description": "Kami sangat menghargai privasi tiap pengguna, ketika fitur privasi ini diaktifkan, maka semua pesan keluar tidak akan tersimpan pada sistem kami secara automatis."
        },
        {
            "title": "Auto Sync to Google Contact",
            "description": "Sistem terbaru kami saat ini pada v0.7 yang di update pada 27-10-2019 telah tersedia automatis sinkron ke google contact, setiap anda menambahkan, mengedit atau menghapus contact, sistem kami akan secara automatis melakukan sinkron di background.\n\nDetail : https:\/\/docs.premiumfast.net\/tutorials\/whatsapp-gateway\/changelog#0-7-2019-10-27"
        },
        {
            "title": "Apa itu Deviceless?",
            "description": "Deviceless maksudnya anda tidak memerlukan atau menyediakan perangkat lagi, semua perangkat telah kami sediakan, sehingga ketika produk diaktifkan, anda bisa langsung pakai tanpa perlu setting apapun pada hp anda."
        },
        {
            "title": "Maksimal Kontak HP",
            "description": "Kami menggunakan Google Contact sebagai media penyimpanan kontak, Google Contact melimit batasan yaitu 25.000 Kontak per-akun.\n\nSaat ini anda hanya bisa menyimpan maksimal 25.000 Kontak Per-Device Whatsapp Gateway.\n\nSumber: https:\/\/support.google.com\/contacts\/answer\/148779#size_limits"
        },
        {
            "title": "Apa perbedaan whatsapp private budget dan full?",
            "description": "Untuk semua fitur sama, tidak ada bedanya, hanya berbeda di jumlah quota dan nomor cadangan.\n\nJika paket budget ternyata nomor terblokir maka dikenakan biaya ganti nomor sebesar Rp. 25.000\/1x Ganti (nomor dari kami) atau Rp. 20.000\/1x Ganti (nomor dari anda).\n\nSedangkan pada paket full, anda mendapatkan gratis 3x ganti beserta 10 nomor cadangan. Jika quota nomor cadangan habis, maka akan dikenakan biaya pergantian yang sama yaitu Rp. 25.000\/1x Ganti (nomor dari kami) atau Rp. 20.000\/1x Ganti (nomor dari anda)."
        },
        {
            "title": "Kelebihan Whatsapp Gateway Di Bandingkan Whatsapp Konvensional?",
            "description": "Salah satu fitur utama kami yaitu menyediakan REST API dan Pesan Massal (Schedule), sehingga anda bisa mengirim pesan melalui sistem anda secara langsung dari sistem anda atau panel whatsapp gateway yang telah kami sediakan."
        },
        {
            "title": "Apakah saya harus setting sesuatu pada handphone saya?",
            "description": "Tidak, kami menyediakan full mulai dari perangkat, internet, listrik dan semuanya. Anda tidak perlu setting ini itu, ketika produk diaktifkan, anda bisa langsung menggunakannya untuk mengirim pesan."
        },
        {
            "title": "Apakah ini beafilasi dengan Whatsapp Inc?",
            "description": "Tidak, semua trademark dan hak cipta whatsapp, sepenuhnya miliki Whatsapp Inc.\n\nPFN sebagai penyedia whatsapp gateway hanya sebagai system pengolahan data dimana data tersebut digunakan untuk mengirim pesan dengan REST API ke sistem kami."
        },
        {
            "title": "Apa itu Quota Pesan?",
            "description": "Quota Pesan adalah batas pesan yang dapat anda kirim dalam waktu 1 bulan dan direset sesuai tanggal pembelian.\nJika Quota Pesan habis sebelum masa pembelian diperpanjang, maka anda tidak akan bisa mengirimkan pesan."
        },
        {
            "title": "Apakah Nomor Tidak Akan Terblokir Untuk Kirim Pesan Massal?",
            "description": "Kami tidak menjamin nomor tidak akan terblokir, tetapi kami berusaha sebaik mungkin untuk memprogramkan agar pesan terkirim lebih natural.\n\nSistem terbaru kami saat ini pada v0.7 yang di update pada 27-10-2019 telah tersedia fitur limit pesan per-group. Detail : https:\/\/docs.premiumfast.net\/tutorials\/whatsapp-gateway\/changelog#0-7-2019-10-27\n\nJika anda menggunakan paket private, pergantian nomor tidak dikenakan biaya (Quota: 10 Nomor\/Bulan), Selanjutnya dikenakan Rp. 25.000\/Nomor.\n\nPerlu dicatat, jika nomor terblokir, pesan yang anda kirim sebelumnya, bisa jadi error atau tidak terkirim kembali ketika nomor baru aktif.\n\nKami juga memberikan TIPS Menghindari Nomor Terblokir, Detail : https:\/\/docs.premiumfast.net\/tutorials\/whatsapp-gateway\/tips-menghindari-nomor-terblokir"
        },
        {
            "title": "Bagaimana Proses Pergantian Nomor Whatsapp?",
            "description": "Silahkan hubungi kami melalui support tiket untuk pergantian nomor.\n\nNomor tersebut sepenuhnya milik anda, jika suatu saat anda berhenti berlangganan, anda bisa meminta nomor tersebut untuk dikirim ke alamat anda dengan hanya membayar biaya ekspedisi saja."
        },
        {
            "title": "Apakah Data Nomor atau Pesan Saya Aman?",
            "description": "Premium Fast Network sebagai penyedia layanan, hanya sebagai penyedia, kami tidak pernah meng-utak-atik data pelanggan dsb. Kami sangat menjaga dan menghargai privasi pelanggan.\n\nSemua data tersebut bisa anda hapus kapan saja, atau ketika anda berhenti berlangganan, semua data anda akan kami hapus permanent pada system WAGateway Kami."
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

                <FAQ lists={faqs} />

            </Layouts>
        </>
    )
}