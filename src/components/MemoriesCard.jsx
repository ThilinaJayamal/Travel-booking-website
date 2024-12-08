import React from 'react'

function MemoriesCard({ number, title, description, color }) {
    return (
        <div className='flex flex-col gap-4 justify-start items-start'>
            <span className={`py-1 px-4 rounded-lg text-white`} style={{ backgroundColor: color }}>{number}</span>
            <h3 className='text-2xl font-semibold'>{title}</h3>
            <p className='text-base text-black/60'>
                {description}
            </p>
        </div>
    )
}

export default MemoriesCard