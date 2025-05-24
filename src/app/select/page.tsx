"use client"
import Header from "@/components/header/header";
import MultiSelect from "@/components/multiselect/multiSelect";
import CustomSelect from "@/components/select/select";
import React, { useState } from "react";


function SelectPage() {
  const countries1 = [
    {
      label: "India",
      value: "IN",
    },
    {
      label: "united states",
      value: "US",
    },
    {
      label: "Australia",
      value: "Aus",
    },
  ];
  const [selectedValue1 , setSelectedValue1]= useState("");


  // ----------------------------------2nd part====================================

  const countries2 = [
    {
      label: "India",
      value: "IN",
    },
    {
      label: "united states",
      value: "US",
    },
    {
      label: "Australia",
      value: "Aus",
    },
  ];
  const [selectedValue2 , setSelectedValue2]= useState("");


// --------------for 3rd ---------------------------------------------------------
  const [isClearable, setIsClearable] = useState(true);
  const [isSearchable, setIsSearchable] = useState(true);
  const [isDisabled, setIsDisabled] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isRtl, setIsRtl] = useState(false);

  return (
    <>
      <Header name="Select" />

      <CustomSelect 
      variant="Basic select input"
      label = "Select your country"
      placeholder="select your country"
      onChange={(e)=>{setSelectedValue1(e.target.value)}}
      value ={selectedValue1}
      data = {countries1}
      labelProperty = "label"
      valueProperty ="value"
       />


    <CustomSelect 
      variant="Disabled input"
      label = "Select country"
      placeholder="select your country"
      onChange={(e)=>{setSelectedValue2(e.target.value)}}
      value ={selectedValue2}
      data = {countries2}
      disabled
       />


      <MultiSelect 
      variant="multiple selector"
      options = {countries2}
      isMulti 
      />
    </>
  );
}

export default SelectPage;
