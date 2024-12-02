import React from 'react'

function SectionTitle({title}) {
    
  return (
    <div className='flex items-center gap-5 py-10'>
        <h1 className='text-secondary text-3xl'>{title}</h1>
        <div className='bg-secondary w-full h-[1px] shadow shadow-secondary '></div>
        </div>
  )
}

export default SectionTitle