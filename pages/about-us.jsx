import Layouts from '../components/Layouts'
import Whyus from '../components/Whyus'
import HeadContent from '../components/HeadContent'
import HeadTitle from '../components/HeadTitle'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAddressCard } from '@fortawesome/free-solid-svg-icons'
import { Website } from '../config/Website'

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
        <HeadContent>
          <div className="container px-3 mx-auto flex flex-wrap flex-col md:flex-row items-center">
            <div className="flex flex-col w-full md:w-2/5 justify-center items-start text-center md:text-left">
              <h1 className="my-4 text-4xl font-bold leading-tight"><FontAwesomeIcon icon={faAddressCard} /> {head.title}</h1>
              <p className="leading-normal text-2xl mb-8">{head.description}</p>
            </div>
            <div className="w-full md:w-3/5 py-6 text-right">
              <img className="w-full md:w-4/5 z-50" src={head.imageSvg} />
            </div>
          </div>
        </HeadContent>

        <Whyus />
      </Layouts>
    </>
  )
}