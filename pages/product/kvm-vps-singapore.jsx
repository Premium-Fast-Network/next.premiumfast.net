import Layouts from '../../components/Layouts'
import HeadContent from '../../components/HeadContent'
import HeadTitle from '../../components/HeadTitle'
import TableDefault from '../../components/TableDefault'
import FeaturedKVMVPSSGP from '../../components/FeaturedKVMVPSSGP'
import OperatingSystem from '../../components/OperatingSystem'
import { Website } from '../../config/Website'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faServer } from '@fortawesome/free-solid-svg-icons'

export default function KvmVPSSingapore() {

    // Head Data
    const head = {
        title: 'KVM VPS Singapore',
        description: 'KVM VPS Singapore adalah salah satu produk KVM VPS menggunakan Disk SSD yang sangat cepat untuk memproses data pada server di bandingkan dengan HDD biasa pada umumnya.',
        keywords: 'KVM VPS Singapore, KVM VPS Singapore SSD, KVM VPS Windows, VPS Windows, KVM VPS, Singapore SSD, VPS Singapore Windows',
        image: '/img/png/undraw_connected_world.png',
        imageSvg: '/img/undraw_connected_world.svg'
    }

    // Products Data
    const products = [
        { 
            name: 'SG-SSD-1',
            price: 'Rp. 100k',
            duration: '/bulan',
            featured: false,
            link: `${Website.clientarea}/cart.php?a=add&pid=144`,
            description: [
                '1 vCPU',
                '1 GB RAM',
                '20 GB SSD Disk',
                '1 IPv4',
                '500 GB Bandwidth',
                'Full Administrator/root',
            ]
        },
        { 
            name: 'SG-SSD-2',
            price: 'Rp. 195k',
            duration: '/bulan',
            featured: false,
            link: `${Website.clientarea}/cart.php?a=add&pid=145`,
            description: [
                '1 vCPU',
                '2 GB RAM',
                '35 GB SSD Disk',
                '1 IPv4',
                '750 GB Bandwidth',
                'Full Administrator/root',
            ]
        },
        { 
            name: 'SG-SSD-3',
            price: 'Rp. 290k',
            duration: '/bulan',
            featured: false,
            link: `${Website.clientarea}/cart.php?a=add&pid=146`,
            description: [
                '2 vCPU',
                '3 GB RAM',
                '50 GB SSD Disk',
                '1 IPv4',
                '1.000 GB Bandwidth',
                'Full Administrator/root',
            ]
        },
        { 
            name: 'SG-SSD-4',
            price: 'Rp. 385k',
            duration: '/bulan',
            featured: false,
            link: `${Website.clientarea}/cart.php?a=add&pid=147`,
            description: [
                '3 vCPU',
                '4 GB RAM',
                '65 GB SSD Disk',
                '1 IPv4',
                '1.500 GB Bandwidth',
                'Full Administrator/root',
            ]
        },
    ];

    return (
        <>
            <HeadTitle customHead={head} />

            <Layouts>
                <HeadContent>
                    <div className="container px-3 mx-auto flex flex-wrap flex-col md:flex-row items-center">
                        <div className="flex flex-col w-full md:w-2/5 justify-center items-start text-center md:text-left">
                            <h1 className="my-4 text-4xl font-bold leading-tight"><FontAwesomeIcon icon={faServer} />  {head.title}</h1>
                            <p className="leading-normal text-2xl mb-8">{head.description}</p>
                        </div>
                        <div className="w-full md:w-3/5 py-6 text-right">
                            <img className="w-full md:w-4/5 z-50" src={head.imageSvg} />
                        </div>
                    </div>
                </HeadContent>

                <TableDefault products={products} />

                <FeaturedKVMVPSSGP />
                <OperatingSystem />

            </Layouts>
        </>
    )
}