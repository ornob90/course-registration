import React from 'react'
import {BsCurrencyDollar, BsBook} from "react-icons/bs"

const Course = ({handleAddCart, image_url, course_name, credit, price, details}) => {


  return (
    // Card Body
    <div className="grid grid-cols-1 gap-2 p-4 bg-white rounded-lg">
        {/* Img */}
        <div className='w-full h-[250px] lg:h-[150px] '>
            <img className='object-cover w-full h-full rounded-lg' src={image_url} alt="" />
        </div>

        <p className="text-lg font-semibold">{course_name}</p>
        <p className="text-[#1c1b1b99] text-sm">{details}</p>


        <div className="flex items-center justify-between text-lg font-medium ">

            <BsCurrencyDollar className='text-xl'/>
            
            <p className='text-[#1c1b1b99]'>Price: <span>{price}</span></p>
            <BsBook className='text-xl'/>
            <p className='text-[#1c1b1b99]'>Credit: <span>{credit}</span></p>
            
        </div>
    
        <button className='bg-[#2F80ED] text-white rounded-lg py-1 mt-3 text-lg' onClick={() => handleAddCart(course_name, price, credit)}>Select</button>
    </div>
  )
}

export default Course