import Head from 'next/head'
import Layouts from '../components/Layouts'
import Whyus from '../components/Whyus'
import HeadContent from '../components/HeadContent'
import HeadTitle from '../components/HeadTitle'

export default function Home() {

  const head = {
    title: 'About'
  }

  return (
    <>
      <HeadTitle customHead={head} />

      <Layouts>
        <HeadContent />
        <Whyus />
      </Layouts>
    </>
  )
}
