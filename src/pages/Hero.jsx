import React from 'react'
import { Icons } from '../assets/data'
import Button from '../components/Button'

function Hero() {
    return (
        <div className='max-w-[1200px]  m-auto min-h-[calc(100vh-100px)]'>
            <div className="w-full pt-12 h-[calc(100vh-100px-150px)] bg-[url('/background.jpg')] bg-cover rounded-3xl bg-no-repeat">
                <h1 className='font-medium text-6xl text-center leading-[75px] text-white'>
                    Explore the whole world<br /> and enjoy the beauty
                </h1>
                <p className='text-white mt-8 text-center text-xl'>Find and write about your experiences around the world.</p>
            </div>
            <div className='mx-8 bg-white px-4 py-8 h-auto -my-[120px] rounded-3xl shadow-lg'>

                <div className='flex justify-between items-center text-black/60'>
                    <ul className='list-none py-4'>
                        <li className='inline mr-8 text-black/100'>Hostelry</li>
                        <li className='inline mr-8'>Flights</li>
                        <li className='inline mr-8'>Buses & Shuttle</li>
                        <li className='inline'>Cars</li>
                    </ul>
                    <div className='text-sm'>Last Searching {">"}</div>
                </div>
                <hr />

                <div className='grid grid-cols-5 gap-8 text-black/60'>
                    <div className='pt-4'>
                        <p>Destrination</p>
                        <div className='flex gap-2 items-center bg-[#f4f4f4] py-2 mt-2 rounded-lg'>
                            <img src={Icons.location} alt="" className='size-6 ml-2' />
                            <select className='w-36 outline-none bg-transparent'name='place' id='place' defaultValue={"1"}>
                                <option value="1" selected>Colombo, Sri Lanaka</option>
                                <option value="2" >Galle, Sri Lanka</option>
                                <option value="3" >Taj Mahal, India</option>
                                <option value="4" >Jaffna, Sri Lanka</option>
                                <option value="5" >France</option>
                            </select>
                        </div>
                    </div>
                    <div className='pt-4'>
                        <p>Check-in</p>
                        <div className='flex gap-2 items-center bg-[#f4f4f4] py-2 mt-2 rounded-lg'>
                            <img src={Icons.date} alt="" className='size-6 ml-2' />
                            <input type="date" name="" id="" placeholder='Sat, 2 Dec 2024' className='w-36 outline-none bg-transparent' />
                        </div>
                    </div>
                    <div className='pt-4'>
                        <p>Check-out</p>
                        <div className='flex gap-2 items-center bg-[#f4f4f4] py-2 mt-2 rounded-lg'>
                            <img src={Icons.date} alt="" className='size-6 ml-2' />
                            <input type="date" name="" id="" placeholder='Sun, 3 Dec 2024' className='w-36 outline-none bg-transparent' />
                        </div>
                    </div>
                    <div className='pt-4'>
                        <p>Room & Guest</p>
                        <div className='flex gap-2 items-center bg-[#f4f4f4] py-2 mt-2 rounded-lg'>
                            <img src={Icons.user} alt="" className='size-6 ml-2' />
                            <select className='w-36 outline-none bg-transparent' name='room' id='room' defaultValue={"1"}>
                                <option value="1" selected>1 Room, 2 Guest</option>
                                <option value="2" >2 Room, 4 Guest</option>
                                <option value="3" >3 Room, 6 Guest</option>
                                <option value="4" >4 Room, 8 Guest</option>
                                <option value="5" >5 Room, 10 Guest</option>
                            </select>
                        </div>
                    </div>
                    <div className='flex flex-col justify-end'>
                        <Button title={"Search"} icon={Icons.search} />
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Hero