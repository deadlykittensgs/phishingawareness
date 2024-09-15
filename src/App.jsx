import { useState } from 'react'
import FishingBait from './Components/FishingBait'
import Footer from './Components/Footer'


function App() {


  return (
    <div className='flex flex-col w-screen h-screen'>
<header className='flex justify-center items-center h-[50px] bg-slate-600 text-black'>
<h1 className='text-[2rem] font-bold'>Phishing Test</h1>
</header>

<div className='flex flex-col flex-1 items-center justify-center bg-[#F2F4F7] text-white w-[100%] '>
  <p className='flex text-center m-3 text-[1.2rem] text-black'>Login to unlock the fishing trap</p>
  <FishingBait/>
</div>
<Footer></Footer>
    </div>
  )
}

export default App
 