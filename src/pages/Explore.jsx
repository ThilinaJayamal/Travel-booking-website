import React, { useState } from 'react'
import { Icons, placesList } from '../assets/data'
import PriceCard from '../components/PriceCard'

const category = [
    "All",
    "Popular destination",
    "Islands",
    "Surfing",
    "Lake",
    "Beach",
    "Camp"

]

function Explore() {
    const [selectCategory, setSelectCategory] = useState(category[0]);
    const filteredList = placesList.filter((item) => item.type === selectCategory) || [];
    console.log(filteredList)
    return (
        <div className='container px-4 m-auto my-20'>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                <div>
                    <h1 className='text-5xl font-semibold'>Explore more</h1>
                    <p className='text-xl text-black/60 mt-4'>Let's go on an adventure</p>
                </div>
                <div>
                    <p className='text-black/60'>
                        All-inclusive vacations and flights to the Caribbean, Indonesian, and
                        more than 1,300 destinations worldwide. Let's explore now.
                    </p>
                </div>
            </div>

            <div className='flex justify-between items-start my-8 overflow-hidden gap-4'>
                <div className='flex gap-4'>
                    {
                        category.map((item, index) => (
                            <div key={index} className={`py-2 px-4 rounded-lg ${category[index] === selectCategory ? "bg-[#343434] text-white" : "bg-[#f4f4f4] text-black/60"} cursor-pointer text-nowrap`}
                                onClick={() => setSelectCategory(category[index])}
                            >{item}</div>
                        ))
                    }
                </div>
                <button className='py-2 px-4 bg-[#f4f4f4] rounded-lg flex justify-center items-center gap-2'>
                    <img src={Icons.filter} alt="" className='size-4' />
                    <p>Filter</p>
                </button>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12'>
                {
                    selectCategory === "All" ?
                        (
                            placesList.map((item, index) => (
                                <PriceCard img={item.img} name={item.name} price={item.price} rate={item.rate} location={item.location} key={index} />
                            ))
                        )
                        :
                        (
                            filteredList.map((item, index) => (
                                <PriceCard img={item.img} name={item.name} price={item.price} rate={item.rate} location={item.location} key={index} />
                            ))
                        )
                }
            </div>

            <div className='flex justify-center'>
                <button className='py-2 px-4 bg-white border-2 border-slate-300 rounded-xl shadow-md'>Show more</button>
            </div>
        </div>
    )
}

export default Explore