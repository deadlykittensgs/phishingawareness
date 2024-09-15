import { useState } from 'react'
import FishingBait from '../Components/FishingBait'
import Footer from '../Components/Footer'
import ToLearn from '../Components/ToLearn'


function PageOne() {

  const [learn, setLearn]=useState(false)

const clickToLearn = () => {
  setLearn(!learn)
}



  return (
    <div className='flex flex-col w-screen h-screen'>
<header className='flex items-center h-[100px] bg-slate-600 text-black'>
<h1 className='text-[2rem] font-bold text-red-500 p-2'>Stop!</h1>
<p className='text-[0.7rem] p-1 text-white text-center'>Do not enter real information! This is an example Phishing page to show how easy it is to have your personal information stolen by fake pages. click <span onClick={clickToLearn} className='text-red-500 hover:underline'>HERE</span> to learn more </p>
</header>


<div className='flex flex-col flex-1 items-center justify-center bg-[#F2F4F7] text-white w-[100%] '>
  <p className='text-black text-[1.7rem] mb-7'>Login</p>
  {learn ? (<ToLearn/>): (<FishingBait clickToLearn={clickToLearn}/>) }
</div>
<Footer></Footer>
    </div>
  )
}

export default PageOne
 