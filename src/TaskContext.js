import {createContext, useState} from 'react'

export const TaskContext = createContext({
    tasks: [],
    getTasks: () => {},
    addTask: () => {},
    addFromStorage: () => {},
    deleteTask: () => {}, 
    editTask: () => {},
    updateTask: () => {}
})

export const TaskProvider = ({children}) => {
    const [tasks, setTasks] = useState(JSON.parse(localStorage.getItem('Tasks')) || [])
    const [taskEdit, setTaskEdit] = useState({
        item: {},
        edit: false
    })
    // Add a task
    const addTask = (task) => {
        setTasks([{id: crypto.randomUUID(), name: task}, ...tasks])
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