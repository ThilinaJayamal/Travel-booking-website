import React from 'react'
import Button from './Button'

const navbarItems = [
    "Home",
    "Tickets",
    "Explore",
    "Activity"
]

function MobileNav() {
    return (
        <div className='flex fixed lg:hidden flex-col items-center gap-8 top-[100px] left-0 bottom-0 bg-white shadow-lg p-4 z-50 rounded-tr-2xl'>
            <ul className='list-none flex flex-col gap-8'>
                {
                    navbarItems.map((item, index) => (
                        <li className={`block px-8 cursor-pointer font-medium hover:text-black ${index != 0 ? "text-black/60" : "text-black"}`} key={index}>{item}</li>
                    ))
                }
            </ul>


            <button className='hover:text-black text-black/60 font-medium'>Sign in</button>
            <Button title={"Sign up"} />

        </div>
    )
}

export default MobileNav