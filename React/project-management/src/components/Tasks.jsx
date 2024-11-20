import React from 'react'
import NewTask from './NewTask'

export default function Tasks({tasks,onAddTask,onDeleteTask}) {

  console.log(tasks);
  
  return (
    <section>
        <h2 className='text-2xl font-bold text-stone-700 mb-4'>Tasks</h2>
        <NewTask onAddTask={onAddTask} onDeleteTask={onDeleteTask}/>
        {tasks.length === 0 && (
          <p className='text-stone-800 my-4'>This Project does not have any tasks yet</p>
        )}
        {tasks.length > 0 && (
          <ul>
            {tasks.map((task)=>(
              <li key={task.id} className='flex justify-between my-4'>
                <span>{task.text}</span>
                <button className='text-stone-700 hover:text-red-500'
                onClick={()=>onDeleteTask(task.id)}
                >Clear</button>
              </li>
            ))}
          </ul>
        )}
    </section>
  )
}
