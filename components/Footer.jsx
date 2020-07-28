import Link from 'next/link'
import Help from './Help'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons'
import { Website } from '../config/Website'

export default function Footer() {
    const newDate = new Date()
    const dateYear = newDate.getFullYear();

    return (
        <>
            <Help />

            <footer className="bg-white">
                <div className="container mx-auto px-8">
                    <div className="w-full flex flex-col md:flex-row py-6">
                        <div className="flex-1">
                            <p className="uppercase font-bold theme-font-color md:mb-6">About Us</p>
                            <p className="uppercase font-bold theme-font-color md:mb-6">
                                Jl. Bungurasih Tengah No. 70,<br />
                                Waru, Sidoarjo, Jawa Timur,<br />
                                Indonesia, 61256<br /><br />

                                Operational :<br />
                                Senin - Sabtu<br />
                                09.00 - 17.00 WIB (GMT +7)
                            </p>
                        </div>
                        <div className="flex-1">
                            <p className="uppercase font-bold theme-font-color md:mb-6">Follow Us!</p>
                            <ul className="list-reset mb-6">
                                <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                                    <a href={Website.social.facebook.url} className="no-underline hover:underline text-gray-800 hover:text-blue-500"><FontAwesomeIcon icon={faFacebook} className="text-blue-700" /> {Website.social.facebook.name}</a>
                                </li>
                                <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                                    <a href={Website.social.twitter.url} className="no-underline hover:underline text-gray-800 hover:text-blue-500"><FontAwesomeIcon icon={faTwitter} className="text-blue-500" /> @{Website.social.twitter.name}</a>
                                </li>
                                <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                                    <a href={Website.social.youtube.url} className="no-underline hover:underline text-gray-800 hover:text-blue-500"><FontAwesomeIcon icon={faYoutube} className="text-red-500" /> {Website.social.youtube.name}</a>
                                </li>
                            </ul>
                        </div>
                        <div className="flex-1">
                            <p className="uppercase font-bold theme-font-color md:mb-6">Sales</p>
                            <ul className="list-reset mb-6">
                                <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                                    <a href="https://docs.premiumfast.net/faq/pre-sales-question" className="no-underline hover:underline text-gray-800 hover:text-blue-500">Pre-Sales Question</a>
                                </li>
                                <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                                    <a href="https://docs.premiumfast.net/faq/after-sales-question" className="no-underline hover:underline text-gray-800 hover:text-blue-500">After-Sales Question</a>
                                </li>
                                <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                                    <a href="https://docs.premiumfast.net/faq/upgrade-downgrade-produk" className="no-underline hover:underline text-gray-800 hover:text-blue-500">Upgrade / Downgrade Produk</a>
                                </li>
                                <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                                    <a href="https://docs.premiumfast.net/ketentuan-layanan-terms-of-services" className="no-underline hover:underline text-gray-800 hover:text-blue-500">Terms Of Services</a>
                                </li>
                                <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                                    <a href="https://docs.premiumfast.net/ketentuan-layanan-terms-of-services#4-pengembalian-dana" className="no-underline hover:underline text-gray-800 hover:text-blue-500">Pengembalian Dana</a>
                                </li>
                                <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                                    <a href="https://docs.premiumfast.net/reseller/introduction" className="no-underline hover:underline text-gray-800 hover:text-blue-500">Reseller Discount</a>
                                </li>
                            </ul>
                        </div>
                        <div className="flex-1">
                            <p className="uppercase font-bold theme-font-color md:mb-6">Company</p>
                            <ul className="list-reset mb-6">
                                <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                                    <a href="https://docs.premiumfast.net/faq/pre-sales-question" className="no-underline hover:underline text-gray-800 hover:text-blue-500">About Us</a>
                                </li>
                                <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                                    <a href="https://docs.premiumfast.net/faq/after-sales-question" className="no-underline hover:underline text-gray-800 hover:text-blue-500">Why Us?</a>
                                </li>
                                <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                                    <a href="https://manage.premiumfast.net/announcements" className="no-underline hover:underline text-gray-800 hover:text-blue-500">Pengumuman</a>
                                </li>
                                <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                                    <a href="https://status.premiumfast.net/" className="no-underline hover:underline text-gray-800 hover:text-blue-500">Status Server</a>
                                </li>
                                <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                                    <a href="https://manage.premiumfast.net/testimonials.php" className="no-underline hover:underline text-gray-800 hover:text-blue-500">Testimonials</a>
                                </li>
                                <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                                    <a href="https://manage.premiumfast.net/contact.php" className="no-underline hover:underline text-gray-800 hover:text-blue-500">Contact Us</a>
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