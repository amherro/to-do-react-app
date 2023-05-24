import { TaskContext } from '../TaskContext';
import { useContext, useEffect } from 'react';
import Task from './Task'

const Tasks = () => {
  const {tasks} = useContext(TaskContext)
  // console.log(tasks)

  JSON.parse(localStorage.getItem('Tasks'))

  console.log(tasks)
  useEffect(() => {
    JSON.parse(localStorage.getItem('Tasks'))
  }, [])
  useEffect(() => {
    localStorage.setItem('Tasks', JSON.stringify(tasks))
  }, [tasks])

  return (
    <>
        {tasks.map((task) => {
            return <Task key={task.id} task={task} tasks={tasks} />
        })}
    </>
  )
}

export default Tasks