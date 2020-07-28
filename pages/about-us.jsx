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
        <HeadContent
            title={((<><FontAwesomeIcon icon={faAddressCard} /> {head.title}</>))}
            description={head.description}
            imageSvg={head.imageSvg}
        >
        </HeadContent>

        <Whyus />
      </Layouts>
    </>
  )
}