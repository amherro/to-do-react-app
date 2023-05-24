import { TaskContext } from '../TaskContext';
import { useContext } from 'react';
import Task from './Task'

const Tasks = () => {
  const {tasks} = useContext(TaskContext)

  return (
    <>
        {tasks.map((task) => {
            return <Task key={task.id} task={task} tasks={tasks} />
        })}
    </>
  )
}

export default Tasks