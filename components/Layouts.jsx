import React, { useState, useEffect } from 'react'
import Header from './Header'
import Navbar from './Navbar'

export default function Layouts() {

    const [ goingUp, setGoingUp ] = useState(0)

    useEffect(() => {
        const handleScroll = () => {
            // get currenct scrool
            const currentScrollY = window.scrollY;

            const header = document.getElementById("header");
            const navcontent = document.getElementById("nav-content");
            const navaction = document.getElementById("navAction");
            const brandname = document.getElementById("brandname");
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

    return (
        <>
            <Navbar />
            <Header />
        </>
    )
}