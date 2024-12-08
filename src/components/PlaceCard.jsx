import React from 'react'
import { Icons} from '../assets/data'

function PlaceCard({title,img,discount,location}) {
  return (
    <div className='relative w-64'>
      <div className='absolute top-4 right-4 bg-white py-1 px-2 rounded-lg'>
        {discount+" OFF"}
      </div>
      <img src={img} alt="" className='size-64 object-cover rounded-3xl' />
      <div className='py-4'>
        <p>{title}</p>
        <div className='flex gap-2 items-center mb-2'>
          <img src={Icons.location} alt="" className='size-6' />
          <p>{location}</p>
        </div>
      </div>
    </div>
  )
}

export default PlaceCard