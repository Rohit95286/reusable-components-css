import Header from '@/components/header/header'
import CustomInput from '@/components/input/input'
import React from 'react'


function Input() {
  return (
    <div className='flex flex-col justify-start items-start'>
    <Header name="Inputs"/>

{/* -----------------------normal input-------------------------- */}
    <CustomInput
    variant='Basic inputs'
    />

    {/* -----------------------input with animated label-------------------------- */}

    <CustomInput
    variant='input with animated label'
    label='user name'
    keyForLabel = "user"
    />

    {/* -------------input for secuirety-------------------------------------------*/}


    <CustomInput
    variant='input with secure password'
    label='user password'
    keyForLabel = "password"
    />
    </div>
  )
}

export default Input