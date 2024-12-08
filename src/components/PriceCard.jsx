import React from 'react'
import { Icons, placesList } from '../assets/data'

function PriceCard({ img, name, rate,location,price }) {
    return (
        <div className='relative w-full'>
            <div className='absolute top-4 right-4 bg-white py-1 px-2 rounded-lg'>
                <div className='flex gap-1 items-center'>
                    <img src={Icons.star} className='size-4' alt="" />
                    <p>{rate}</p>
                </div>
            </div>
            <img src={img} alt="" className='w-full object-cover rounded-3xl' />
            <div className='py-4 flex gap-2 justify-between items-center'>
                <div>
                    <p className='text-lg font-semibold'>{name}</p>
                    <div className='flex gap-1 items-center mb-2'>
                        <img src={Icons.location} alt="" className='size-5' />
                        <p>{location}</p>
                    </div>
                </div>
                <p className='text-xl font-medium'>
                    ${price}/Tax
                </p>
            </div>
        </div>
    )
}

export default PriceCard