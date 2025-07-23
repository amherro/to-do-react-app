import { TaskContext } from '../TaskContext';
import { useContext } from 'react';
import Icon from '@mdi/react';
import { mdiCheckBold, mdiCheckCircle, mdiCheckCircleOutline, mdiPencilCircleOutline } from '@mdi/js';

const Task = ({ task }) => {
    const {deleteTask, editTask, completeTask} = useContext(TaskContext)

    let id = task.id
    let name = task.name   

    return (
        <div className={`card justify-self-center mt-3 bg-zinc-800 w-full ${task.completed && 'bg-success'}`}>
            <div className="flex flex-row justify-end">
                <Icon path={mdiPencilCircleOutline} size='37px' color='#f4f4f4' className='edit-button btn btn-sm btn-circle hover:bg-success mr-3 mt-2.5' onClick={() => editTask(task)} />
                <Icon path={mdiCheckCircleOutline} size='37px' color='#f4f4f4' className={`edit-button btn btn-sm btn-circle mr-3 mt-2.5 ${!task.completed && 'bg-success'}`} onClick={() => completeTask(id)} />
                <button className='btn btn-circle btn-sm text-white bg-red-500 hover:bg-slate-500 mt-3 mr-4' onClick={() => deleteTask(id)}>X</button>
            </div>
            <div className="card-body text-white p-5 pt-0 pb-10 pl-10">{name}</div>
        </div>  
    )
}

export default Task