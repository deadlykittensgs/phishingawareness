import React from 'react'

export default function Footer() {
  return (
    <div className='flex w-screen h-[100px] bg-white text-[#8a8d91] items-center justify-center gap-[10%] border-[1px] border-slate-800 border-t-white'>
         <div className='text-[.6rem]'> 
            <p className='font-bold text-[.7rem] text-sky-400'>Account</p>
            <p>Profile</p>
            <p>Account</p>
            <p>Purchases</p>
        </div>
    
        <div className='text-[.6rem]'> 
            <p className='font-bold text-[.7rem] text-sky-400 '>Support</p>
            <p>Contact</p>
            <p>FAQs</p>
            <p>Shipping</p>
        </div>
        <div className='text-[.6rem]'> 
            <p className='font-bold text-[.7rem] text-sky-400 '>About us</p>
            <p>Our Mission</p>
            <p>The Pledge</p>
            <p>Our Team</p>
        </div>
       
    </div>
  )
}
