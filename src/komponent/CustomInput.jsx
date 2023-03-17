import React from 'react';

export default function CustomInput({
  stylingLabel,
  stylingInput,
  label,
  isError,
  errors,
  ...props
}) {
  return (
    <div className="input my-2">
      <h1>
        <label className={`${stylingLabel} label cursor-pointer poppins`} htmlFor={label}>
          {label}
        </label>
      </h1>

      <input
        {...props}
        className={`${stylingInput} input-text  rounded  py-[5px] transition-all ease-in-out bg-transparent p-4`}
        id={label}
      />
      {/* {isError && <p className="error text-red-500 italic">{label} is empty</p>} */}
    </div>
  );
}