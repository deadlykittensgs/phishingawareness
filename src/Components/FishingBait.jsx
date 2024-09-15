import React from 'react'

export default function FishingBait() {
  return (
    <div className='flex flex-col items-center bg-red-300 w-[70%] h-[400px]'>
<h2>Fishing Bait Store</h2>
<p>Email</p>
<input className='w-[70%] h-[25px]' type="text" />
<p>Password</p>
<input className='w-[70%] h-[25px]'  type="text" />

<div>
     <button className='bg-slate-200 rounded p-1 m-1'> submit</button>
</div>

    </div>
  )
}
