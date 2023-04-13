import {createContext, useState} from 'react'

export const TaskContext = createContext({
    tasks: [],
    addTask: () => {},
    deleteTask: () => {}, 
    editTask: () => {}
})

export const TaskProvider = ({children}) => {
    const [tasks, setTasks] = useState([])
    const [taskEdit, setTaskEdit] = useState({
        item: {},
        edit: false
    })

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
        // const selectedTask = tasks.find(task => task.id === id)
        // console.log(selectedTask.name)
        // return selectedTask.name
    }

    const contextValue = {
        tasks,
        addTask,
        deleteTask, 
        editTask,
        taskEdit
    }

    return (
        <TaskContext.Provider value={contextValue}>
            {children}
        </TaskContext.Provider>
    )
}

export default TaskProvider