import Layouts from '../../components/Layouts'
import HeadContent from '../../components/HeadContent'
import HeadTitle from '../../components/HeadTitle'
import TableDefault from '../../components/TableDefault'
import Featured from '../../components/Featured'
import FAQ from '../../components/FAQ'
import { Website } from '../../config/Website'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faServer } from '@fortawesome/free-solid-svg-icons'

export default function WhatsappGateway() {

    // Head Data
    const head = {
        title: 'RDP User',
        description: 'RDP User sangat cocok bagi anda yang kebutuhan download atau upload ke berbagai host tanpa mengurangi kuota internet anda, Semua koneksi internet dan quota sepenuhnya menggunakan koneksi dari server rdp.',
        keywords: 'whatsapp gateway, whatsapp, kirim pesan whatsapp, whatsapp rest api, whatsapp api',
        image: '/img/png/undraw_connected_world.png',
        imageSvg: '/img/undraw_connected_world.svg'
    }

    // Products Data
    const products = [
        { 
            name: 'CR-50',
            price: 'Rp. 150k',
            duration: '/3-bulan',
            featured: false,
            link: `${Website.clientarea}/cart.php?a=add&pid=118`,
            description: [
                'Intel Xeon E3 (Shared)',
                '4 Core / 8 Threads',
                '32 GB RAM (Shared)',
                '50 GB HDD',
                '1 Gbps Port Speed',
                'No Mining',
                'No Admin',
                'No Encoding',
                'No Bot',
                'Data Center : Finland',                
            ]
        },
        { 
            name: 'CR-100-NVMe',
            price: 'Rp. 100k',
            duration: '/bulan',
            featured: true,
            link: `${Website.clientarea}/cart.php?a=add&pid=85`,
            description: [
                'Intel Xeon E3 Series (Shared)',
                '4 Core / 8 Threads',
                '64 GB RAM (Shared)',
                '30 GB NVMe (Super Fast Storage)',
                '1 Gbps Port Speed',
                'No Mining',
                'No Admin',
                'No Encoding',
                'YES Bot',
                'Data Center : Germany',
            ]
        }
    ];

    const featuredLists = [
        {
            name: 'Instant Activation',
            icon: ['fas', 'rocket'],
            description: 'Produk automatis aktif ketika pembayaran telah diterima atau invoice telah lunas.'
        },
        {
            name: 'IP Address',
            icon: ['fas', 'map-pin'],
            description: 'Semua VPS Mendapatkan 1 IPv4 dan 1 IPv6.'
        },
        {
            name: 'Full Access Control',
            icon: ['fas', 'terminal'],
            description: 'Anda mendapatkan hak akses penuh (root atau administrator) ke vps anda.'
        },
        {
            name: 'Virtualizor Control Panel',
            icon: ['fas', 'sliders-h'],
            description: 'Dengan Virtualizor Control Panel, anda bisa memanage vps anda, mulai dari boot/reboot/ reinstall/ rescue/ dll.'
        },
        {
            name: 'Speed Connection',
            icon: ['fas', 'tachometer-alt'],
            description: 'Server utama terhubung ke 1 Gbps Port dengan Guarantee 250Mbps In/Out.'
        },
        {
            name: 'Upgrade Available',
            icon: ['fas', 'hdd'],
            description: 'Anda bisa upgrade server anda dari yang lebih kecil ke lebih besar pada datacenter yang sama, selama produk tersedia.'
        },
        {
            name: 'Unlimited Bandwidth',
            icon: ['fas', 'infinity'],
            description: 'Tidak perlu khawatir tentang batasan bandwidth, setiap server mendapatkan unlimited bandwidth.'
        },
        {
            name: 'Enterprise Hardware',
            icon: ['fas', 'microchip'],
            description: 'Kami menggunakan hardware terbaik dari Intel Xeon Series untuk server kami.'
        }
    ]

    const faqs = [
        {
            title: 'Apa itu RDP?',
            description: "RDP (Remote Desktop Protocol) Adalah sebuah methode untuk 'Remote Komputer' dari jarak jauh.\n\nApa yang dimaksud 'Remote Komputer'?\nRemote Komputer yaitu kita bisa menjalankan program dan aplikasi dari komputer lain dari lokasi kita berada."
        },
        {
            title: 'Apa Itu Shared Pada CPU Dan RAM?',
            description: 'Shared CPU artinya, anda hanya bisa menggunakan maksimal 20% dari CPU selama 1 jam, jika lebih dari itu, akun akan disuspend, jika butuh cpu full, silahkan ke produk kvm vps.\n\nShared RAM artinya, anda hanya bisa menggunakan maksimal 2 GB dari RAM, jika lebih dari itu, akun akan disuspend, jika butuh RAM lebih besar, silahkan ke produk kvm vps.'
        },
        {
            title: 'Apa Itu No Mining/No Admin/No Encoding/No Bot?',
            description: 'No Mining Maksudnya anda tidak diperbolehkan menggunakan produk ini untuk mining (software,web,cmd,dll), segala bentuk mining dilarang pada produk ini.!! Produk anda akan disuspend permanent jika melakukan hal tersebut.\n\nNo Admin maksudnya anda tidak mendapatkan hak akses admin, yang berarti anda tidak dapat menginstall program pada server dan anda tidak dapat menjalankan program-program yang membutuhkan hak akses admin.\n\nNo Encoding maksudnya anda tidak dapat menjalankan aplikasi seperti edit video/buat video/edit audio/buat audio/match video dll pada RDP ini. No Bot maksudnya anda tidak bisa menjalankan program-program bot pada rdp ini.\n\nYes Bot maksudnya anda bisa menjalankan program-program bot pada rdp ini.'
        },
        {
            title: 'Bisakah Saya Request Install Aplikasi Pada RDP Saya?',
            description: 'Tidak, jika anda butuh custom aplikasi, silahkan ke produk KVM VPS.!'
        },
        {
            title: 'Bisakah Saya Menggunakan Untuk Encoding Video/Audio?',
            description: 'Maaf, anda tidak di perbolehkan menggunakan RDP ini untuk encoding video/audio, kami sarankan anda untuk menggunakan RDP ADMINISTRATOR (KVM VPS) untuk encoding video/audio.'
        },
        {
            title: 'Bisakah Saya Menggunakan 100% Source RAM/CPU?',
            description: 'Maaf, Anda tidak di izinkan menggunakan 100% source RAM/CPU, Silahkan baca Ketentuan Layanan kami mengenai pembatasan CPU ini.\n\nKami rekomendasi anda menggunakan RDP ADMINISTRATOR (KVM VPS) untuk mendapatkan full source RAM/CPU 100%.'
        },
        {
            title: 'Bagaimana Cara Mengakses RDP?',
            description: ' Anda bisa menggunakan :\n1. Remote Desktop Procotol pada Windows.\n2. Remmina Remote Desktop Pada Linux.\n3. Microsoft Remote Desktop pada Mac OS & Android.'
        },
        {
            title: 'Apa Itu NVMe?',
            description: 'NVMe merupakan storage generasi terbaru. Pada umumnya kita biasa menggunakan hard drive yaitu HDD atau SSD yang terhubung menggunakan kabel IDE atau SATA.\n\nDengan NVMe, baca tulis (RW) pada storage lebih cepat di bandingkan HDD atau SSD, hingga 6-10x lebih cepat.\n\nKecepatan NVMe :\n\nRead: 2 Gbps (Test: 2.402 MB/s)\n\nWrite: 1 Gbps (Test: 1.269 MB/s)\n\nDengan kecepatan ini, anda tidak khawatir jika kehabisan IOPS (Input Output Per-Second) dan Kecepatan RW (Read Write) menurun.'
        }
    ]

    return (
        <>
            <HeadTitle customHead={head} />

            <Layouts>
                <HeadContent
                    title={((<><FontAwesomeIcon icon={faServer} /> {head.title}</>))}
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