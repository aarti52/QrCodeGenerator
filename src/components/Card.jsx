import React from 'react'
import Input from './Input'

function Card() {
  return (
    <>
    <div className='bg-gray-900 h-[100vh] overflow-scroll'>
    <div className='h-[5rem]  bg-red-400 w-[40vw] rounded-lg  m-auto pt-2 relative top-[3rem] md:top-[6rem] md:h-[8rem] md:w-[18rem] shadow-md flex font-bold items-center text-sm justify-center flex-col lg:top-[4rem]'>Your QR 
        <span className='text-white font-bold text-lg'>generator</span> 
    </div>
    <div className='p-4 bg-white w-[50vw]  rounded-lg m-auto mt-auto  md:w-[20rem] flex justify-center items-center flex-col '>
    <Input/>
    </div>
    </div>
        
    </>
  )
}

export default Card
