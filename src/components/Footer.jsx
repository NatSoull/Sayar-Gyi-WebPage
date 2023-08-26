/* eslint-disable no-unused-vars */
import React from 'react'
import { AiOutlineCopyright , AiOutlineArrowUp } from "react-icons/ai"

const Footer = () => {
  return (
    <div className=' bg-gray-800 text-white'>
        <div className='w-[80%] mx-auto py-8 '>
            <div className=' flex justify-between items-center'>
                <p className=' flex items-center gap-3'>Copyright <AiOutlineCopyright/> 2023 by Min Thu Khant | All Rights Reserved</p>
                <button className=' py-4 px-4 rounded-xl secondary-box border-2 border-primary'><AiOutlineArrowUp className=' text-xl'/></button>
            </div>
        </div>
    </div>
  )
}

export default Footer
