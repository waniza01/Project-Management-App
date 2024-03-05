import { useState } from "react";
import "./App.css";
import AddProject from "./components/Project/AddProject.jsx";
import Project from "./components/Project/Project.jsx";
import SideBar from "./components/SideBar/SideBar.jsx";
import ProjectDetails from "./components/Project/ProjectDetails.jsx";
import { v4 as uuidv4 } from "uuid";

function App() {
  const [projects, setProjects] = useState([]);
  const [project, setProject] = useState(null);
  const [activeScreen, setActiveScree] = useState("addProject");
  const [tasks, setTasks] = useState([]);

  const handleAddProject = (project) => {
    setProjects((prevProject) => {
      const updateProject = [...prevProject];
      updateProject.push(project);
      return updateProject;
    });
    setActiveScree("addProject");
  };

  const handleAddProjectScreen = () => {
    setActiveScree("project");
  };

  const handleProjectDetails = (index) => {
    setProject(projects[index]);
    setActiveScree("projectDetails");
  };

  const handleCancel = () => {
    setActiveScree("addProject");
  };

  const handleAddTasks = (task) => {
    const newTask = {
      id: uuidv4().toString(),
      projectId: project.id,
      task: task,
    };

    setTasks((prevTasks) => {
      return [...prevTasks, newTask];
    });
  };

  const handleDeleteTask = (id) => {
    setTasks((prevTasks) => {
      const updateTasks = prevTasks.filter((task) => task.id !== id);
      return updateTasks;
    });
  };

  const handleDeleteProject = (id) => {
    const index = [...projects]?.findIndex((project) => project.id === id);

    setProjects((prevProjects) => {
      const updateProjects = [...prevProjects].map((project) => ({
        ...project,
      }));
      updateProjects.splice(index, 1);
      console.log(updateProjects);
      return updateProjects;
    });
    setActiveScree("addProject");
  };

  return (
    <main className="flex">
      <SideBar
        projects={projects}
        handleAddProjectScreen={handleAddProjectScreen}
        handleProjectDetails={handleProjectDetails}
      />
      {activeScreen === "addProject" && (
        <AddProject handleAddProjectScreen={handleAddProjectScreen} />
      )}
      {activeScreen === "project" && (
        <Project onAddProject={handleAddProject} onCancel={handleCancel} />
      )}
      {activeScreen === "projectDetails" && (
        <ProjectDetails
          title={project.title}
          description={project.description}
          date={project.date}
          id={project.id}
          onDeleteProject={handleDeleteProject}
          onAddTask={handleAddTasks}
          onDeleteTask={handleDeleteTask}
          tasks={tasks}
        />
      )}
    </main>
  );
}

export default App;
