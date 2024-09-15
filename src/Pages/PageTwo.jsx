import { useState } from 'react'
import FishingBait from '../Components/FishingBait'
import Footer from '../Components/Footer'
import ToLearn from '../Components/ToLearn'
import { useNavigate } from 'react-router-dom';


export default function PageTwo() {


  const [learn, setLearn]=useState(false)
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/PageOne');
  };

  return (
    <div className='flex flex-col w-screen h-screen'>
<header className='bg-[#0866FF] h-[75px] w-screen flex items-center p-2 justify-between'>
<p className='text-white font-bold text-[2rem]'>FaceBook</p>
<button onClick={handleClick} ><i className="fa-solid fa-bars m-2 text-white"></i></button>
</header>

<div className='flex flex-col flex-1 items-center justify-center bg-[#F2F4F7] text-white w-[100%] '>
  <p className='text-black text-[1.7rem] mb-7'>Login</p>
  {learn ? (<ToLearn/>): (<FishingBait/>) }
</div>
<Footer></Footer>
    </div>
  )
}
