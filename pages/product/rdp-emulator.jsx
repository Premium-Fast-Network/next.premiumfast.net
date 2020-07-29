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
        title: 'RDP Emulator',
        description: 'RDP Emulator sama seperti RDP Pada umumnya, perbedaan mendasar adalah versi processor yang di dukung dengan IGP (Integrated Graphics Processor) yang bisa di gunakan untuk menghandle emulator tertentu ataupun Virtualisasi seperti VirtualBox.',
        keywords: 'rdp, rdp emulator, rdp emulator murah, rdp virtualbox, rdp android',
        image: '/img/png/undraw_server.png',
        imageSvg: '/img/undraw_server.svg'
    }

    // Products Data
    const products = [
        { 
            name: 'RE-16G',
            price: 'Rp. 1200k',
            duration: '/bulan',
            featured: true,
            link: `${Website.clientarea}/cart.php?a=add&pid=191`,
            description: [
                'Intel Core i5 Series',
                '16 GB RAM',
                '2 TB HDD',
                '100 Mbps Speed',
                'Unlimited Bandwidth',
                'Full Akses Administrator',
                'Support Emulator MEMU',
                'Support VirtualBOX',
                'OS Windows Server 2019 (Trial)',
                'Location France',                             
            ]
        }
    ];

    const faqs = [
        {
            "title": "Apa itu RDP Emulator?",
            "description": "RDP Emulator adalah dedicated server yang terinstall os windows server dan mendukung Emulator MEMU dan Virtualbox yang sudah di test oleh PFN."
        },
        {
            "title": "Emulator apa saja yang di dukung?",
            "description": "Saat ini hanya MEMU Emulator."
        },
        {
            "title": "Apakah ini support VMWare?",
            "description": "Kami belum pernah mencoba VMWare secara langsung, tetapi kami sudah test di VirtualBOX dengan server ini berjalan lancar.\n\nJika anda membutuhkan Virtualization, server ini mendukung hal tersebut."
        },
        {
            "title": "Apakah saya mendapatkan full akses admin?",
            "description": "Tentu, anda akan mendapatkan full akses administrator."
        },
        {
            "title": "Berapa lama produk diaktifkan?",
            "description": "Produk diaktifkan 1-3 jam setelah invoice terbit, atau paling lama 2x24 jam.\n\nKami akan menghubungi anda jika ternyata terjadi delay alam deploy server yang anda beli."
        },
        {
            "title": "Lokasi Server",
            "description": "Saat ini baru tersedia di France (Eropa) saja. Lokasi lain belum tersedia."
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

                <FAQ lists={faqs} />

            </Layouts>
        </>
    )
}