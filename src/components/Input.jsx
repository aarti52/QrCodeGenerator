
import React from 'react'
import {useState} from 'react'
import QRCode from 'qrcode';

import QR from './QR'
function Input() {
  const [url, seturl] = useState('')
  const [showQr,setShowQr]=useState(false)
  const [error, seterror] = useState('')
  const [qrcodeSrc, setqrcodeSrc] = useState('')
  function changeUrl(e) {
    seturl(e.target.value)
    console.log(e.target.value)
    seterror('') // Clear any previous error message
  }
  function generateQR(){
      
    try {
      new URL(url)
      setShowQr(true) 
      seterror('') // Clear any previous
      QRCode.toDataURL(url,{width:200},(err,url)=>{
        if(err) console.log(err)
          setqrcodeSrc(url)
      })
    } catch (error) {
      seterror('Please enter a valid URL')
      setShowQr(false)
    }
   
  }
  function clearQR()
  {
    setShowQr(false)
    seturl('')
    seterror('')
    setqrcodeSrc('')
  }

  function handlekeydown(e)
  {
    if(e.key==='Enter') generateQR()
    else if(e.key==='Delete')  clearQR()
  }

  function downloadQR()
  {
     const anc=document.createElement('a')
     anc.href=qrcodeSrc
     anc.download='qrcode.png'
     anc.click()
  }
  return (
    <div className='flex flex-col mt-[4rem] gap-4 pl-3 pr-3 w-full  '>
      
        
      <input type="text" value={url} className='md:h-[3rem] 
     border-transparent rounded-2 border-2 mt-6 '
     placeholder='Enter a valid URL'
     onInput={changeUrl} onKeyDown={handlekeydown}
     />
     {error && <p className='text-red-500 mt-2 mb-1'>{error}</p>}
     {/* {error &&  alert('Please enter a valid URL')} */}
    { showQr &&  <img src={qrcodeSrc}  alt='qr-code' className='mt-4'/>} 
    
     <button className='bg-gray-950 text-white p-2 rounded-md'
     onClick={generateQR}>Generate</button>
      <button className='bg-gray-950 text-white p-2 rounded-md'
      type='submit'
      onClick={clearQR}
      >clear</button>
      <button className='bg-gray-950 text-white p-2 rounded-md'
      type='submit'
      onClick={downloadQR}
      >Download</button>
      
    </div>
  )
}

export default Input
