import React from 'react';

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
  ...props
}) => {
  return (
    <div className={`${stylingDiv} w-full my-2`}>
        <h1>
        <label className={`${stylingLabel} label cursor-pointer poppins `} htmlFor={label}>
          {label} 
        </label>
      </h1>

      <select {...props} className={`${StylingSelect} input-text  rounded  py-[5px] transition-all ease-in-out bg-transparent`}>
        <option value={value1} className="text-black">{opt1}</option>
        <option value={value2} className="text-black">{opt2}</option>
        <option value={value3} className="text-black">{opt3}</option>
      </select>
    </div>
  );
};

export default CustomSelect;