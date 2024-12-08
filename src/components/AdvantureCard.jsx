import React from 'react'
import { Icons } from '../assets/data'

function AdvantureCard({ name, img }) {
    return (
        <div className='flex flex-col border-4 border-dashed justify-start items-center p-4 rounded-lg gap-2 relative my-14'>
            <img src={img} alt="" className='w-full h-60 object-cover rounded-lg bg-blue-200 border-4 border-[#41a3b6]' />
            <p className='uppercase font-semibold text-black/60 text-center'>{name}</p>

            <div className='bg-gray-300 absolute top-2 right-2 size-14 flex justify-center items-center rounded-full border-4 border-[#41a3b6]'>
                <img src={Icons.flight} className='size-10' alt="" />
            </div>

        </div>
    )
}

export default AdvantureCard