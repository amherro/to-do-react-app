import {createContext, useState} from 'react'

export const TaskContext = createContext({
    tasks: [],
    getTasks: () => {},
    addTask: () => {},
    deleteTask: () => {}, 
    editTask: () => {},
    updateTask: () => {}
})

export const TaskProvider = ({children}) => {
    const [tasks, setTasks] = useState([])
    const [taskEdit, setTaskEdit] = useState({
        item: {},
        edit: false
    })

    // Get tasks from local storage
    // const getTasks = () => {
    //     console.log(localStorage.length)
    //     if(localStorage.length > 0) {
    //         for(let i = 0; i < tasks.length; i++) {
    //             addTask(localStorage.getItem(tasks[i]))
    //             console.log(tasks)
    //         }
    //     }
    // }

    // Add a task
    const addTask = (task) => {
        setTasks([...tasks, {id: crypto.randomUUID(), name: task}])
    }

    // Delete task
    const deleteTask = (id) => {
        setTasks(tasks.filter((task) => task.id !== id))
    }

    // Set task to be updated
    const editTask = (task) => {
        setTaskEdit({
            task,
            edit: true
        })
    }

    // Update task in Edit mode
    const updateTask = (id, updatedTask) => {
        setTasks(tasks.map((task) => task.id === id ? {...task, name: updatedTask} : task))
        console.log(id, updatedTask)
    }

    const contextValue = {
        tasks,
        taskEdit,
        // getTasks,
        addTask,
        deleteTask, 
        editTask,
        updateTask
    }

    return (
        <TaskContext.Provider value={contextValue}>
            {children}
        </TaskContext.Provider>
    )
}

export default TaskProvider