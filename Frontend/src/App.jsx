import React, { useState } from 'react';

import './index.css'

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1 className="flex flex-col gap-3 items-center justify-center w-full h-[100vh] bg-green-200 text-3xl">
        App Component
        <span className=' border p-3 rounded-2xl'><p>Count: {count}</p></span>
        <button onClick={() => {
          console.log('clicking...')
          setCount(count + 1)
        }} className=' bg-green-400 border rounded-2xl p-2 hover:bg-green-600'>Increment</button>
      </h1>

      {/* 
      <div className='flex flex-col items-center justify-center w-full h-[100vh] bg-green-200 text-3xl'>
        <h1>Hello from SSR React!</h1>
        <span><p>Count: {count}</p></span>
        <button onClick={() => {
          console.log('clicking...')
          // setCount(count + 1)
        }} className=' bg-green-400 border rounded-2xl p-2 hover:bg-green-600'>Increment</button>
      </div> */}

    </>
  )
}

export default App
