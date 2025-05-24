import React from 'react'

function Header({name} : {name?:string}) {
  return (
    <>
    <p className='text-3xl mt-10 mb-9'>{name} documentation</p>
    <hr className='w-[70vw]'/>
    </>
  )
}

export default Header