import Head from 'next/head'
import Link from 'next/link'
import Layouts from '../components/Layouts'
import Whyus from '../components/Whyus'

export default function Home() {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>

      <Layouts />

      <div className="relative -mt-12 lg:-mt-24">
        <img src="/img/head.svg"></img>
      </div>

      <Whyus />
      
    </>
  )
}
