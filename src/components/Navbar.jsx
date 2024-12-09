import React, { useState } from 'react'
import Button from './Button'
import { Icons } from '../assets/data'
import MobileNav from './MobileNav';

const navbarItems = [
    "Home",
    "Tickets",
    "Explore",
    "Activity"
]

function Navbar() {

    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className='fixed top-0 left-0 w-full bg-white z-50'>
            <div className='container px-4 h-[100px] m-auto flex justify-between items-center'>
                <div className='font-extrabold text-[#19aaca] text-2xl'>Travelo</div>
                <ul className='list-none hidden lg:block'>
                    {
                        navbarItems.map((item, index) => (
                            <li className={`inline px-8 cursor-pointer font-medium hover:text-black ${index != 0 ? "text-black/60" : "text-black"}`} key={index}>{item}</li>
                        ))
                    }
                </ul>

                <div className='gap-4 hidden lg:flex'>
                    <button className='hover:text-black text-black/60 font-medium'>Sign in</button>
                    <Button title={"Sign up"} />
                </div>

                {
                    isOpen && (
                        <MobileNav />
                    )
                }

                <img src={Icons.menu} className='size-10 cursor-pointer block lg:hidden' alt="" onClick={() => setIsOpen(!isOpen)} />
            </div>
        </div>
    )
}

export default Navbar