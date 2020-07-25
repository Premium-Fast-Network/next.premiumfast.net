import Link from 'next/link'

export default function Home() {
  return (
    <>
      <h1>Index</h1>

      <Link href="/about"><a>About</a></Link>
    </>
  )
}
