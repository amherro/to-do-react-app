import React from 'react'

const Task = () => {
  return (
        <div className='item-card card justify-self-center mt-16 bg-zinc-800'>
            <div className="flex flex-row justify-end">
                {/* <div className="card-title text-white p-5 pl-10">Item 1</div> */}
                <button className='btn btn-circle btn-sm text-white bg-red-500 hover:bg-slate-500 mt-3 mr-4'>X</button>
            </div>
            <div className="card-body text-white p-5 pt-0 pb-10 pl-10">Do 5 React and Node/Express tutorials.</div>
        </div>  
    )
}

export default Task