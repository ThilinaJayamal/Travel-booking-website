import React from 'react'

function Button({ title, icon = "" }) {
    return (
        <button className='bg-[#19aaca] text-white rounded-xl flex gap-2 py-2 px-4 justify-center'>
            {
                icon && <img src={icon} alt="" className='size-6'/>
            }
            <p>{title}</p>
        </button>
    )
}

export default Button