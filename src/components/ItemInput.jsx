import { TaskContext } from '../TaskContext';
import { useContext, useState, useEffect } from 'react';
import Icon from '@mdi/react';
import { mdiPlusCircleOutline } from '@mdi/js';

const ItemInput = () => {
  const [newTask, setNewTask] = useState('')
  const {addTask, taskEdit, updateTask} = useContext(TaskContext)

  useEffect(() => {
    if(taskEdit.edit === true) {
      setNewTask(taskEdit.task.name)
      console.log('running')
    }
  }, [taskEdit])

  const handleSubmit = (e) => {
    e.preventDefault()
    if(newTask === '' || newTask === null) {
      return
    }
    if(taskEdit.edit === true) {
      updateTask(taskEdit.task.id, newTask)
      taskEdit.edit = false
    } else {
      addTask(newTask)
    }
    setNewTask('')
  }  
  return (
    <form className="flex flex-col md:flex-row justify-center mt-20 mb-12 items-center" onSubmit={handleSubmit}>
      <div className="form-control">
          <input type="text" placeholder="Add a task..." name="add-item" id="add-item" className="item-input input input-bordered text-white ml-0 md:ml-10 w-1/2" onChange={(e) => setNewTask(e.target.value)} value={newTask} />
      </div>
      <button type='submit' className="btn btn-square w-2/3 mt-5 md:w-[50px] md:mt-0 md:ml-2 md:mr-10">
          <Icon path={mdiPlusCircleOutline} size={1} />
      </button>
    </form>
  )
}

export default ItemInput