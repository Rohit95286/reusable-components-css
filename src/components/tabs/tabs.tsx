'use client'
import VariantHeading from '@/microComponents/variantHeading'
import React, { useState } from 'react'


interface CustomTabsProps {
  variant: string;
  tabData:{
    tabName : string,
    index : number,
    dataToShow:  string
  }[],
  orientation? : "horizontal" | "verticle"
}

const CustomTabs : React.FC<CustomTabsProps> = ({
  variant,
  tabData ,
  orientation= "horizontal"
})=> {

  const [activeIndex  , setActiveIndex] = useState(1);

  return (
    <>
    <VariantHeading variant={variant}/>

    {orientation == "horizontal" ? <>

    <div className={`cursor-pointer flex justify-start items-start flex-row w-full gap-3 mt-4` }>
    {tabData?.map(data=>
    <p 
    key={data?.index}
    className={`font-normal text-lg   ${activeIndex == data?.index ? "activeTab" : "" }`}
    onClick={()=>{setActiveIndex(data?.index)}}
    >
      {data?.tabName}
    </p>
    )}
     </div>
     <p
     className='mt-4 indent-6'
     >{tabData?.filter(data=>data?.index==activeIndex)?.[0]?.dataToShow}</p>
    </> : <>

    


    <div className='flex flex-row justify-start gap-4'>
     <div className={`cursor-pointer flex justify-start items-start flex-col w-[100px] gap-3 mt-0` }>
    {tabData?.map(data=>
    <p 
    key={data?.index}
    className={`font-normal text-lg ${activeIndex == data?.index ? "activeTab" : "" }`}
    onClick={()=>{setActiveIndex(data?.index)}}
    >
      {data?.tabName}
    </p>
    )}
     </div>

     <div className='h-auto w-[1px] bg-slate-500'></div>
     <p
     className='  indent-6'
     >{tabData?.filter(data=>data?.index==activeIndex)?.[0]?.dataToShow}</p>

     </div>
    
    
    </>  }

  
    

     


     
    </> 
  )
}

export default CustomTabs