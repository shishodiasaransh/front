import React from 'react'

function Intro() {
  return (
    <div className='h-[90vh] bg-primary flex flex-col items-start justify-center gap-8 myAnim'>
        <h1 className='text-tertiary'>Hi, I am</h1>
    <h1 className='text-semibold text-secondary text-7xl sm:text-3xl '> <b>Saransh Shishodia</b></h1>
    <h1 className='text-semibold text-tertiary text-4xl sm:text-2xl'> I am here to build the things for the web.</h1>
    <p className='text-tertiary w-2/3'>
    To secure a challenging role in software development, leveraging expertise in full-stack technologies and problem solving
to create impactful and innovative solutions while enhancing professional skills.
    </p>
    <button className='border-2 text-secondary shadow-secondary  shadow-md shadow-inner border-secondary p-2 rounded-full myAnim '>Get Started</button>
    </div>
  )
}

export default Intro