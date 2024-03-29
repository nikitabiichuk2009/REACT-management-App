import noProjectImg from "../assets/no-projects.png"


export default function NoProjectsSelected(props){
    return (
      <div className="w-2/3 mt-24 text-center">
        <img
          src={noProjectImg}
          alt="No Projects Image"
          className="object-contain mx-auto sm:w-20 sm:h-20 w-16 h-16"
        ></img>
        <h2 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
          No Projects Selected
        </h2>
        <p className="mb-3 text-gray-500 dark:text-gray-400 text-base sm:text-xl">
          Select a project or get started with a new one!
        </p>
        <p className="mt-4">
          <button
            className="shadow-md shadow-black dark:shadow-gray-700 relative inline-flex items-center justify-center mr-2 px-5 py-4
            font-bold text-white transition-colors ease-in-out duration-700 bg-gray-900
            dark:bg-gray-700 font-pj rounded-xl focus:outline-none  hover:bg-slate-700 dark:hover:bg-slate-800 whitespace-nowrap text-medium sm:text-lg md:text-xl sm:px-8 sm:py-4"
            onClick={props.onAdd}
          >
            Create a New Project
          </button>
        </p>
      </div>
    );
}