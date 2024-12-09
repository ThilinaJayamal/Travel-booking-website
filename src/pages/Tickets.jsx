import React from 'react'
import Button from '../components/Button'

function Tickets() {
    return (
        <div className='container px-4 m-auto mt-20'>
            <div className='flex justify-between items-center'>
                <h4 className='text-2xl font-semibold'>Book tickets and go now!</h4>
                <Button title={"Book now"} />
            </div>
            <div className='flex justify-center items-center m-8'>
                <iframe className='w-2/3 h-[70vh]' src="https://www.youtube.com/embed/0NMIZ-PTt8k" title="NEW ZEALAND | Cinematic Travel Video" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </div>
            <hr />
        </div>
    )
}

export default Tickets