import React from 'react'
import SectionTitle from '../../components/SectionTitle'

function Contact() {
    const user = { name:"Saransh Shishodia",
        email:"suryarana21122003@gmail.com",
        phone:"+91-8076208520",
        gender:"Male",
        profession:"Developer",
    }
  return (
    <>
    <div>
        <SectionTitle title={'Contact'}/>
        <div className='flex  pb-8 gap-20 sm:flex-col sm:items-center'>
           <div className='flex flex-col'>
           <h1 className='text-secondary text-4xl'>{"{"}</h1>
           <h1 className='text-secondary p-10'>
            {Object.keys(user).map((key)=>(
                <div >
                    <span >{key} : </span><span>"</span><span>{user[key]}</span>
                    <span>"</span>
                </div>
            ))}
           </h1>
           <h1 className='text-secondary text-4xl'>{"}"}</h1>
           </div>
           <div className=''>
            <img src="../../../public/contact.png" alt="homevndvvhvdhjdhvdjv" className='h-[40vh]'/>
           </div>
        </div>

    </div>
    </>
  )
}

export default Contact