import React from 'react'

function Loader() {
  return (
    <div className='h-screen flex  items-center justify-center fixed inset-0 bg-primary '>
        <div className='flex  text-3xl gap-2 sm:text-sm sm:flex-col sm:gap-0'>
            <h1 className='text-secondary items sa'>
                <b><i>Saransh</i></b> 
            </h1>
            <h1 className='text-tertiary sh'>
            <b><i>Shishodia</i></b> 
            </h1>
        </div>
    </div>
  )
}

export default Loader