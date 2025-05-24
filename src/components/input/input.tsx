'use client';
import VariantHeading from "@/microComponents/variantHeading";
import classNames from "classnames";
import React, {InputHTMLAttributes, useState} from "react";

interface CustomInputProps extends InputHTMLAttributes<HTMLInputElement> {
  variant?: string;
  label? :string
  keyForLabel? : string
}

const CustomInput: React.FC<CustomInputProps> = (
  {
    variant ,
    label ,
    keyForLabel,
    ...restprops
  }) => {

    const [data ,setData] = useState("")
    const [show , setShow] = useState(false);
  return (
    <div className={
      classNames({
        ["mb-4 w-full inputContainer"] : true,
        ['relative '] : variant=='input with animated label' || variant == 'input with secure password'
      })
      }>
      <VariantHeading  variant={variant}/>
      <input
      onChange={e=>setData(e.target.value)}
      id={keyForLabel}
          className={classNames({
            ["border-x-[1px] border-y-[1px] border-gray-400 w-full outline-none p-1"]: true,
            ["mt-6"] : variant=="input with animated label" ,
            'activeInput' : data
          })}
          {...restprops}

      type={
        variant == 'input with secure password' && !show ? "password" : "text"
      }
      />
      {label &&  variant=="input with animated label" &&
      <label 
      className="absolute left-1 top-[52px] transition-all duration-300 ease-in labelInput"
      htmlFor={keyForLabel}>{label}</label>}

      {(variant =='input with secure password') &&   <label 
      className="absolute right-6 top-[30px] transition-all duration-300 ease-in"
      htmlFor={keyForLabel}>
      <p 
      className="text-blue-950 font-bold"
      onClick={()=>setShow(!show)}
      >{!show ? "Show" : "Hide"}</p>
      </label> }
    </div>
  );
};
export default CustomInput;
