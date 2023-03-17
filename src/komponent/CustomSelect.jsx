import React, { Children } from 'react';

const CustomSelect = ({
  opt1,
  opt2,
  opt3,
  value1,
  value2,
  value3,
  stylingDiv,
  StylingSelect,
  label,
  stylingLabel,
  children,
  ...props
}) => {
  return (
    <div className={`${stylingDiv} w-full my-2`}>
        <h1>
        <label className={`${stylingLabel} label cursor-pointer poppins `} htmlFor={label}>
          {label} 
        </label>
      </h1>

      <select {...props}  className={`${StylingSelect} input-text  rounded  py-[5px] transition-all ease-in-out bg-transparent`}>
        
       {children}
      </select>
    </div>
  );
};

export default CustomSelect;