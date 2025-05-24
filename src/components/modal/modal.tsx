'use client'
import React, { useState } from 'react'
import CustomButton from '../button/button';

interface MyModalProps {
    title?: string;
    description? : string;
    onAccept? : ()=> void
  }

const CusomModal:React.FC<MyModalProps>=({
    title = "default title",
    description = "default description" ,
    onAccept
})=> {
const [showModal , setShowModal] = useState(false);
  return (<>

   <CustomButton 
    variant='Basic modal'
    title='Basic Modal '
    onClick={()=>{setShowModal(true)}}
    />
  {showModal && 
   <div 
   className={`fixed top-0 bottom-0 left-0 right-0 flex justify-center items-center  `}
   style={{background : "rgba(0,0,0,0.5)"}}
   >

       <div className='bg-white h-auto w-auto py-7 px-14 rounded-md relative opacity-1'>
       <p  onClick={()=>setShowModal(false)} className='absolute right-4 top-4 cursor-pointer'>X</p>
          <p className='text-center font-bold text-black'>{title}</p>
          <p>{description}</p>

          <div className='flex justify-center items-center mt-5'>
          <CustomButton 
          variant=''
          title='Accept'
          onClick={()=>{
            onAccept ? onAccept() : null;
            setShowModal(false)
        }}
          />
          </div>
       
        
          
       </div>
   </div>
  }
   
    </>
  )
}

export default CusomModal