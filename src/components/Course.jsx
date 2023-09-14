import React from 'react'
import {BsCurrencyDollar, BsBook} from "react-icons/bs"

const Course = ({image_url, course_name, credit, price, details}) => {
  return (
    // Card Body
    <div className="rounded-lg p-4 bg-white grid grid-cols-1 gap-2">
        {/* Img */}
        <div className='w-full h-[250px] lg:h-[150px] '>
            <img className='rounded-lg object-cover w-full h-full' src={image_url} alt="" />
        </div>

        <p className="text-lg font-semibold">{course_name}</p>
        <p className="text-[#1c1b1b99] text-sm">{details}</p>


        <div className=" font-medium text-lg flex justify-between items-center">

            <BsCurrencyDollar className='text-xl'/>
            
            <p className='text-[#1c1b1b99]'>Price: <span>{price}</span></p>
            <BsBook className='text-xl'/>
            <p className='text-[#1c1b1b99]'>Credit: <span>{credit}</span></p>
            
        </div>
    
        <button className='bg-[#2F80ED] text-white rounded-lg py-1 mt-3 text-lg'>Select</button>
    </div>
  )
}

export default Course