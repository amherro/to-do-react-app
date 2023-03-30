import { TaskContext } from '../TaskContext';
import { useContext, useState } from 'react';
import Icon from '@mdi/react';
import { mdiPlusCircleOutline } from '@mdi/js';

const ItemInput = () => {
  const [newTask, setNewTask] = useState('')
  const taskList = useContext(TaskContext)

  // useEffect(() => console.log(taskList.tasks), [taskList.tasks])
  
  return (
    <form className="flex flex-row justify-center mt-20 mb-12" onSubmit={(e) => {
      e.preventDefault()
      taskList.addTask(newTask)
      setNewTask(e.target.reset())
    }}>
      <div className="form-control">
          <input type="text" placeholder="Add a task..." name="add-item" id="add-item" className="item-input input input-bordered text-white" onChange={(e) => setNewTask(e.target.value)} />
      </div>
      <button type='submit' className="btn btn-square ml-2">
          <Icon path={mdiPlusCircleOutline} size={1} />
      </button>
    </form>
  )
}

export default ItemInput