import React from 'react'
import MemoriesCard from '../components/MemoriesCard'
import { memories, votedUsers } from '../assets/data'
import hills from '../assets/hills.jpg'
import Ratings from '../components/Ratings'
import Button from '../components/Button'

function Memories() {
    return (
        <div className='container px-4 m-auto mt-20 mb-10'>
            <div>
                <h3 className='text-4xl font-semibold text-center'>Travel to make sweet memories</h3>
                <p className='text-center text-xl mt-4 text-black/60'>Find trips that fit a flexible lifestyle</p>
            </div>

            <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 mt-14'>
                <div className='flex flex-col gap-8 items-start justify-start'>
                    {
                        memories.map((item, index) => (
                            <MemoriesCard title={item.title} color={item.color} description={item.description} number={item.number} key={index} />
                        ))
                    }
                    <Button title="Start your explore"/>
                </div>
                <div className='flex justify-center items-center relative'>
                    <img src={hills} alt="" className='max-h-[70vh] max-w-full rounded-3xl' />

                    <div className='absolute top-[20%] left-0' >
                        <Ratings name={votedUsers[0].name} img={votedUsers[0].img} rate={votedUsers[0].rate}/>
                    </div>

                    <div className='absolute top-[45%] right-0' >
                        <Ratings name={votedUsers[1].name} img={votedUsers[1].img} rate={votedUsers[1].rate}/>
                    </div>

                    <div className='absolute top-[70%] left-0' >
                        <Ratings name={votedUsers[2].name} img={votedUsers[2].img} rate={votedUsers[2].rate}/>
                    </div>

                </div>
            </div>

        </div>
    )
}

export default Memories