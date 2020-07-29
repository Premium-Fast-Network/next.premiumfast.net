import Layouts from '../components/Layouts'
import Whyus from '../components/Whyus'
import HeadContent from '../components/HeadContent'
import HeadTitle from '../components/HeadTitle'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faUserEdit, faSignInAlt } from '@fortawesome/free-solid-svg-icons'
import { Website } from '../config/Website'

export default function Home() {

  // Head Data
  const head = {
    title: 'Home',
    description: 'Premium Fast Network menyediakan berbagai produk seperti RDP User, KVM VPS, VPN, Seedbox, Whatsapp Gateway dan masih banyak lagi. Jangan ragu untuk menghubungi kami, jika punya pertanyaan tentang produk kami.',
    keywords: 'RDP, RDP User, KVM, KVM VPS, KVM VPS Singapore, KVM VPS Canada, KVM VPS France, Whatsapp Gateway, VPN',
    image: '/img/png/undraw_business_shop.png',
    imageSvg: '/img/undraw_business_shop.svg'
  }

  function onClickRegister(e) {
    e.preventDefault();

    window.location.href = `${Website.clientarea}/register.php`
  }

  function onClickLogin(e) {
    e.preventDefault();

    window.location.href = `${Website.clientarea}/login.php`
  }

  return (
    <>
      <HeadTitle customHead={head} />

      <Layouts>
        <HeadContent
          title={((<><FontAwesomeIcon icon={faHome} /> Selamat datang</>))}
          description={head.description}
          imageSvg={head.imageSvg}
        >
          <div>
            <button onClick={onClickRegister} className="hover:bg-green-800 hover:text-white bg-white text-gray-800 font-bold py-2 px-4 rounded-full mx-2 my-2">
              <FontAwesomeIcon icon={faUserEdit} /> Register
            </button>

            <button onClick={onClickLogin} className="hover:bg-green-800 hover:text-white bg-white text-gray-800 font-bold py-2 px-4 rounded-full mx-2 my-2">
              <FontAwesomeIcon icon={faSignInAlt} /> Login
            </button>
          </div>
        </HeadContent>

        <Whyus />
      </Layouts>
    </>
  )
}
