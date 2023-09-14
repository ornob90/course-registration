import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import CourseList from './components/CourseList'

function App() {
  const [count, setCount] = useState(0)

  return (

    <div className="bg-[#F3F3F3] min-h-screen">

    <div className="mx-auto mx-w-[1440px] w-[90%] flex justify-center flex-col items-center"> 
      <h1 className="text-xl sm:text-3xl mt-4 mb-16 font-bold text-[#1C1B1B]">Course Registration</h1>

      <div className="flex flex-col lg:flex-row w-full gap-4 justify-center">
        <CourseList />
        <div className='w-[20%]'></div>
      </div>
    </div>
    </div>

  )
}

export default App
