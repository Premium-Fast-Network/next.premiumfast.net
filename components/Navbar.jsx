import React, { useState, useEffect } from 'react'
import Link from 'next/link';
import { withRouter } from 'next/router'
import { menuTop } from '../config/Menu'

function Navbar({ router }) {

    const [ goingUp, setGoingUp, menuClik, setMenuClick ] = useState(0)

    useEffect(() => {
        const handleScroll = () => {
            // get currenct scrool
            const currentScrollY = window.scrollY;

            const header = document.getElementById("header");
            const navcontent = document.getElementById("nav-content");
            const navaction = document.getElementById("navAction");
            const toToggle = document.querySelectorAll(".toggleColour");
    
            if (currentScrollY > 10) {
                header.classList.add("bg-white");
                header.classList.add("shadow");
        
                navaction.classList.remove("bg-white");
                navaction.classList.add("gradient");
                navaction.classList.remove("text-gray-800");
                navaction.classList.add("text-white");
        
                //Use to switch toggleColour colours
                for (var i = 0; i < toToggle.length; i++) {
                    toToggle[i].classList.add("text-gray-800");
                    toToggle[i].classList.remove("text-white");
                }
        
                navcontent.classList.remove("bg-gray-100");
                navcontent.classList.add("bg-white");
            } else {
                header.classList.remove("bg-white");
                navaction.classList.remove("gradient");
                navaction.classList.add("bg-white");
                navaction.classList.remove("text-white");
                navaction.classList.add("text-gray-800");
                //Use to switch toggleColour colours
                for (var i = 0; i < toToggle.length; i++) {
                    toToggle[i].classList.add("text-white");
                    toToggle[i].classList.remove("text-gray-800");
                }
        
                header.classList.remove("shadow");
                navcontent.classList.remove("bg-white");
                navcontent.classList.add("bg-gray-100");
            }
        }

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [ goingUp ]);

    function mobileMenu(e) {
        const target = (e && e.target) || (event && event.srcElement);
        const navMenuDiv = document.getElementById("nav-content");
        const navMenu = document.getElementById("nav-toggle");

        //Nav Menu
        if (!checkParent(target, navMenuDiv)) {
            // click NOT on the menu
            if (checkParent(target, navMenu)) {
                // click on the link
                if (navMenuDiv.classList.contains("hidden")) {
                    navMenuDiv.classList.remove("hidden");
                } else { navMenuDiv.classList.add("hidden"); }
            } else {
                // click both outside link and outside menu, hide menu
                navMenuDiv.classList.add("hidden");
            }
        }
    }

    function checkParent(t, elm) {
        while (t.parentNode) {
            if (t == elm) { return true; }
            t = t.parentNode;
        }
        return false;
    }

    return (
        <nav id="header" className="fixed w-full z-30 top-0 text-white shadow-xl">
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
                        <span className="text-3xl">
                            PremiumFast<span className="text-red-700">.NET</span>
                        </span>
                    </a>
                </div>

                <div className="block lg:hidden pr-4">
                    <button onClick={mobileMenu} id="nav-toggle" className="flex items-center p-1 text-black hover:text-gray-900">
                        <svg className="fill-current h-6 w-6" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
                    </button>
                </div>

                <div className="w-full flex-grow lg:flex lg:items-center lg:w-auto hidden lg:block mt-2 lg:mt-0 bg-white lg:bg-transparent p-4 lg:p-0 z-20"
                    id="nav-content">
                    <ul className="list-reset lg:flex justify-end flex-1 items-center">
                        {
                            menuTop.map((nav) => {

                                if(nav.child) {
                                    return (
                                        <li className="group inline-block relative mr-3">
                                            <Link href={nav.href}>
                                                <a className={`toggleColour inline-block py-2 px-4 no-underline ${ router.pathname == nav.href ? 'font-bold' : 'hover:text-gray-800 hover:text-underline' }`}>{nav.name}</a>
                                            </Link>
                                            <ul className="absolute hidden text-gray-700 pt-1 group-hover:block">
                                                {
                                                    nav.child.map(child => (
                                                        <li>
                                                            <Link href={child.href}>
                                                                <a class={`rounded-t py-2 px-4 block whitespace-no-wrap ${ router.pathname == child.href ? 'bg-gray-500' : 'bg-gray-200 hover:bg-gray-500' }`}>{child.name}</a>
                                                            </Link>
                                                        </li>
                                                    ))
                                                }
                                            </ul>
                                        </li>
                                    )
                                } else {
                                    return (
                                        <li className="inline-block relative mr-3">
                                            <Link href={nav.href}>
                                                <a className={`toggleColour inline-block py-2 px-4 no-underline ${ router.pathname == nav.href ? 'font-bold' : 'hover:text-gray-800 hover:text-underline' }`}>{nav.name}</a>
                                            </Link>
                                        </li>
                                    )
                                }
                            })
                        }
                    </ul>

                    <a
                        id="navAction"
                        href="https://manage.premiumfast.net/clientarea.php"
                        className="mx-auto lg:mx-0 hover:bg-green-700 bg-white text-gray-800 font-bold rounded mt-4 lg:mt-0 py-2 px-4 shadow"
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