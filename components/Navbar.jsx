import Link from 'next/link';
import { withRouter } from 'next/router'

function Navbar({ router }) {
    const navs = [
        { name: 'Home', href: '/'},
        { name: 'Server', href: '/'},
        { name: 'Seedbox', href: '/'},
        { name: 'Jasa', href: '/'},
    ];

    return (
        <nav id="header" className="fixed w-full z-30 top-0 text-white">

            <div className="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 py-2">
                <div className="pl-4 flex items-center">
                    <a className="toggleColour text-white no-underline hover:no-underline font-bold text-2xl lg:text-4xl"
                        href="#">
                        <svg className="h-8 fill-current inline" xmlns="http://www.w3.org/2000/svg" width="45" height="24"
                            viewBox="0 0 24 24" fill="none" stroke="#2a2a31" stroke-width="2" stroke-linecap="round"
                            stroke-linejoin="round">
                            <rect x="2" y="2" width="25" height="8" rx="2" ry="2"></rect>
                            <rect x="2" y="14" width="25" height="8" rx="2" ry="2"></rect>
                            <line className="ind1" stroke="#ea3970" x1="6" y1="6" x2="6" y2="6"></line>
                            <line className="ind2" stroke="#ea3970" x1="6" y1="18" x2="6" y2="18"></line>
                        </svg>
                        <span className="text-2xl">
                            PremiumFast<span className="text-red-700">.NET</span>
                        </span>
                    </a>
                </div>

                <div className="block lg:hidden pr-4">
                    <button id="nav-toggle" className="flex items-center p-1 text-black hover:text-gray-900">
                        <svg className="fill-current h-6 w-6" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
                    </button>
                </div>

                <div className="w-full flex-grow lg:flex lg:items-center lg:w-auto hidden lg:block mt-2 lg:mt-0 bg-white lg:bg-transparent text-white p-4 lg:p-0 z-20"
                    id="nav-content">
                    <ul className="list-reset lg:flex justify-end flex-1 items-center">
                        {
                            navs.map( nav => (
                                <li className="mr-3">
                                    <Link href={nav.href}>
                                        <a className={`inline-block py-2 px-4 text-black no-underline ${ router.pathname == nav.href ? 'font-bold' : 'hover:text-gray-800 hover:text-underline' }`}>{nav.name}</a>
                                    </Link>
                                </li>
                            ))
                        }
                    </ul>

                    <a
                        id="navAction"
                        href="https://manage.premiumfast.net/clientarea.php"
                        className="mx-auto lg:mx-0 hover:underline bg-white text-gray-800 font-bold rounded mt-4 lg:mt-0 py-2 px-4 shadow opacity-75"
                    >
                        Client Area
                    </a>
                    
                </div>
            </div>

            <hr className="border-b border-gray-100 opacity-25 my-0 py-0" />
        </nav>
    )
}

export default withRouter(Navbar);