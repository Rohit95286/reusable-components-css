import VariantHeading from '@/microComponents/variantHeading';
import React from 'react'

interface SpinnerProps {
    variant: string;
    height? : Number;
    color? : string
  }

const CustomSpinner : React.FC<SpinnerProps> =({
    variant ,
    height= 20,
    color
})=> {
  return (
<>
<VariantHeading variant={variant}/>
<div 
className={`animate-spin rounded-full border-t-2 border-l-2 `}
style={{
    height : `${height}px`,
    width : `${height}px`,
    borderColor : `${color}`
}}
></div>
{/* round and left border top border and spin it */}
</>
  )
}

export default CustomSpinner