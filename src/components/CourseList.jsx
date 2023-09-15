import React, { useEffect, useState } from 'react'
import Course from './Course'

const CourseList = ({handleAddCart}) => {

  const [courses, setCourses] = useState([]);
  

  useEffect(() => {

    fetch("course-list.json")
      .then(res => {
        return res.json();
      })
      .then(data => {
        setCourses(data)
      })

  }, [])

  return (
    <div className="w-full mx-auto lg:w-[80%] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">

        {
        courses.map(({id, image_url, course_name, credit, price, details}) => (

            <Course  key={id} handleAddCart={handleAddCart} image_url={image_url} course_name={course_name} credit={credit} price={price} details={details}/>
          ))
        }

    </div>
  )
}

export default CourseList