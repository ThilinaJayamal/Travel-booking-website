import React from 'react'
import AdvantureCard from '../components/AdvantureCard'
import { place_icons } from '../assets/data'

function Advanture() {
    return (
        <div className='container px-4 m-auto my-20'>
            <div>
                <h3 className='text-4xl font-semibold text-center'>Let's go on an adventure</h3>
                <p className='text-center text-xl mt-4 text-black/60'>Find and book a great experience.</p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
                {
                    place_icons.map((item, index) => (
                        <AdvantureCard name={item.name} img={item.img} key={index} />
                    ))
                }
            </div>

            <div className='flex justify-center items-center my-1 gap-2 text-white text-2xl'>
                <div className='size-10 text-slate-500 flex justify-center items-center rounded-full border-2 border-slate-500'>{"<"}</div>
                <div className='size-10 text-slate-500 flex justify-center items-center rounded-full border-2 border-slate-500'>{">"}</div>
            </div>
        </div>
    )
}

export default Advanture