import Layouts from '../../components/Layouts'
import HeadContent from '../../components/HeadContent'
import HeadTitle from '../../components/HeadTitle'
import TableDefault from '../../components/TableDefault'
import FeaturedKVMVPS from '../../components/FeaturedKVMVPS'
import OperatingSystem from '../../components/OperatingSystem'
import { Website } from '../../config/Website'


export default function KvmVPSFrance() {

    // Head Data
    const head = {
        title: 'KVM VPS France',
        description: 'KVM VPS France adalah salah satu produk KVM VPS menggunakan Disk SSD yang sangat cepat untuk memproses data pada server di bandingkan dengan HDD biasa pada umumnya.',
        keywords: 'KVM VPS France, KVM VPS France SSD, KVM VPS Windows, VPS Windows, KVM VPS, France SSD, VPS France Windows',
        image: '/img/png/undraw_connected_world.png',
        imageSvg: '/img/undraw_connected_world.svg'
    }

    // Products Data
    const products = [
        { 
            name: 'FR-SSD-2',
            price: 'Rp. 100k',
            duration: '/bulan',
            featured: false,
            link: `${Website.clientarea}/cart.php?a=add&pid=197`,
            description: [
                '1 vCPU',
                '2 GB RAM',
                '35 GB SSD Disk',
                '1 IPv4',
                'Unlimited Bandwidth',
                'Full Administrator/root',
            ]
        },
        { 
            name: 'FR-SSD-4',
            price: 'Rp. 200k',
            duration: '/bulan',
            featured: true,
            link: `${Website.clientarea}/cart.php?a=add&pid=198`,
            description: [
                '1 vCPU',
                '4 GB RAM',
                '70 GB SSD Disk',
                '1 IPv4',
                'Unlimited Bandwidth',
                'Full Administrator/root',
            ]
        },
        { 
            name: 'FR-SSD-8',
            price: 'Rp. 400k',
            duration: '/bulan',
            featured: false,
            link: `${Website.clientarea}/cart.php?a=add&pid=199`,
            description: [
                '2 vCPU',
                '8 GB RAM',
                '140 GB SSD Disk',
                '1 IPv4',
                'Unlimited Bandwidth',
                'Full Administrator/root',
            ]
        },
        { 
            name: 'FR-SSD-16',
            price: 'Rp. 800k',
            duration: '/bulan',
            featured: false,
            link: `${Website.clientarea}/cart.php?a=add&pid=200`,
            description: [
                '3 vCPU',
                '16 GB RAM',
                '280 GB SSD Disk',
                '1 IPv4',
                'Unlimited Bandwidth',
                'Full Administrator/root',
            ]
        }
    ];

    return (
        <>
            <HeadTitle customHead={head} />

            <Layouts>
                <HeadContent>
                    <div className="container px-3 mx-auto flex flex-wrap flex-col md:flex-row items-center">
                        <div className="flex flex-col w-full md:w-2/5 justify-center items-start text-center md:text-left">
                            <h1 className="my-4 text-4xl font-bold leading-tight">{head.title}</h1>
                            <p className="leading-normal text-2xl mb-8">{head.description}</p>
                        </div>
                        <div className="w-full md:w-3/5 py-6 text-right">
                            <img className="w-full md:w-4/5 z-50" src={head.imageSvg} />
                        </div>
                    </div>
                </HeadContent>

                <TableDefault products={products} />

                <FeaturedKVMVPS />
                <OperatingSystem />

            </Layouts>
        </>
    )
}