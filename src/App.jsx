import React, { useState } from 'react'

const App = () => {
  
  const [title, setTitle] = useState('')
  const [details, setDetails] = useState('')

  const [task, setTask] = useState([])

  const submitHandler = (e) => {
    e.preventDefault()
    
    const copyTask = [...task]

    copyTask.push({title,details})

    setTask(copyTask)
    
    console.log(task)
    
  
    setTitle('')
    setDetails('')
  }

  const deleteNote = (idx) =>{
    const copyTask = [...task]
    copyTask.splice(idx,1)
    
    setTask(copyTask)
    
    console.log(idx)
  }
  


  return (
    <div className=' min-h-screen lg:flex  bg-black text-white '>
      <form onSubmit={(e) => {
        submitHandler(e)
      }} className=' items-start gap-4 lg:w-1/2 flex flex-col p-10' action="">

        <h1 className='text-4xl font-bold '>Add Notes</h1>

        <input onChange={(e)=>{
          setTitle(e.target.value)
        }}
          value={title}
          type="text"
          placeholder='Enter Notes Heading'
          className='p-5 py-2 border-2 font-medium outline-none rounded w-full'
        />
        <textarea 
          placeholder='Write Details here'
          className='p-5 py-2 h-32 font-medium outline-none border-2 rounded w-full'
          value={details}

          onChange={(e)=>{
            setDetails(e.target.value)
          }}


        />
            

        <button
          className='p-5 py-2 active:scale-95 border-2 font-medium  rounded bg-white text-black w-full'

        >Add Notes
        </button>

      </form>

      <div className=' p-10 lg:border-l-2 lg:w-1/2'>
        <h1 className='text-4xl font-bold '>Recent Notes</h1>

        <div className='flex flex-wrap  items-start justify-start  h-screen gap-10 overflow-auto mt-5 '>
          {task.map(function(elem, idx){
            
            return <div key={idx} className="h-52 py-4 px-4 flex flex-col items-start flex-wrap justify-between 
             w-40 relative rounded-2xl text-black bg-cover bg-[url('https://static.vecteezy.com/system/resources/previews/037/152/677/non_2x/sticky-note-paper-background-free-png.png')]">
              <div className='w-full'>
                <h3 className='leading-tight  text-lg font-bold'>{elem.title}</h3>
              <p className='leading-tight mt-2 text-sm font-medium text-gray-500 '>{elem.details}</p>
              </div>
              <button onClick={()=>{
                deleteNote(idx)
              }}

              className='bg-red-500  w-full rounded py-1 text-xs font-bold text-white cursor-pointer active:scale-95'
          
              >Delete</button>
              </div>
              
          })}
          
        </div>

      </div>



    </div>
  )
}

export default App
