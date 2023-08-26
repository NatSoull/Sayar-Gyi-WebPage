/* eslint-disable no-unused-vars */
import React from 'react'
import "./contactMe.css"

const ContactMe = () => {
  return (
    <div className=' bg-gray-800'>
        <div className=' w-[76%] mx-auto h-[900px] text-white'>
            <h1 className=' text-center text-6xl font-semibold pt-10'>Contact <span className=' text-primary'>Me!</span></h1>
            <div className=' mt-20 flex flex-col gap-5 px-60'>
                <div className=' flex gap-5'>
                    <div className=' w-[50%] primary-input-effect rounded-lg'>
                        <input type="text" className=' w-[100%] outline-none bg-transparent border-2 border-primary p-4 rounded-lg '  placeholder='Full Name'/>
                    </div>
                    <div className=' w-[50%] primary-input-effect rounded-lg'>
                        <input type="email" className=' w-[100%] outline-none bg-transparent border-2 border-primary p-4 rounded-lg '  placeholder='Email Address'/>
                    </div>
                </div>
                <div className=' flex gap-5'>
                    <div className=' w-[50%] primary-input-effect rounded-lg'>
                        <input type="text" className=' w-[100%] outline-none bg-transparent border-2 border-primary p-4 rounded-lg 'placeholder='Mobile Number' />
                    </div>
                    <div className=' w-[50%] primary-input-effect rounded-lg'>
                        <input type="text" className=' w-[100%] outline-none bg-transparent border-2 border-primary p-4 rounded-lg 'placeholder='Email Subject' />
                    </div>
                </div>
                <div className='primary-input-effect rounded-lg'>
                    <textarea cols="30" rows="10" className='w-[100%] mx-auto h-[400px] outline-none bg-transparent border-2 border-primary rounded-lg p-4 ' placeholder='Your Message'></textarea>
                </div>
                <div className=' text-center'>
                    <button className=' py-3 px-10 rounded-lg text-lg font-semibold text-black border-2 border-primary secondary-box'>Submit</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ContactMe
