import { TaskContext } from '../TaskContext';
import { useContext } from 'react';
import Task from './Task'

const Tasks = () => {
    const taskContext = useContext(TaskContext)
    const taskList = taskContext.tasks
  return (
    <>
        {taskList.map((task) => {
            return <Task key={task.id} id={task.id} name={task.name} />
        })}
    </>
  )
}

export default Tasks