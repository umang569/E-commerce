import React from 'react';
import HOC from './HOC';


function Input({ label, name, id,touched,error, ...rest }) {

  return (
    <div className="w-full">
      <label htmlFor={id} className="sr-only">
        {label}
      </label>
      <input
        id={id}
        name={name}
        className="border-4 bg-transparent outline-none border-gray-300 px-4 py-2 rounded-md focus:border-gray-500 w-full text-gray-700 placeholder-white"
        {...rest}
      />
      {touched && error && <div className="text-red-600 text-sm mt-1">{error}</div>}
    </div>
  );
}
export const FormikInput = HOC(Input);
export default Input;