import Link from 'next/link'
import Help from './Help'

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
                            <p className="uppercase font-bold theme-font-color md:mb-6">Legal</p>
                            <ul className="list-reset mb-6">
                                <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                                    <a href="#"
                                        className="no-underline hover:underline text-gray-800 hover:text-orange-500">Terms</a>
                                </li>
                                <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                                    <a href="#"
                                        className="no-underline hover:underline text-gray-800 hover:text-orange-500">Privacy</a>
                                </li>
                            </ul>
                        </div>
                        <div className="flex-1">
                            <p className="uppercase font-bold theme-font-color md:mb-6">Social</p>
                            <ul className="list-reset mb-6">
                                <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                                    <a href="#"
                                        className="no-underline hover:underline text-gray-800 hover:text-orange-500">Facebook</a>
                                </li>
                                <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                                    <a href="#"
                                        className="no-underline hover:underline text-gray-800 hover:text-orange-500">Linkedin</a>
                                </li>
                                <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                                    <a href="#"
                                        className="no-underline hover:underline text-gray-800 hover:text-orange-500">Twitter</a>
                                </li>
                            </ul>
                        </div>
                        <div className="flex-1">
                            <p className="uppercase font-bold theme-font-color md:mb-6">Company</p>
                            <ul className="list-reset mb-6">
                                <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                                    <a href="#"
                                        className="no-underline hover:underline text-gray-800 hover:text-orange-500">Official
                                        Blog</a>
                                </li>
                                <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                                    <Link href="/about">
                                        <a className="no-underline hover:underline text-gray-800 hover:text-orange-500">About Us</a>
                                    </Link>
                                </li>
                                <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                                    <a href="#"
                                        className="no-underline hover:underline text-gray-800 hover:text-orange-500">Contact</a>
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