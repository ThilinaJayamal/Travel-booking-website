import React from 'react'
import PlaceCard from '../components/PlaceCard'
import { places } from '../assets/data'

function Places() {
    return (
        <div className='container px-4 m-auto mt-20'>
            <div className='grid grid-cols-2'>
                <div>
                    <h1 className='text-5xl font-semibold'>Popular places</h1>
                    <p className='text-xl text-black/60 mt-4'>Let's enjoy this heaven on earth</p>
                </div>
                <div>
                    <p className='text-black/60'>
                        Many places are very famous, beautiful, clean, and will give a very
                        deep impression to visitors and will make them come back.
                    </p>
                </div>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4 gap-8 mt-10'>
                {
                    places.map((item, index) => (
                        <PlaceCard title={item.title} location={item.location} discount={item.discount} img={item.img} key={index}/>
                    ))
                }

            </div>

        </div>
    )
}

export default Places