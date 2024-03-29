import React from "react";



export default function Project(props){
  const error = React.useRef();
  const newTask = React.useRef();
  function clearTask(){
    newTask.current.value = "";
  }
  return (
    <div>
      <header>
        <div className="w-52 max-w-full p-6  border border-gray-300 rounded-lg shadow-xl shadow-cyan-500/50 dark:bg-gray-800 dark:border-gray-700 sm:w-96 verysm:w-72">
          <h2 className="mb-4 text-2xl font-bold leading-none tracking-tight text-gray-900 dark:text-white sm:text-4xl verysm:text-3xl">
            {props.project.title}
          </h2>
          <h3 className="mb-4 font-semibold text-gray-500 text-xl dark:text-gray-400 sm:text-2xl">
            Due to {props.project.dueDate}
          </h3>
          <p className="mb-3 font-[530] text-gray-700 dark:text-gray-400 text-base md:text-lg w-full">
            {props.project.description}
          </p>
          <button
            onClick={() => props.handleDeleteProject(props.project.id)}
            className="transition-colors ease-in-out duration-500 text-base sm:text-lg focus:outline-none text-white bg-red-700 hover:bg-red-900  
          font-semibold rounded-lg px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-800 dark:shadow-lg dark:shadow-red-800/80 shadow-lg shadow-red-500/50"
          >
            Remove❌
          </button>
        </div>
      </header>
      <div className="mt-10 w-52 max-w-full p-6  border border-gray-300 rounded-lg shadow-xl shadow-cyan-500/50 dark:bg-gray-800 dark:border-gray-700 sm:w-96 verysm:w-72">
        <h2 className="mb-4 text-xl font-bold leading-none tracking-tight text-gray-900 dark:text-white sm:text-3xl verysm:text-2xl">
          Tasks:
        </h2>
        {props.tasks.length !== 0 ? (
          <ul className="border border-gray-300 rounded-lg shadow-xl p-4 bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
            {props.tasks.map((task, index) => (
              <li
                key={index}
                className="flex flex-col sm:flex-row sm:items-center gap-4 mb-4"
              >
                <p>{task}</p>
                <button
                  onClick={() => props.handleClearTask(index)}
                  className="transition-colors ease-in-out duration-500 text-sm sm:text-base focus:outline-none text-white bg-red-700 hover:bg-red-900  
          font-semibold rounded-lg px-3 py-1 me-2  dark:bg-red-600 dark:hover:bg-red-800 dark:shadow-lg dark:shadow-red-800/80 shadow-lg shadow-red-500/50"
                >
                  Clear
                </button>
              </li>
            ))}
          </ul>
        ) : (
          <p className="mb-3 font-[530] text-gray-700 dark:text-gray-400 text-base md:text-lg w-full">
            This project doesn't have any tasks yet.
          </p>
        )}
        <p
          ref={error}
          className="mb-3 font-semibold text-base sm:text-lg text-red-600 dark:text-red-500 md:text-xl"
        ></p>
        <div className="flex flex-col sm:flex-row sm:items-center gap-4">
          <input
            ref={newTask}
            className="flex-grow bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5
      dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white font-semibold dark:focus:ring-blue-500 dark:focus:border-blue-500 sm:text-lg"
            placeholder="New Task"
          />
          <button
            onClick={() =>
              props.handleAddTask(
                newTask.current.value,
                error.current,
                clearTask
              )
            }
            className="transition-colors ease-in-out duration-500 text-base sm:text-lg focus:outline-none text-white bg-blue-700 hover:bg-blue-900  
      font-semibold rounded-lg px-5 py-2.5 mt-2 sm:mt-0 dark:bg-blue-600 dark:hover:bg-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 whitespace-nowrap"
          >
            + Add
          </button>
        </div>
      </div>
      <div className="mt-12">
        <button
          onClick={props.habdleLeave}
          className="transition-colors ease-in-out  duration-500 text-3xl sm:text-4xl focus:outline-none text-white bg-purple-700 hover:bg-purple-900  
          font-semibold rounded-lg px-7 py-3.5 me-2 mb-2 dark:bg-purple-600 dark:hover:bg-purple-800 shadow-lg shadow-purple-500/50 dark:shadow-lg dark:shadow-purple-800/80"
        >
          Leave
        </button>
      </div>
    </div>
  );
}