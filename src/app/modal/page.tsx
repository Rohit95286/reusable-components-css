'use client'
import Header from '@/components/header/header'
import CusomModal from '@/components/modal/modal'
import React from 'react'

function Modal() {
  return (
   <>
   <Header name='Modal'/>

   <CusomModal
   title = "This is the title"
   description = "This is the description"
   onAccept ={()=>{console.log("call api")}}
   />
   
   </>
  )
}

export default Modal