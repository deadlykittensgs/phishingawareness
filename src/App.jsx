import { useState } from 'react'
import FishingBait from './Components/FishingBait'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='flex flex-col w-screen h-screen bg-slate-200'>
<header className='flex justify-center items-center h-[50px] bg-slate-300'>
<h1 className='text-[2rem] font-bold'>Fishing Test</h1>
</header>

<div className='flex flex-col flex-1 items-center justify-center bg-sky-200 '>
  <p>enter your information here to unlock the fishing trap</p>
  <FishingBait/>
</div>
  
    </div>
  )
}

export default App
