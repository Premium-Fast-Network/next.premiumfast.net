import Layouts from '../components/Layouts'
import Whyus from '../components/Whyus'
import HeadContent from '../components/HeadContent'
import HeadTitle from '../components/HeadTitle'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome } from '@fortawesome/free-solid-svg-icons'

export default function Home() {

  // Head Data
  const head = {
    title: 'Home',
    description: '',
  }

  function onClickRegister(e) {
    e.preventDefault();

    window.location.href = "https://manage.premiumfast.net/register.php"
  }

  return (
    <>
      <HeadTitle customHead={head} />

      <Layouts>
        <HeadContent>
          <div className="container px-3 mx-auto flex flex-wrap flex-col md:flex-row items-center">
            <div className="flex flex-col w-full md:w-2/5 justify-center items-start text-center md:text-left">
                <h1 className="my-4 text-4xl font-bold leading-tight"><FontAwesomeIcon icon={faHome} /> Selamat datang.</h1>
                <p className="leading-normal text-2xl mb-8">Premium Fast Network menyediakan berbagai produk seperti RDP User, KVM VPS, VPN, Seedbox, Whatsapp Gateway dan masih banyak lagi. Jangan ragu untuk chat, jika punya pertanyaan tentang produk kami.</p>

                <button onClick={onClickRegister} className="mx-auto lg:mx-0 hover:bg-green-700 hover:text-white bg-white text-gray-800 font-bold rounded-full my-6 py-4 px-8 shadow-lg">Register</button>

            </div>
            <div className="w-full md:w-3/5 py-6 text-right">
                <img className="w-full md:w-4/5 z-50" src="/img/undraw_business_shop.svg" />
            </div>
          </div>
        </HeadContent>
        
        <Whyus />
      </Layouts>
    </>
  )
}
