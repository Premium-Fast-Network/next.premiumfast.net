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
        title: 'RDP Dedicated',
        description: 'Butuh Full Resource RAM atau CPU 24 Jam? RDP Dedicated adalah solusinya, RDP Dedicated sama seperti anda mempunyai Komputer Pribadi dengan Koneksi 100 Hingga 1 Gbps online 24 jam non-stop dan bisa digunakan CPU atau RAM hingga MAX 100%.',
        keywords: 'rdp, rdp dedicated, rdp dedicated murah, rdp full resource',
        image: '/img/png/undraw_server.png',
        imageSvg: '/img/undraw_server.svg'
    }

    // Products Data
    const products = [
        { 
            name: 'DSG-16',
            price: 'Rp. 1500k',
            duration: '/bulan',
            featured: false,
            link: `${Website.clientarea}/cart.php?a=add&pid=154`,
            description: [
                'Intel® Core™ i7',
                '3.40 GHz 4C/8T',
                '16 GB',
                '2x 1 TB SATA',
                '1 IPv4',
                'Unmetered 1 Gbps',
                'Germany',                                            
            ]
        },
        { 
            name: 'DSG-32',
            price: 'Rp. 2000k',
            duration: '/bulan',
            featured: true,
            link: `${Website.clientarea}/cart.php?a=add&pid=155`,
            description: [
                'Intel® Xeon® E3',
                '3.30 GHz 4C/8T',
                '32 GB',
                '2x 2 TB SATA',
                '1 IPv4',
                'Unmetered 1 Gbps',
                'Germany',                                                          
            ]
        }
    ];

    const faqs = [
        {
            "title": "Apa itu RDP Dedicated?",
            "description": "RDP Dedicated adalah sebuah dedicated server yang telah terinstall os windows dan siap digunakan.\n\nAnda akan mendapatkan layaknya RDP pada umumnya, hanya berbeda disini anda mendapatkan Full akun Administrator.\n\nDengan RDP Dedicated, anda tidak perlu khawatir tentang sources seperti CPU\/RAM\/HDD, karena anda bisa menggunakan semua sources 100% selama 24 jam layaknya seperti komputer pribadi anda sendiri."
        },
        {
            "title": "Apa yang dimaksud dengan K Pada Harga?",
            "description": "K dalam arti ribuan, maksudnya seperti :\n1.500K = 1.500.000\n2.000K = 2.000.000\n\nHanya untuk mempermudah penulisan di table produk."
        },
        {
            "title": "Berapa lama produk diaktifkan?",
            "description": "Umumnya adalah 1x24 jam minimal dan maksimal 3x24 jam, tergantung stock hardware saat anda membeli, jika ternyata hardware kosong, kami akan segera menghubungi anda.\n\nJika server telah aktif, anda akan menerima detail melalui email."
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