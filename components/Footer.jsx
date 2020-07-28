import Link from 'next/link'
import Help from './Help'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons'
import { faBook, faServer } from '@fortawesome/free-solid-svg-icons'
import { Website } from '../config/Website'

export default function Footer() {
    const newDate = new Date()
    const dateYear = newDate.getFullYear();

    return (
        <>
            <Help />

            <footer className="bg-white">
                <div className="container mx-auto px-8">
                    <div className="flex flex-wrap">
                        <div className="w-full sm:w-1/1 md:w-1/2 lg:w-1/4 xl:w-1/4 my-4">
                            <p className="uppercase font-bold theme-font-color">About Us</p>
                            <div className="h-1 w-1/3 gradient my-0 py-0 rounded-t md:mb-4"></div>
                            <p className="uppercase font-bold theme-font-color">
                                Jl. Bungurasih Tengah No. 70,<br />
                                Waru, Sidoarjo, Jawa Timur,<br />
                                Indonesia, 61256<br /><br />

                                Operational :<br />
                                Senin - Sabtu<br />
                                09.00 - 17.00 WIB (GMT +7)
                            </p>
                        </div>
                        <div className="w-full sm:w-1/1 md:w-1/2 lg:w-1/4 xl:w-1/4 my-4">
                            <p className="uppercase font-bold theme-font-color">Follow Us!</p>
                            <div className="h-1 w-1/3 gradient my-0 py-0 rounded-t md:mb-4"></div>
                            <ul className="list-reset">
                                <li className="mb-2">
                                    <a href={Website.social.facebook.url} className="no-underline hover:underline text-gray-800 hover:text-blue-500"><FontAwesomeIcon icon={faFacebook} className="text-blue-700" /> {Website.social.facebook.name}</a>
                                </li>
                                <li className="mb-2">
                                    <a href={Website.social.twitter.url} className="no-underline hover:underline text-gray-800 hover:text-blue-500"><FontAwesomeIcon icon={faTwitter} className="text-blue-500" /> @{Website.social.twitter.name}</a>
                                </li>
                                <li className="mb-2">
                                    <a href={Website.social.youtube.url} className="no-underline hover:underline text-gray-800 hover:text-blue-500"><FontAwesomeIcon icon={faYoutube} className="text-red-500" /> {Website.social.youtube.name}</a>
                                </li>
                                <li className="mb-2">
                                    <a href="https://docs.premiumfast.net/" className="no-underline hover:underline text-gray-800 hover:text-blue-500"><FontAwesomeIcon icon={faBook} className="text-green-500" /> Documentation</a>
                                </li>
                                <li className="mb-2">
                                    <a href="https://status.premiumfast.net/" className="no-underline hover:underline text-gray-800 hover:text-blue-500"><FontAwesomeIcon icon={faServer} className="text-yellow-500" /> Status Server</a>
                                </li>
                            </ul>
                        </div>
                        <div className="w-full sm:w-1/1 md:w-1/2 lg:w-1/4 xl:w-1/4 my-4">
                            <p className="uppercase font-bold theme-font-color">Sales</p>
                            <div className="h-1 w-1/3 gradient my-0 py-0 rounded-t md:mb-4"></div>
                            <ul className="list-reset">
                                <li className="mb-2">
                                    <a href="https://docs.premiumfast.net/faq/pre-sales-question" className="no-underline hover:underline text-gray-800 hover:text-blue-500">Pre-Sales Question</a>
                                </li>
                                <li className="mb-2">
                                    <a href="https://docs.premiumfast.net/faq/after-sales-question" className="no-underline hover:underline text-gray-800 hover:text-blue-500">After-Sales Question</a>
                                </li>
                                <li className="mb-2">
                                    <a href="https://docs.premiumfast.net/faq/upgrade-downgrade-produk" className="no-underline hover:underline text-gray-800 hover:text-blue-500">Upgrade / Downgrade Produk</a>
                                </li>
                                <li className="mb-2">
                                    <a href="https://docs.premiumfast.net/ketentuan-layanan-terms-of-services" className="no-underline hover:underline text-gray-800 hover:text-blue-500">Terms Of Services</a>
                                </li>
                                <li className="mb-2">
                                    <a href="https://docs.premiumfast.net/ketentuan-layanan-terms-of-services#4-pengembalian-dana" className="no-underline hover:underline text-gray-800 hover:text-blue-500">Pengembalian Dana</a>
                                </li>
                            </ul>
                        </div>
                        <div className="w-full sm:w-1/1 md:w-1/2 lg:w-1/4 xl:w-1/4 my-4">
                            <p className="uppercase font-bold theme-font-color">Company</p>
                            <div className="h-1 w-1/3 gradient my-0 py-0 rounded-t md:mb-4"></div>
                            <ul className="list-reset">
                                <li className="mb-2">
                                    <Link href="/about-us">
                                        <a className="no-underline hover:underline text-gray-800 hover:text-blue-500">
                                            About Us
                                        </a>
                                    </Link>
                                </li>
                                <li className="mb-2">
                                    <Link href="/why-us">
                                        <a className="no-underline hover:underline text-gray-800 hover:text-blue-500">
                                            Why Us?
                                        </a>
                                    </Link>
                                </li>
                                <li className="mb-2">
                                    <a href={`${Website.clientarea}/announcements`} className="no-underline hover:underline text-gray-800 hover:text-blue-500">Pengumuman</a>
                                </li>
                                <li className="mb-2">
                                    <a href={`${Website.clientarea}/testimonials.php`} className="no-underline hover:underline text-gray-800 hover:text-blue-500">Testimonials</a>
                                </li>
                                <li className="mb-2">
                                    <a href="https://docs.premiumfast.net/reseller/introduction" className="no-underline hover:underline text-gray-800 hover:text-blue-500">Reseller Discount</a>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="w-full pt-16 pb-6 text-sm text-center theme-font-color md:text-left fade-in">
                        &copy; Premium Fast Network 2013-{dateYear}, All Rights Reserved.
                        Thanks to <a className="text-orange-500 underline" href="https://undraw.co/">undraw.co</a> For Image
                        Illustrator.
                    </div>
                </div>
            </footer>
        </>
    )
}