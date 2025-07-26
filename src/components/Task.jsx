import { TaskContext } from '../TaskContext';
import { useContext } from 'react';
import Icon from '@mdi/react';
import { mdiCheckCircleOutline, mdiPencilCircleOutline } from '@mdi/js';
import { toast } from 'react-toastify';

const Task = ({ task }) => {
  const { deleteTask, editTask, completeTask } = useContext(TaskContext);

  let id = task.id;
  let name = task.name;

  return (
    <div
      className={`card mt-3 bg-zinc-800 h-auto w-full md:w-[480px] max-w-[480px] ${
        task.completed && 'opacity-25'
      }`}
    >
      <div className="flex flex-row justify-end">
        <Icon
          path={mdiCheckCircleOutline}
          size="37px"
          color="#f4f4f4"
          className="edit-button btn btn-sm btn-circle mr-3 mt-2.5 hover:bg-success"
          onClick={() => {
            completeTask(id);
            !task.completed &&
              toast('Task Completed', {
                position: 'top-right',
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: 'dark',
              });
          }}
        />
        <Icon
          path={mdiPencilCircleOutline}
          size="37px"
          color="#f4f4f4"
          className={`edit-button btn btn-sm btn-circle hover:bg-slate-500 mr-3 mt-2.5 ${
            task.completed
              ? 'opacity-0 w-0 absolute -z-10'
              : 'opacity-100 w-100 z-100'
          }`}
          onClick={() => editTask(task)}
        />
        <button
          className="btn btn-circle btn-sm text-white bg-red-500 hover:bg-slate-500 mt-3 mr-4"
          onClick={() => {
            deleteTask(id);
            toast('Task Deleted', {
              position: 'top-right',
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: false,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: 'dark',
            });
          }}
        >
          X
        </button>
      </div>
      <p className="card-body text-white p-5 pt-10 pb-20 pl-10">{name}</p>
    </div>
  );
};

export default Task;
