import React from 'react'
import SectionTitle from '../../components/SectionTitle'
import { experiences } from '../../../resources/experiences'

function Experience() {
    const [selectItem,setselectItem]=React.useState(0);
 
  return (
    <>
    <SectionTitle title={"Experience"} />
    <div className='flex py-10 gap-20 sm:flex-col myAnim'>
        <div className='flex  flex-col gap-10 border-l-2 border-secondary w-full  sm:overflow-scroll sm:w-full sm:flex-row'>
            {experiences.map((experience,index)=>(
                <div className='cursor-pointer' onClick={()=>{
                    setselectItem(index);
                }}> 
                    <h1 className={`text-xl text-secondary px-10 ${selectItem===index?"border-l-4 border-secondary  bg-[#08d45d6c] text-white":""}`}>
                        {experience.period}
                    </h1>
                </div>
            ))}
        </div>
        <div className=' flex flex-col gap-8'>
          <h1 className='text-tertiary text-2xl'><b>
            {experiences[selectItem].title}</b></h1> 
            <div className='text-tertiary'>
            {experiences[selectItem].description} 
            </div> 
        </div>
    </div>
    </>
  )
}

export default Experience