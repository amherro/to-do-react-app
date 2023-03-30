import {createContext, useState} from 'react'

export const TaskContext = createContext({
    tasks: [],
    addTask: () => {},
    deleteTask: () => {}, 
    editTask: () => {}
})

export const TaskProvider = ({children}) => {
    const [tasks, setTasks] = useState([])
    const [editing, setEditing] = useState(false)


    const addTask = (task) => {
        setTasks([...tasks, {id: crypto.randomUUID(), name: task}])
    }

    const deleteTask = (id) => {
        setTasks(tasks.filter((task) => task.id !== id))
    }

    const editTask = (id) => {
        setEditing(true)
        const selectedTask = tasks.find(task => task.id === id)
        console.log(selectedTask.name)
        return selectedTask.name
    }

    const contextValue = {
        tasks,
        addTask,
        deleteTask, 
        editTask
    }

    return (
        <TaskContext.Provider value={contextValue}>
            {children}
        </TaskContext.Provider>
    )
}

export default TaskProvider