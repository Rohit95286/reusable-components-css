'use client'
import Button from '@/components/button/button'
import Header from '@/components/header/header'
import React from 'react'

function AllButtons() {
  return (
    <div className='flex flex-col justify-start items-start'>
    <Header name="button"/>

{/*================================ only title ======================== */}
    <Button 
    variant='Primary'
    title='hello'
    />


{/*================================ add onClick ======================== */}

   <Button 
    variant='Primary button with OnClick'
    title='hello'
    onClick={()=>{alert("clicked")}}
    />


{/*================================ add style outline ======================== */}
   <Button 
    variant='outline'
    title='hello'
    
    />



{/* =======================if disabled opacity is less and no onclick will work=======*/}



<Button 
    variant='disabled button'
    title='hello'
    disabled
    onClick={()=>{alert("clicked")}}
    />


<Button 
    variant='rounded button'
    title='hello'
    rounded={'full'}
    />

{/* pass color as props */}


<Button 
    variant='background color button'
    title='hello'
    color='red'
    />

    {/* pass text color as props */}

   <Button 
    variant='text color of button'
    title='hello'
    textColor='white'
    color='green'
    />


    </div>
  )
}

export default AllButtons