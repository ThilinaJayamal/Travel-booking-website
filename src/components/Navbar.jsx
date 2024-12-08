import React from 'react'
import Button from './Button'

const navbarItems = [
    "Home",
    "Tickets",
    "Explore",
    "Activity"
]

function Navbar() {
  return (
    <div className='max-w-[1200px] h-[100px] m-auto flex justify-between items-center'>
        <div className='font-extrabold text-[#19aaca] text-2xl'>Travelo</div>
        <ul className='list-none'>
            {
                navbarItems.map((item,index)=>(
                    <li className={`inline px-8 cursor-pointer font-medium hover:text-black ${index != 0 ? "text-black/60" :"text-black"}`} key={index}>{item}</li>
                ))
            }
        </ul>

        <div className='flex gap-4'>
            <button className='hover:text-black text-black/60 font-medium'>Sign in</button>
            <Button title={"Sign up"}/>
        </div>
    </div>
  )
}

export default Navbar