import Header from '@/components/header/header'
import CustomTabs from '@/components/tabs/tabs'
import React from 'react'

function Tabs() {
  const tabData = [
    {
    tabName : "Tab1",
    index : 0,
    dataToShow:  "This is tab 1 content   Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla tempore repudiandae distinctio perferendis iusto beatae ab non voluptatem animi necessitatibus optio molestiae deserunt commodi corporis cupiditate accusantium voluptates vero, illo sequi incidunt! Magnam laborum repellat iste reiciendis, repudiandae facilis ipsam itaque fuga saepe. Impedit nemo vero optio illum assumenda quaerat, incidunt ipsum numquam natus autem, molestiae libero maxime doloribus eos, laudantium unde ea? Sunt, ducimus! Optio ea corrupti, id dolorem delectus consequatur. Alias deserunt commodi quis libero soluta voluptatum et repellendus exercitationem esse atque sequi quae accusamus ut consequuntur laudantium, nam obcaecati tempora quaerat fugiat blanditiis necessitatibus officiis expedita cum."
  } ,


  {
    tabName : "Tab2",
    index : 1,
    dataToShow:  "This is tab 2 content   Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla tempore repudiandae distinctio perferendis iusto beatae ab non voluptatem animi necessitatibus optio molestiae deserunt commodi corporis cupiditate accusantium voluptates vero, illo sequi incidunt! Magnam laborum repellat iste reiciendis, repudiandae facilis ipsam itaque fuga saepe. Impedit nemo vero optio illum assumenda quaerat, incidunt ipsum numquam natus autem, molestiae libero maxime doloribus eos, laudantium unde ea? Sunt, ducimus! Optio ea corrupti, id dolorem delectus consequatur. Alias deserunt commodi quis libero soluta voluptatum et repellendus exercitationem esse atque sequi quae accusamus ut consequuntur laudantium, nam obcaecati tempora quaerat fugiat blanditiis necessitatibus officiis expedita cum."
  } ,
  {
    tabName : "Tab3",
    index : 2,
    dataToShow:  "This is tab 3 content   Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla tempore repudiandae distinctio perferendis iusto beatae ab non voluptatem animi necessitatibus optio molestiae deserunt commodi corporis cupiditate accusantium voluptates vero, illo sequi incidunt! Magnam laborum repellat iste reiciendis, repudiandae facilis ipsam itaque fuga saepe. Impedit nemo vero optio illum assumenda quaerat, incidunt ipsum numquam natus autem, molestiae libero maxime doloribus eos, laudantium unde ea? Sunt, ducimus! Optio ea corrupti, id dolorem delectus consequatur. Alias deserunt commodi quis libero soluta voluptatum et repellendus exercitationem esse atque sequi quae accusamus ut consequuntur laudantium, nam obcaecati tempora quaerat fugiat blanditiis necessitatibus officiis expedita cum."
  } ,
]

  return (
    <div className='flex flex-col justify-start items-start'>
       <Header name="Tabs"/>

{/* basic */}
       <CustomTabs 
       variant="Basic tabs"
       tabData={tabData}
       />


       {/*  verticle */}

       <CustomTabs 
       variant="verticle tabs"
       tabData={tabData}
       orientation='verticle'
       />


    </div>
  )
}

export default Tabs