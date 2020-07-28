import Layouts from '../components/Layouts'
import HeadContent from '../components/HeadContent'
import HeadTitle from '../components/HeadTitle'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAddressCard } from '@fortawesome/free-solid-svg-icons'

export default function Home() {

  // Head Data
  const head = {
    title: 'About Us',
    description: 'Ingin mengetahui lebih dekat tentang kami? Cek selengkapnya pada halaman ini.',
    keywords: 'About Us',
    image: '/img/png/undraw_personal_info.png',
    imageSvg: '/img/undraw_personal_info.svg'
  }

  return (
    <>
      <HeadTitle customHead={head} />

      <Layouts>
        <HeadContent
          title={((<><FontAwesomeIcon icon={faAddressCard} /> {head.title}</>))}
          description={head.description}
          imageSvg={head.imageSvg}
        >
        </HeadContent>

        <section className="bg-white border-b py-8">
          <div className="container m-8">
            <h1 className="w-full my-2 text-5xl font-bold leading-tight text-center text-gray-800">
                Tentang Kami
            </h1>
            <div className="w-full mb-4">
                <div className="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t"></div>
            </div>

            <div className="relative m-8 text-black">
              <div className="border-r-2 border-green-500 absolute h-full top-0" style={{left: '15px'}}></div>
              <ul className="list-none m-0 p-0">
                <li className="mb-2">
                  <div className="flex items-center mb-1">
                    <div className="bg-green-500 rounded-full h-8 w-8"></div>
                    <div className="flex-1 ml-4 font-medium">Perkenalan</div>
                  </div>
                  <div className="ml-12">
                    Premium Fast Network disingkat PFN, Adalah Usaha Kecil Perorangan yang bertujuan untuk menyediakan jasa sewa server online seperti “Seedbox/VPS/RDP”. Semua produk yang kami jual bersifat legal (Bukan produk hasil curian, carding, scaming atau yang merugikan orang lain).<br /><br />

                    Premium Fast Network dibangung pada tanggal 15 Oktober 2013, pada pertama kali muncul, Premium Fast Network meluncurkan paket utama yang sampai sekarang masih eksis dan menjadi andalan yaitu “Seedbox”.
                  </div>
                </li>
                <li className="mb-2">
                  <div className="flex items-center mb-1">
                    <div className="bg-green-500 rounded-full h-8 w-8"></div>
                    <div className="flex-1 ml-4 font-medium">Fokus Kami</div>
                  </div>
                  <div className="ml-12">
                    <ul className="list-decimal ml-8">
                      <li>Automatis Billing dan Sistem</li>
                      <li>Premium Koneksi Server</li>
                      <li>Premium Support Team</li>
                      <li>Garansi Uptime Server</li>
                      <li>Garansi Produk Selama 30 Hari</li>
                      <li>Fast Respons</li>
                    </ul>                    
                  </div>
                </li>
                <li className="mb-2">
                  <div className="flex items-center mb-1">
                    <div className="bg-green-500 rounded-full h-8 w-8"></div>
                    <div className="flex-1 ml-4 font-medium">Behind Premium Fast Network</div>
                  </div>
                  <div className="ml-12">
                    Awal mula Premium Fast Network didukung oleh Juni Yadi Sebagai owner dan pengelola dan Basic SysAdmin yang dimiliki membuat PFN terwujud sebagai usaha perorangan.
                  </div>
                </li>
              </ul>
            </div>

            <h1 className="w-full my-2 text-5xl font-bold leading-tight text-center text-gray-800">
                Timeline
            </h1>
            <div className="w-full mb-4">
                <div className="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t"></div>
            </div>

            <div className="relative m-8 text-black">
              <div className="border-r-2 border-green-500 absolute h-full top-0" style={{left: '15px'}}></div>
              <ul className="list-none m-0 p-0">
                <li className="mb-2">
                  <div className="flex items-center mb-1">
                    <div className="bg-green-500 rounded-full h-8 w-8"></div>
                    <div className="flex-1 ml-4 font-medium">Tahun 2013 - Pertama Kali Jualan Online</div>
                  </div>
                  <div className="ml-12">
                    Pertama kali PFN mulai berjualan online melalui facebook group/personal chat, dengan domain `premiumfast.net`
                  </div>
                </li>
                <li className="mb-2">
                  <div className="flex items-center mb-1">
                    <div className="bg-green-500 rounded-full h-8 w-8"></div>
                    <div className="flex-1 ml-4 font-medium">Tahun 2014 - Perubahan Domain Jualan</div>
                  </div>
                  <div className="ml-12">
                    Domain Berubah menjadi "pfn.my.id" (Difokuskan untuk Pelanggan Indonesia), domain "premiumfast.net" kemudian expired.
                  </div>
                </li>
                <li className="mb-2">
                  <div className="flex items-center mb-1">
                    <div className="bg-green-500 rounded-full h-8 w-8"></div>
                    <div className="flex-1 ml-4 font-medium">Tahun 2015 Sampai Sekarang</div>
                  </div>
                  <div className="ml-12">
                    PFN kembali menggunakan domain premiumfast.net dan menggunakan billing WHMCS sebagai system transaksi hingga saat ini, dengan berbagai pembaruan yang mempermudah pelanggan.
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </Layouts>
    </>
  )
}