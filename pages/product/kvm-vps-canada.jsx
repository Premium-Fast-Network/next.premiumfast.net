import Layouts from '../../components/Layouts'
import HeadContent from '../../components/HeadContent'
import HeadTitle from '../../components/HeadTitle'
import FeaturedKVMVPS from '../../components/FeaturedKVMVPS'
import OperatingSystem from '../../components/OperatingSystem'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartPlus } from '@fortawesome/free-solid-svg-icons'
import { Website } from '../../config/Website'


export default function KvmVPSCanada() {

    // Head Data
    const head = {
        title: 'KVM VPS Canada',
        description: 'KVM VPS Canada adalah salah satu produk KVM VPS menggunakan Disk SSD yang sangat cepat untuk memproses data pada server di bandingkan dengan HDD biasa pada umumnya.',
        keywords: 'KVM VPS Canada, KVM VPS Canada SSD, KVM VPS Windows, VPS Windows, KVM VPS, Canada SSD, VPS Canada Windows',
        image: '/img/undraw_server.svg'
    }

    // Products Data
    const products = [
        { 
            name: 'CA-SSD-2',
            price: 'Rp. 100k',
            duration: '/bulan',
            featured: false,
            link: `${Website.clientarea}/cart.php?a=add&pid=193`,
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
            name: 'CA-SSD-4',
            price: 'Rp. 200k',
            duration: '/bulan',
            featured: true,
            link: `${Website.clientarea}/cart.php?a=add&pid=194`,
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
            name: 'CA-SSD-8',
            price: 'Rp. 400k',
            duration: '/bulan',
            featured: false,
            link: `${Website.clientarea}/cart.php?a=add&pid=195`,
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
            name: 'CA-SSD-16',
            price: 'Rp. 800k',
            duration: '/bulan',
            featured: false,
            link: `${Website.clientarea}/cart.php?a=add&pid=196`,
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
                            <img className="w-full md:w-4/5 z-50" src={head.image} />
                        </div>
                    </div>
                </HeadContent>

                <section className="bg-gray-100 py-8">
                    <div className="container mx-auto px-2 pt-4 pb-12 text-gray-800">
                        <h1 className="w-full my-2 text-5xl font-bold leading-tight text-center text-gray-800">
                            Harga Langganan
                        </h1>
                        <div className="w-full mb-4">
                            <div className="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t"></div>
                        </div>

                        <div className="flex flex-col sm:flex-row justify-center pt-12 my-12 sm:my-4">
                            {
                                products.map((product) => {
                                    return (
                                        <div className={`flex flex-col w-5/6 mx-auto lg:mx-0 ${product.featured == true ? 'lg:w-1/4 rounded-lg bg-white mt-4 sm:-mt-6 shadow-lg z-10' : 'lg:w-1/4 rounded-none lg:rounded-l-lg bg-white mt-4'}`}>
                                            <div className={`flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow ${product.featured == true ? '' : 'text-gray-700'}`}>
                                                <div className={`${product.featured == true ? 'w-full p-8 text-3xl' : 'p-8 text-3xl border-b-4'} font-bold text-center`}>{product.name}</div>
                                                <div className={`${product.featured == true ? 'h-1 w-full gradient my-0 py-0 rounded-t' : ''}`}></div>
                                                <ul className={`w-full text-center ${product.featured == true ? 'text-base font-bold' : 'text-sm'}`}>
                                                    {
                                                        product.description.map(desc => (
                                                            <li className="border-b py-4">{desc}</li>
                                                        ))
                                                    }
                                                </ul>
                                            </div>
                                            <div className="flex-none mt-auto bg-white rounded-b rounded-t-none overflow-hidden shadow p-6">
                                                <div className={`w-full pt-6 ${product.featured == true ? 'text-4xl font-bold text-center' : 'text-2xl text-gray-600 font-bold text-center'}`}>
                                                    {product.price}<span className="text-base">{product.duration}</span>
                                                </div>
                                                <div className="flex items-center justify-center">
                                                    <a href={product.link} className="mx-auto lg:mx-0 hover:bg-green-800 bg-green-500 text-white font-bold rounded-full my-6 py-2 px-4 shadow-lg">
                                                        <FontAwesomeIcon icon={faCartPlus} /> Buy Now
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </section>

                <FeaturedKVMVPS />
                <OperatingSystem />

            </Layouts>
        </>
    )
}