/* eslint-disable no-unused-vars */
import React from 'react'
import "./mySkill.css"

const MySkill = () => {
  return (
    <div className='bg-gray-700'>
      <div className=' text-white w-[80%] mx-auto h-[800px] py-10'>
        <h1 className=' text-6xl font-semibold mb-20 text-center'>My <span className=' text-primary'>Skill</span></h1>
        <div className=' w-[100%] flex'>
            <div className=' w-[50%]'>
                <h3 className=' text-3xl font-bold mb-5'>Coding Skills</h3>
                <div className=' border-2 border-primary p-6 rounded-lg flex flex-col gap-7 w-[95%] skill-box'>
                    <div>
                      <div className=' flex justify-between items-center text-xl font-semibold mb-1'><h3>HTML</h3> <code className=' text-primary'>60%</code></div>
                      <div className=' skill-bar html p-1'><span></span></div>
                    </div>
                    <div>
                      <div className=' flex justify-between items-center text-xl font-semibold mb-1'><h3>CSS</h3> <code className=' text-primary'>90%</code></div>
                      <div className=' skill-bar CSS p-1'><span></span></div>
                    </div>
                    <div>
                      <div className=' flex justify-between items-center text-xl font-semibold mb-1'><h3>JavaScript</h3> <code className=' text-primary'>70%</code></div>
                      <div className=' skill-bar Javascript p-1'><span></span></div>
                    </div>
                    <div>
                      <div className=' flex justify-between items-center text-xl font-semibold mb-1'><h3>Python</h3> <code className=' text-primary'>0%</code></div>
                      <div className=' skill-bar p-1 Python'><span></span></div>
                    </div>
                </div>
            </div>
            <div className=' w-[50%]'>
                <h3 className=' text-3xl font-bold mb-5'>Professional Skills</h3>
                <div className=' border-2 border-primary p-6 rounded-lg flex flex-col gap-7 w-[95%] skill-box'>
                    <div>
                      <div className=' flex justify-between items-center text-xl font-semibold mb-1'><h3>Web Design</h3> <code className=' text-primary'>90%</code></div>
                      <div className=' skill-bar web-design p-1'><span></span></div>
                    </div>
                    <div>
                      <div className=' flex justify-between items-center text-xl font-semibold mb-1'><h3>Web Development</h3> <code className=' text-primary'>40%</code></div>
                      <div className=' skill-bar web-development p-1'><span></span></div>
                    </div>
                    <div>
                      <div className=' flex justify-between items-center text-xl font-semibold mb-1'><h3>Graphic Design</h3> <code className=' text-primary'>1%</code></div>
                      <div className=' skill-bar graphic-design p-1'><span></span></div>    
                    </div>
                    <div>
                      <div className=' flex justify-between items-center text-xl font-semibold mb-1'><h3>SEO Marketing</h3> <code className=' text-primary'>0%</code></div>
                      <div className=' skill-bar seo-marketing p-1'><span></span></div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default MySkill
