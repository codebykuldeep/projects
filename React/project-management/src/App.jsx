import { useState } from "react";
import NewProject from "./components/NewProject";
import NoProjectSelected from "./components/NoProjectSelected";
import ProjectSidebar from "./components/ProjectSidebar";
import SelectedProject from "./SelectedProject";

function App() {
  const [projectState,setProjectState] = useState({
    selectedProjectId:undefined,
    projects:[],
    tasks:[]
  });

  function handleAddTask(text){
    setProjectState(prevState=>{
      const newTask= {
        text:text,
        projectId:prevState.selectedProjectId,
        id:Math.random()
      };

      return {
        ...prevState,
        tasks:[...prevState.tasks,newTask]
      }
    })

  }
  function handleDeleteTask(id){
    setProjectState(prevState =>{
      return{
        ...prevState,
        tasks:prevState.tasks.filter(
          (task) => task.id !== id
        )
      }
    })
    
  }



  function handleSelectProject(id){
    setProjectState(prevState =>{
      return{
        ...prevState,
        selectedProjectId:id,
      }
    })
  }

  function handleStartAddProject() {
    setProjectState(prevState =>{
      return{
        ...prevState,
        selectedProjectId:null,
      }
    })
  }
  function handleAddProject(projectData){
    setProjectState(prevState=>{
      const newProject = {
        ...projectData,
        id:Math.random()
      };

      return {
        ...prevState,
        selectedProjectId:undefined,
        projects:[...prevState.projects,newProject]
      }
    })
  }
  function handleCancel(projectData){
    setProjectState(prevState=>{

      return {
        ...prevState,
        selectedProjectId:undefined,
      }
    })
  }

  function handleDeleteProject() {
    setProjectState(prevState =>{
      return{
        ...prevState,
        selectedProjectId:undefined,
        projects:prevState.projects.filter(
          (project) => project.id !== prevState.selectedProjectId
        )
      }
    })
  }

  
  
  const selectedProject =projectState.projects.find(project=> project.id === projectState.selectedProjectId)



  let content =<SelectedProject project={selectedProject} onDelete={handleDeleteProject}
  onAddTask={handleAddTask}
  onDeleteTask={handleDeleteTask}
  tasks={projectState.tasks}
  />;

  if(projectState.selectedProjectId === null){
    content = <NewProject onCancel={handleCancel} onAdd ={handleAddProject}/>
  }
  else if(projectState.selectedProjectId === undefined){
    content = <NoProjectSelected onStartAddProject={handleStartAddProject} />
  }
  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectSidebar projects={projectState.projects} onStartAddProject={handleStartAddProject}
      onSelectProject={handleSelectProject}
      selectedProjectId={projectState.selectedProjectId}
      />
      {/* <NewProject/> */}
      {content}
    </main>
  );
}

export default App;
