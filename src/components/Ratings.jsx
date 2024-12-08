import React from 'react'
import { Icons } from '../assets/data'

function Ratings({name,img,rate}) {
  return (
    <div className='flex gap-4 bg-white shadow-md py-2 px-8 rounded-xl'>
        <img src={img} className='size-10 rounded-full object-cover object-top' alt="" />
        <div>
            <p>{name}</p>
            <div className='flex gap-1 items-center font-bold text-black/60'>
                <img src={Icons.star} alt="" className='size-5'/>
                <p>{rate}</p>
            </div>
        </div>
    </div>
  )
}

export default Ratings