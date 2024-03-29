export default function Sidebar(props){
  return (
    <aside className=" px-8 pt-16 bg-stone-900 text-stone-50  rounded-r-xl w-48 dark:bg-slate-900 sm:w-52 md:w-72  overflow-y: auto ">
      <h2 className="mb-8 font-bold uppercase text-xl text-stone-200 sm:text-2xl ">
        Your Projects
      </h2>
      <div>
        <button
          onClick={props.onAdd}
          type="button"
          className=" text-white bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br 
           focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800 shadow-lg shadow-teal-500/50 dark:shadow-lg
           dark:shadow-teal-800/80 rounded-lg  px-5 py-2.5 text-center me-2 mb-2 text-base font-semibold sm:text-lg whitespace-nowrap"
        >
          + Add Project
        </button>
      </div>
      <ul className="mt-8">
        {props.projects.map((project) => {
          console.log(project.id);
          console.log(props.id);

          let cssClasses = `w-full font-semibold rounded-sm px-5 py-2.5 mb-2  focus:outline-none text-left hover:bg-stone-800 hover:text-stone-400 
           dark:hover:bg-gray-700 dark:hover:text-white text-base`;

          if (project.id === props.id){
            cssClasses += " bg-stone-800 text-stone-400 dark:bg-gray-700 dark:text-white";
            console.log(cssClasses);
            {/* console.log("true that project.id === props.selectedProjectId"); */}
          } else{
            cssClasses +="text-white dark:bg-slate-900 bg-stone-900 dark:text-stone-400";
            {/* console.log("true else"); */}

          }
          return <li key={project.id}>
            <button
              onClick={() => props.handleSelectProject(project.id)}
              className={cssClasses}
            >
              {project.title}
            </button>
          </li>
        }
          
        )}
      </ul>
    </aside>
  );
}