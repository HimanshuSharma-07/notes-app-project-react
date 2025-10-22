import React, { useState } from 'react'

const App = () => {
  
  const [title, setTitle] = useState('')
  const [details, setDetails] = useState('')


  const submitHandler = (e) => {
    e.preventDefault()
    console.log("Form Submitted")
    console.log(title,details)
    setTitle('')
    setDetails('')
  }

  


  return (
    <div className=' h-screen lg:flex  bg-black text-white '>
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
          placeholder='Write Details'
          className='p-5 py-2 h-32 font-medium outline-none border-2 rounded w-full'
          value={details}

          onChange={(e)=>{
            setDetails(e.target.value)
          }}


        />
            
        

        <button
          className='p-5 py-2 border-2 font-medium  rounded bg-white text-black w-full'

        >Add Notes
        </button>

      </form>

      <div className=' p-10 lg:border-l-2 lg:w-1/2'>
        <h1 className='text-4xl font-bold '>Recent Notes</h1>

        <div className='flex flex-wrap gap-10 h-full overflow-auto mt-5 '>
          <div className="h-52 w-40 rounded-2xl bg-white"></div>
          <div className="h-52 w-40 rounded-2xl bg-white"></div>
          <div className="h-52 w-40 rounded-2xl bg-white"></div>
          
        </div>

      </div>



    </div>
  )
}

export default App
