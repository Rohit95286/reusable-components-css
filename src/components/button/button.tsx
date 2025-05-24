"use client";
import VariantHeading from "@/microComponents/variantHeading";
import classNames from "classnames";
import React from "react";

interface CustomButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  title: string;
  onClick?: () => void;
  variant: string;
  color?: "green" | "red" | "blue" | "yellow" | "black";
  disabled?: boolean;
  rounded ?: "full" | "none",
  textColor? : string
}

const CustomButton: React.FC<CustomButtonProps> = ({
  title,
  onClick,
  variant = "containt",
  color,
  disabled = false,
  rounded ="none",
  textColor,
  ...rest
}) => {

 
  return (
    <div className="mb-4">
      <VariantHeading variant={variant}/>
      <button
        disabled={disabled}
        onClick={onClick}
        {...rest}
        className={classNames({
          ["bg-primary"]: !color && variant != "primary",
          ["px-4 py-2 "]: true,
          [" text-white"]: variant != "outline" && !textColor,
          [`text-[${textColor}]`] : textColor,
          ["text-primary bg-white border-primary border"]: variant == "outline",
          ["opacity-50"]: disabled,
          [`rounded-${rounded}`] : rounded
        })}
        style={color ? {backgroundColor : color} : {}}
      >
        {title}
      </button>
    </div>
  );
};

export default CustomButton;
