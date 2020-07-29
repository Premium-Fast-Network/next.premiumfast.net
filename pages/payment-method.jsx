import Layouts from '../components/Layouts'
import HeadContent from '../components/HeadContent'
import HeadTitle from '../components/HeadTitle'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDollarSign } from '@fortawesome/free-solid-svg-icons'

export default function Home() {

  // Head Data
  const head = {
    title: 'Metode Pembayaran',
    description: 'Berikut ini daftar pembayaran yang kami dukung atau gunakan untuk transaksi.',
    keywords: 'Metode Pembayaran',
    image: '/img/png/undraw_online_payments.png',
    imageSvg: '/img/undraw_online_payments.svg'
  }

  return (
    <>
      <HeadTitle customHead={head} />

      <Layouts>
        <HeadContent
          title={((<><FontAwesomeIcon icon={faDollarSign} /> {head.title}</>))}
          description={head.description}
          imageSvg={head.imageSvg}
        >
        </HeadContent>

        <section className="bg-white border-b py-8">
          <div className="container mx-auto m-8">
            {/* Center Box with Description */}
            <div className="flex justify-center items-center text-center">
              <div className="w-2/3">
                <h1 className="my-2 text-2xl lg:text-4xl font-bold text-gray-800">
                    Pembayaran Automatis
                </h1>
                <div className="mb-4">
                    <div className="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t"></div>
                </div>
                <p className="text-gray-700 text-sm mb-2">Anda akan dikenakan biaya (fee) ketika menggunakan payment gateway automatis, biaya yang anda bayarkan tergantung metode yang anda gunakan. Detail fee lengkap akan muncul pada payment gateway yang anda pilih.</p>
              </div>
            </div>

            <div className="relative m-8 text-black">
              <div className="border-r-2 border-green-500 absolute h-full top-0" style={{left: '15px'}}></div>
              <ul className="list-none m-0 p-0">
                <li className="mb-2">
                  <div className="flex items-center mb-1">
                    <div className="bg-green-500 rounded-full h-8 w-8"></div>
                    <div className="flex-1 ml-4 text-green-500 font-bold">QRIS (QR Code)</div>
                  </div>
                  <div className="ml-12">
                    Pembayaran dengan cara SCAN QR Code dengan dukungan dari berbagai E-Wallet atau Bank seperti: <br /><br />

                    <p className="mb-2">
                        <h3 className="font-bold">E-Wallet</h3>
                        <ul className="list-decimal ml-8">
                            <li>DANA</li>
                            <li>Go-Pay</li>
                            <li>Link Aja</li>
                            <li>OVO</li>
                        </ul>
                    </p>

                    <p className="mb-2">
                        <h3 className="font-bold">Bank</h3>
                        <ul className="list-decimal ml-8">
                            <li>BCA Mobile</li>
                            <li>CIMB</li>
                        </ul>
                    </p>

                    <p className="text-red-700 font-bold">Jika kedepannya muncul pembayaran atau dukungan dari bank lainnya, selama bank tersebut mendukung QRIS (QR Code), maka anda bisa menggunakannya untuk pembayaran di website kami, meskipun daftar diatas tidak update sesuai data terbaru.</p>
                  </div>
                </li>
                <li className="mb-2">
                  <div className="flex items-center mb-1">
                    <div className="bg-green-500 rounded-full h-8 w-8"></div>
                    <div className="flex-1 ml-4 text-green-500 font-bold">OVO (Merchant)</div>
                  </div>
                  <div className="ml-12">
                    Anda juga bisa melakukan pembayaran menggunakan OVO, perlu dicatat bahwa waktu pembayaran anda hanya 30 detik untuk melakukan pembayaran sejak request melalui invoice. Pop Up akan muncul dilayar HP anda ketika melakukan request pembayaran.
                  </div>
                </li>
                <li className="mb-2">
                  <div className="flex items-center mb-1">
                    <div className="bg-green-500 rounded-full h-8 w-8"></div>
                    <div className="flex-1 ml-4 text-green-500 font-bold">Kartu Kredit</div>
                  </div>
                  <div className="ml-12">
                    Anda bisa melakukan pembayaran Kartu Kredit Indonesia Berlogo VISA atau MasterCard.
                  </div>
                </li>
                <li className="mb-2">
                  <div className="flex items-center mb-1">
                    <div className="bg-green-500 rounded-full h-8 w-8"></div>
                    <div className="flex-1 ml-4 text-green-500 font-bold">BCA KlikPay</div>
                  </div>
                  <div className="ml-12">
                    Anda akan diarahkan ke website BCA KlikPay jika memilih metode pembayaran ini.
                  </div>
                </li>
                <li className="mb-2">
                  <div className="flex items-center mb-1">
                    <div className="bg-green-500 rounded-full h-8 w-8"></div>
                    <div className="flex-1 ml-4 text-green-500 font-bold">Retail</div>
                  </div>
                  <div className="ml-12">
                    Pastikan anda mengikuti sesuai instruksi pada invoice untuk pembayaran melalui RETAIL. Daftar Retail: <br />

                    <ul className="list-decimal ml-8">
                        <li>Alfamart</li>
                        <li>POS Indonesia</li>
                        <li>Pegadaian</li>
                    </ul> 
                  </div>
                </li>
                <li className="mb-2">
                  <div className="flex items-center mb-1">
                    <div className="bg-green-500 rounded-full h-8 w-8"></div>
                    <div className="flex-1 ml-4 text-green-500 font-bold">Virtual Account</div>
                  </div>
                  <div className="ml-12">
                    Dengan Virtual Account, anda bisa transfer langsung 24 jam non-stop. Anda akan diberikan nomor Virtual Account yang berbeda setiap kali anda melakukan request transaksi. Daftar Virtual Account: <br />

                    <ul className="list-decimal ml-8">
                        <li>BRI</li>
                        <li>BNI</li>
                        <li>Mandiri</li>
                        <li>ATM Bersama</li>
                        <li>CIMB</li>
                        <li>MayBank</li>
                        <li>Permata</li>
                    </ul> 
                  </div>
                </li>
              </ul>
            </div>

            {/* Center Box with Description */}
            <div className="flex justify-center items-center text-center">
              <div className="w-2/3">
                <h1 className="my-2 text-2xl lg:text-4xl font-bold text-gray-800">
                  Pembayaran Manual
                </h1>
                <div className="mb-4">
                    <div className="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t"></div>
                </div>
                <p className="text-gray-700 text-sm mb-2">Tidak ada biaya (fee) jika menggunakan pembayaran manual.</p>
              </div>
            </div>

            <div className="relative m-8 text-black">
              <div className="border-r-2 border-green-500 absolute h-full top-0" style={{left: '15px'}}></div>
              <ul className="list-none m-0 p-0">
                <li className="mb-2">
                  <div className="flex items-center mb-1">
                    <div className="bg-green-500 rounded-full h-8 w-8"></div>
                    <div className="flex-1 ml-4 text-green-500 font-bold">Transfer Bank</div>
                  </div>
                  <div className="ml-12">
                    Pembayaran menggunakan transfer bank secara manual, harus melakukan konfirmasi melalui website <a href="https://pay.premiumfast.net" className="text-red-700 hover:text-blue-500">https://pay.premiumfast.net</a>, Jika tidak, maka pembayaran tidak akan terkonfirmasi. Berikut detail bank yang di dukung: <br />

                    <p className="mb-2">
                        <ul className="list-decimal ml-8">
                            <li>Bank BCA</li>
                            <li>Bank BRI</li>
                            <li>Bank Mandiri</li>
                            <li>Bank BTPN (Jenius)</li>
                        </ul>
                    </p>

                    <p className="text-red-700 font-bold">Pembayaran bank transfer manual akan dicek 1x24 jam atau paling lama 3x24 jam setelah kami menerima konfirmasi melalui website <a href="https://pay.premiumfast.net" className="text-black hover:text-blue-500">https://pay.premiumfast.net</a>, Jika terdapat data yang kurang atau transaksi tidak ditemukan, anda akan menerima email notifikasi tentang status pembayaran anda.</p>
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