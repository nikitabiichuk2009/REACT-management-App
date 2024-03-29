import Input from "./Input";
import React from "react";

export default function NewProject(props){
  const title = React.useRef();
  const description = React.useRef();
  const date = React.useRef();
  const error = React.useRef();

  React.useEffect(() => {
    // Set min attribute for date input to restrict past dates
    const today = new Date().toISOString().split('T')[0];
    date.current.min = today;
  }, []);
  
  
    return (
      <div className="w-[35rem] mt-16 mr-4">
        <menu className="flex items-center justify-start gap-3 my-4">
          <li>
            <button
              onClick={props.onCancel}
              type="button"
              className="transition-colors ease-in-out duration-500 py-2.5 px-5 me-2 mb-2 font-semibold text-gray-900 focus:outline-none bg-white rounded-lg 
            hover:bg-gray-300 hover:text-blue-700 focus:z-10 dark:bg-gray-800
            dark:text-gray-400  dark:hover:text-white dark:hover:bg-gray-700 text-lg sm:text-xl shadow-lg"
            >
              Cancel
            </button>
          </li>
          <li>
            <button onClick={() => props.handleClick(title.current.value, description.current.value, date.current.value, error)}
              type="button"
              className="transition-colors ease-in-out duration-500 text-white bg-blue-700 hover:bg-blue-900   font-semibold rounded-lg
           text-lg px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-800 focus:outline-none  sm:text-xl shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80"
            >
              Save
            </button>
          </li>
        </menu>
        <div>
        <p ref={error} className="mb-3 font-semibold text-lg text-red-600 dark:text-red-500 md:text-xl"></p>
          <Input ref={title} label="Title" type="text" />
          <Input ref={description} label="Description" isTextArea={true} />
          <Input  ref={date} label="Due Date" type="date" />
        </div>
      </div>
    );
}