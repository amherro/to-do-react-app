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
    if(taskEdit.edit === true) {
      updateTask(taskEdit.task.id, newTask)
    } else {
      addTask(newTask)
    }
    setNewTask('')
  }  
  return (
    <form className="flex flex-row justify-center mt-20 mb-12" onSubmit={handleSubmit}>
      <div className="form-control">
          <input type="text" placeholder="Add a task..." name="add-item" id="add-item" className="item-input input input-bordered text-white ml-10 md:ml-0 md:w-96" onChange={(e) => setNewTask(e.target.value)} value={newTask} />
      </div>
      <button type='submit' className="btn btn-square ml-2 mr-10 md:mr-0">
          <Icon path={mdiPlusCircleOutline} size={1} />
      </button>
    </form>
  )
}

export default ItemInput