import React from 'react'
import { Icons } from '../assets/data'

function Footer() {
    return (
        <div className='max-w-[1200px] m-auto py-8'>
            <div className="grid grid-cols-[2fr_1fr_1fr_1fr_2fr] gap-8">

                <div className='flex flex-col gap-4 justify-center items-start'>
                    <div className='font-extrabold text-[#19aaca] text-2xl'>Travelo</div>
                    <p>
                        30 Great Peter St, Westminster,
                        London $WIP 28U, United Kingdom
                    </p>

                    <div className='flex gap-2 items-center'>
                        <img src={Icons.fb} className='size-8' alt="" />
                        <img src={Icons.insta} className='size-8' alt="" />
                        <img src={Icons.yt} className='size-10' alt="" />
                    </div>
                </div>

                <div>
                    <h4 className='text-lg font-semibold'>About</h4>
                    <ul className='list-none flex flex-col gap-4 mt-4 text-black/60'>
                        <li>About Us</li>
                        <li>Features</li>
                        <li>News</li>
                        <li>Plans</li>
                    </ul>
                </div>
                <div>
                    <h4 className='text-lg font-semibold'>Company</h4>
                    <ul className='list-none flex flex-col gap-4 mt-4 text-black/60'>
                        <li>Why Travelo</li>
                        <li>Partners with us</li>
                        <li>F&Q</li>
                        <li>Blog</li>
                    </ul>
                </div>
                <div>
                    <h4 className='text-lg font-semibold'>Support</h4>
                    <ul className='list-none flex flex-col gap-4 mt-4 text-black/60'>
                        <li>Account</li>
                        <li>Support center</li>
                        <li>Feedback</li>
                        <li>Contact us</li>
                    </ul>
                </div>
                <div>
                    <h4 className='text-lg font-semibold'>Newsletter</h4>
                    <p className='text-black/60 my-4'>Subscribe our Newsletter and get exiting offers.</p>
                    <div className='flex gap-2 shadow-lg rounded-xl overflow-hidden mt-4'>
                        <input type="email" name="" id="" placeholder='Email' className='py-2 px-4 outline-none flex-1' />
                        <div className='size-12 flex justify-center items-center bg-[#259cb5] rounded-xl'>
                            <img src={Icons.email} className='size-8' alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer