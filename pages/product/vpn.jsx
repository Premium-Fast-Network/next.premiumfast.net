import Layouts from '../../components/Layouts'
import HeadContent from '../../components/HeadContent'
import HeadTitle from '../../components/HeadTitle'
import TableDefault from '../../components/TableDefault'
import Featured from '../../components/Featured'
import { Website } from '../../config/Website'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faServer } from '@fortawesome/free-solid-svg-icons'

export default function WhatsappGateway() {

    // Head Data
    const head = {
        title: 'VPN OpenVPN/WireGuard',
        description: 'Amankan jaringan internet anda dengan Protocol VPN dengan Enkripsi Tingkat Tinggi dari OpenVPN dan WireGuard untuk mempermudah anda dalam berselancar online di internet dan tersedia server dari berbagai negara.',
        keywords: 'vpn, vpn openvpn, vpn wireguard',
        image: '/img/png/undraw_security_on.png',
        imageSvg: '/img/undraw_security_on.svg'
    }

    // Products Data
    const products = [
        { 
            name: 'Region ASIA',
            price: 'Rp. 20k',
            duration: '/bulan',
            featured: false,
            link: [
                { title: 'Indonesia', href: `${Website.clientarea}/cart.php?a=add&pid=154`},
                { title: 'Singapore', href: `${Website.clientarea}/cart.php?a=add&pid=154`},
                { title: 'Australia', href: `${Website.clientarea}/cart.php?a=add&pid=154`},
            ],
            description: [
                'OpenVPN and WireGuard',
                'Type Standar VPN',
                'OpenVPN TCP Port 443',
                'WireGuard Port 51820',
                '1 Gbps Port Speed',
                'Unlimited Bandwith',
                'No Torrent/Illegal Activity',
                'Pembelian Minimal 3-Bulan',
            ]
        },
        { 
            name: 'Region Others',
            price: 'Rp. 20k',
            duration: '/bulan',
            featured: false,
            link: [
                { title: 'USA', href: `${Website.clientarea}/cart.php?a=add&pid=171`},
                { title: 'Canada', href: `${Website.clientarea}/cart.php?a=add&pid=202`},
                { title: 'France', href: `${Website.clientarea}/cart.php?a=add&pid=203`},
            ],
            description: [
                'OpenVPN and WireGuard',
                'Type Standar VPN',
                'OpenVPN TCP Port 443',
                'WireGuard Port 51820',
                '1 Gbps Port Speed',
                'Unlimited Bandwith',
                'No Torrent/Illegal Activity',
                'Pembelian Minimal 3-Bulan',
            ]
        },
        { 
            name: 'Bundling-3',
            price: 'Rp. 55k',
            duration: '/bulan',
            featured: true,
            link: [
                { title: 'Coming Soon', href: `#`},
            ],
            description: [
                'OpenVPN and WireGuard',
                'Type Standar VPN',
                'OpenVPN TCP Port 443',
                'WireGuard Port 51820',
                '1 Gbps Port Speed',
                'Unlimited Bandwith',
                'No Torrent/Illegal Activity',
                'Pembelian Minimal 1-Bulan',
                '3 Server VPN',
            ]
        },
        { 
            name: 'Bundling-6',
            price: 'Rp. 100k',
            duration: '/bulan',
            featured: false,
            link: [
                { title: 'Coming Soon', href: `#`},
            ],
            description: [
                'OpenVPN and WireGuard',
                'Type Standar VPN',
                'OpenVPN TCP Port 443',
                'WireGuard Port 51820',
                '1 Gbps Port Speed',
                'Unlimited Bandwith',
                'No Torrent/Illegal Activity',
                'Pembelian Minimal 1-Bulan',
                '6 Server VPN',
            ]
        },
    ];

    const featuredLists = [
        {
            "name": "Instant Activation",
            "icon": ["fas", "rocket"],
            "description": "Produk automatis aktif ketika pembayaran telah diterima atau invoice telah lunas."
        },
        {
            "name": "Windows Compatible",
            "icon": ["fab", "windows"],
            "description": "Anda bisa menggunakan produk ini pada Windows dengan aplikasi OpenVPN."
        },
        {
            "name": "Linux Compatible",
            "icon": ["fab", "linux"],
            "description": "Anda bisa menggunakan produk ini pada Linux dengan aplikasi OpenVPN."
        },
        {
            "name": "Android Compatible",
            "icon": ["fab", "android"],
            "description": "Anda bisa menggunakan produk ini pada Android dengan aplikasi OpenVPN."
        },
        {
            "name": "Mac\/IOS Compatible",
            "icon": ["fab", "apple"],
            "description": "Anda bisa menggunakan produk ini pada Mac atau IOS dengan aplikasi OpenVPN."
        },
        {
            "name": "Unlimited Bandwidth",
            "icon": ["fas", "infinity"],
            "description": "Tidak perlu khawatir tentang batasan bandwidth, semua server kami memberikan unlimited bandwidth."
        },
        {
            "name": "Auto Login",
            "icon": ["fas", "key"],
            "description": "Tidak perlu memasukkan username dan password, detail login sudah include automatis pada config .ovpn"
        },
        {
            "name": "Secure Encryption",
            "icon": ["fas", "user-secret"],
            "description": "Kami menggunakan AES + RSA + SHA256 + SHA512 Encryption untuk mengamankan traffic dan data anda."
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

            </Layouts>
        </>
    )
}