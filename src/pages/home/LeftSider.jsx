import React from 'react'

function LeftSider() {
  return (
    <>
    <div className="fixed left-5 bottom-20 opacity-50 sm:opacity-100 sm:relative sm:mt-10">
    <div className='flex flex-col  sm:flex-row  gap-8 p-1 myAnim '>
    <a href="https://www.facebook.com/saransh.shishodia.969?mibextid=ZbWKwL" target="_blank">
    <i className="ri-facebook-fill text-secondary text-xl sm:text-3xl"></i>
  </a>
  <a href="mailto:suryarana21122003@gmail.com">
    <i className="ri-mail-add-line text-secondary text-xl sm:text-3xl "></i>
  </a>
  <a href="https://www.instagram.com/saransh_shishodia/" target="_blank">
    <i className="ri-instagram-fill text-secondary text-xl sm:text-3xl "></i>
  </a>
  <a href="https://www.linkedin.com/in/saransh-shishodia-3a273a24b/" target="_blank">
    <i className="ri-linkedin-fill text-secondary text-xl sm:text-3xl "></i>
  </a>
  <a href="https://github.com/shishodiasaransh?tab=repositories" target="_blank">
    <i className="ri-github-fill text-secondary  text-xl sm:text-3xl "></i>
  </a>
    
    <div className='flex items-center justify-center sm:hidden'>
    <div className="bg-secondary shadow shadow-secondary w-[2px] h-[20vh] "></div>
    </div>
    
    </div>
    </div>
    </>
  )
}

export default LeftSider