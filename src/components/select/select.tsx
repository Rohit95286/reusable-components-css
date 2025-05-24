import React, {SelectHTMLAttributes} from "react";
import VariantHeading from "@/microComponents/variantHeading";
import "./select.css"; // Import the custom CSS file

interface SelectInputProps extends SelectHTMLAttributes<HTMLSelectElement> {
  variant?: string;
  placeholder?: string;
  label?: string;
  data?: any[];
  value?: string;
  labelProperty ?:string
  valueProperty ?: string

}

const CustomSelect: React.FC<SelectInputProps> = ({
  variant = "default variant name",
  placeholder = "select option",
  label,
  data,
  value,
  labelProperty = "label" ,
  valueProperty = "value" ,
  ...restOfProps
}) => {
  return (
    <>
      <VariantHeading variant={variant} />
      {label && (
        <label
          htmlFor={label}
          className="block mb-2 text-sm font-medium text-gray-700"
        >
          {label}
        </label>
      )}
      <select
        id={label}
        className="select-custom" 
        value={value}
        {...restOfProps}
      >
        <option value="">{placeholder}</option>
        {data?.map(d => (
          <option
            key={d?.[valueProperty]} 
            value={d?.[valueProperty]}
          >
            {d?.[labelProperty]}
          </option>
        ))}
      </select>
      <p className="mt-1 text-sm">
        Selected value: <span className="font-bold">{value}</span>
      </p>
    </>
  );
};

export default CustomSelect;
