import Layouts from '../components/Layouts'
import Whyus from '../components/Whyus'
import HeadContent from '../components/HeadContent'
import HeadTitle from '../components/HeadTitle'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faQuestionCircle } from '@fortawesome/free-solid-svg-icons'

export default function Home() {

  // Head Data
  const head = {
    title: 'Why Us',
    description: 'Apa yang membuat kami berbeda dari yang lain? Anda bisa temukan jawabannya disini.',
    keywords: 'Why Us',
    image: '/img/png/undraw_agreement.png',
    imageSvg: '/img/undraw_agreement.svg'
  }

  return (
    <>
      <HeadTitle customHead={head} />

      <Layouts>
        <HeadContent
          title={((<><FontAwesomeIcon icon={faQuestionCircle} /> {head.title}</>))}
          description={head.description}
          imageSvg={head.imageSvg}
        >
        </HeadContent>

        <Whyus />
      </Layouts>
    </>
  )
}
