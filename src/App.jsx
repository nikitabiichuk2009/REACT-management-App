import React from "react";
import Sidebar from "./components/Sidebar";
import NewProject from "./components/NewProjext";
import NoProjectsSelected from "./components/NoProjectsSelected";
import Project from "./components/Project";

function App() {
  const [projects, setProjects] = React.useState({
    selectedProjectId: undefined,
    projects: [],
  });

  function handleAddProject() {
    setProjects((prevState) => {
      return {
        ...prevState,
        selectedProjectId: null,
      };
    });
  }
  function handleCancelAddingProject() {
    setProjects((prevState) => {
      return {
        ...prevState,
        selectedProjectId: undefined,
      };
    });
  }
  function handleSelectProject(id) {
    setProjects((prevState) => {
      return {
        ...prevState,
        selectedProjectId: id,
      };
    });
  }
  function handleClickAddProject(title, description, dueDate, error) {
    const titleLength = title.length;
    const descriptionLength = description.length;
    const selectedDate = dueDate;

    if (title < 5 || titleLength > 35) {
      error.current.innerText =
        "The title must be between 5 and 35 characters in length!";
      return;
    } else if (descriptionLength < 15 || descriptionLength > 100) {
      error.current.innerText =
        "The description must be between 15 and 100 characters in length!";
      return;
    } else if (!selectedDate) {
      error.current.innerText = "Please select a due date!";
      return;
    } else {
      const formattedDateToAdd = new Date(selectedDate).toLocaleDateString(
        "en-GB"
      );
      const titleToAdd = title;
      const descriptionToAdd = description;
      console.log(
        `Title: \n ${titleToAdd} \n Description: \n ${descriptionToAdd} \n Date: \n ${formattedDateToAdd}`
      );
      const maxId = projects.projects.reduce((max, project) => {
        return Math.max(max, project.id);
      }, 0);

      // Generate new id by incrementing the maximum id by one
      const newId = maxId + 1;
      // Create a new project object
      const newProject = {
        id: newId,
        title: title,
        description: description,
        dueDate: formattedDateToAdd,
        tasks: [],
      };

      // Update the projects state with the new project
      setProjects((prevState) => ({
        ...prevState,
        selectedProjectId: undefined,
        projects: [...prevState.projects, newProject], // Add the new project to the existing projects array
      }));
      // Reset error message
      error.current.innerText = "";
    }
  }
  function handleDeleteProject(projectId) {
    setProjects((prevState) => ({
      ...prevState,
      selectedProjectId: undefined,
      projects: prevState.projects.filter(
        (project) => project.id !== projectId
      ),
    }));
  }

  function handleAddTask(task, error, clearTask){
    if (task.length < 5 || task.length > 40){
      error.innerText = "The New Task must be between 5 and 40 characters in length!";
      return;
    } else{
      error.innerText = "";
      console.log(task);
      setProjects((prevState) => {
        const updatedProjects = prevState.projects.map((project) => {
          if (project.id === prevState.selectedProjectId) {
            return {
              ...project,
              tasks: [...project.tasks, task],
            };
          } else {
            return project;
          }
          
        });
        return {
          ...prevState,
          projects: updatedProjects
        };
      });
      clearTask();
    }
  }
  function handleClearTask(taskIndex) {
    setProjects((prevState) => {
      const updatedProjects = prevState.projects.map((project) => {
        if (project.id === prevState.selectedProjectId) {
          // Filter out the task with the specified taskId
          const updatedTasks = project.tasks.filter((task, index) => index !== taskIndex);
          return {
            ...project,
            tasks: updatedTasks,
          };
        } else {
          return project;
        }
      });
  
      return {
        ...prevState,
        projects: updatedProjects,
      };
    });
  }
  
  console.log(projects);
  let content;
  if (projects.selectedProjectId === null) {
    content = (
      <NewProject
        onCancel={handleCancelAddingProject}
        handleClick={handleClickAddProject}
      />
    );
  } else if (projects.selectedProjectId === undefined) {
    content = <NoProjectsSelected onAdd={handleAddProject} />;
  } else {
    // Find the project with the selectedProjectId
    const selectedProject = projects.projects.find(
      (project) => project.id === projects.selectedProjectId
    );
    console.log(selectedProject.id);

    // Render the Project component with the selected project
    content = (
      <Project
        habdleLeave={handleCancelAddingProject}
        handleDeleteProject={handleDeleteProject}
        project={selectedProject}
        tasks={selectedProject.tasks}
        handleAddTask={handleAddTask}
        handleClearTask={handleClearTask}
      />
    );
  }
  return (
    <main className="mt-8 flex gap-3 md:gap-8 ">
      <Sidebar
        id={projects.selectedProjectId} // Pass the selectedProjectId as id prop
        onAdd={handleAddProject}
        projects={projects.projects}
        handleSelectProject={handleSelectProject}
      />
      {content}
    </main>
  );
}

export default App;
