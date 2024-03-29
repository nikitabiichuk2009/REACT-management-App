import React from "react";


const input = React.forwardRef(function Input({label, isTextArea, ...props}, ref){
  return (
    <p className="flex flex-col">
      <label className="block mb-2 text-lg font-bold uppercase text-gray-900 dark:text-white mt-3">
        {label}
      </label>
      {isTextArea ? (
        <textarea
          ref={ref}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5
         dark:bg-gray-700
         dark:border-gray-600 dark:placeholder-gray-400 font-semibold dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 sm:text-lg"
          {...props}
        ></textarea>
      ) : (
        <input
          ref={ref}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5
         dark:bg-gray-700
         dark:border-gray-600 dark:placeholder-gray-400 dark:text-white font-semibold dark:focus:ring-blue-500 dark:focus:border-blue-500 sm:text-lg"
          {...props}
        ></input>
      )}
    </p>
  );
})

export default input;
