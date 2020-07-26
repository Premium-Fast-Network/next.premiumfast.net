import Link from 'next/link'

export default function Home() {
  return (
    <>
      <h1 className="text-green-800">Index</h1>

      <p><Link href="/about"><a>About</a></Link></p>
      <p><Link href="/product/kvm-vps"><a>KVM VPS</a></Link></p>
    </>
  )
}
