import Header from '@/components/header/header'
import CustomSpinner from '@/components/spinner/spinner'
import React from 'react'

function SpinnerPage() {
  return (
    <div className='flex flex-col justify-start items-start'>
        <Header name="Spinner"/>

        <CustomSpinner 
        variant = "basic spinner"
        />


       <CustomSpinner 
        variant = "basic spinner with height"
        height={32}
       />


       <CustomSpinner 
        variant = "basic spinner with color"
        height={32}
        color='green'
       />

    </div>
  )
}

export default SpinnerPage