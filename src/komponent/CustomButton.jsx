import React from 'react';

export default function CustomButton({
  stylingLabel,
  stylingInput,
  ...props
}) {
  return (
    <div className="input my-2">

      <button
        {...props}
        className={`${stylingInput} input-text  rounded  py-[5px] transition-all ease-in-out bg-transparent`}
        type="text"
      />
    </div>
  );
}