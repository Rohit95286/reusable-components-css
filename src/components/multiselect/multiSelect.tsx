import VariantHeading from "@/microComponents/variantHeading";
import React from "react";
import Select, {StylesConfig} from "react-select";
type MyComponentProps = {
  variant: string;
  options : {label : string , value : string}[] ;
  isMulti : Boolean
};

const MultiSelect: React.FC<MyComponentProps> = (
    {
        variant ,
        options ,
        isMulti
    }) => {
  return <>
  <VariantHeading variant={variant} />
  <Select
  options={options}
  isMulti
  />
  </>;
};

export default MultiSelect;
