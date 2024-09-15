import React from 'react'
import { useNavigate } from 'react-router-dom';

export default function ToLearn() {


  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/PageTwo');
  };



  return (
    <div className='flex flex-col items-center bg-[#FFFFFF] w-[300px] h-fit text-black p-2 drop-shadow-2xl overflow-auto mb-10 h-[400px]'>
        <div className='flex flex-col overflow-auto'>
            <div className=' pr-7 pl-7 pb-7 flex flex-col justify-center items-center text-center bg-slate-200'>
            <p className='font-bold p-3'>What is phishing?</p>
            <p><span className='bold'>Phishing</span> is a type of cyber attack where attackers attempt to deceive individuals into providing sensitive information such as usernames, passwords, credit card numbers, or other personal data. This is often done through fraudulent emails, messages, or websites that appear to be from legitimate sources. </p>
            </div>
            <div className=' flex flex-col justify-center items-center text-center'>
<p  className='font-bold p-4'>How To avoid Phishing Attacks</p> 
</div>
<div className=' pr-7 pl-7 pb-7 flex flex-col justify-center items-center  bg-slate-200'>
<p  className='font-bold p-3' >Be Cautious with Emails and Messages:</p>
<p className='font-bold'>Verify the Source:</p>
<p>Don’t trust unsolicited emails or messages. Confirm the sender’s email address and contact the organization directly if you're unsure.</p>
<p className='font-bold'>Look for Red Flags:</p>
<p> Watch for spelling and grammar errors, generic greetings, and urgent language.</p>
</div>
<div className=' pr-7 pl-7 pb-7 flex flex-col justify-center items-center text-center bg-slate-100'>
<p  className='font-bold  p-3' >Check Links Before Clicking</p>
<p className='font-bold'>Hover Over Links:</p>
<p> Hover over links to see the actual URL before clicking. Make sure it matches the expected domain and doesn’t redirect to a suspicious site.</p>
<p className='font-bold'>Type URLs Directly:</p>
<p> Instead of clicking links in emails, type the website address directly into your browser.</p>
</div>
<div className=' pr-7 pl-7 pb-7 flex flex-col justify-center items-center text-center bg-slate-200'>
<p  className='font-bold  p-3' >Be Skeptical of Unsolicited Requests</p>
<p className='font-bold'>Verify Requests:</p>
<p> If you receive a request for sensitive information, contact the requesting organization using a verified phone number or email address.</p>
</div>
<div className=' pr-7 pl-7 pb-7 flex flex-col justify-center items-center text-center bg-slate-100'>
    <p className='font-bold pt-3' >Now That you know,</p>
    <p>Click the share button below and share this page with others to keep them safe!</p>
    <button onClick={handleClick}  className='flex items-center gap-1 p-1 px-2 bg-[#0866FF]  text-white border-2 border-white rounded mt-2'><i className="fa-solid fa-share"></i> <p>Share</p> </button>
</div>
    </div>
    </div>
  )
}
