import {createContext, useState} from 'react'

export const TaskContext = createContext({
    tasks: [],
    addTask: () => {},
    deleteTask: () => {}, 
    editTask: () => {}
})

export const TaskProvider = ({children}) => {
    const [tasks, setTasks] = useState([])

    const addTask = (task) => {
        setTasks([...tasks, {name: task}])
        // console.log(tasks)
    }

    const contextValue = {
        tasks,
        addTask,
        // deleteTask, 
        // editTask
    }

    return (
        <TaskContext.Provider value={contextValue}>
            {children}
        </TaskContext.Provider>
    )
}

export default TaskProvider