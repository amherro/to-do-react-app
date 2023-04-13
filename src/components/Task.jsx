import { TaskContext } from '../TaskContext';
import { useContext } from 'react';
import Icon from '@mdi/react';
import { mdiPencilCircleOutline } from '@mdi/js';

const Task = ({ task }) => {
    const {deleteTask, editTask} = useContext(TaskContext)

    let id = task.id
    let name = task.name

    return (
        <div className='item-card card justify-self-center mt-3 bg-zinc-800'>
            <div className="flex flex-row justify-end">
                {/* <div className="card-title text-white p-5 pl-10">Item 1</div> */}
                <Icon path={mdiPencilCircleOutline} size='37px' color='#f4f4f4' className='edit-button btn btn-sm btn-circle hover:bg-success mr-3 mt-2.5' onClick={() => editTask(task)} />
                <button className='btn btn-circle btn-sm text-white bg-red-500 hover:bg-slate-500 mt-3 mr-4' onClick={() => deleteTask(id)}>X</button>
            </div>
            <div className="card-body text-white p-5 pt-0 pb-10 pl-10">{name}</div>
        </div>  
    )
}

export default Task