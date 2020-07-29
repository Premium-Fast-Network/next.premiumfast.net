import Featured from './Featured'

export default function FeaturedKVMVPS() {
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

    return (
        <Featured lists={featuredLists} />
    )
}