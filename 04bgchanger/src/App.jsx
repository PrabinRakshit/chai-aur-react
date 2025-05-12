import { useState } from 'react'
import './App.css'
import Button from './components/Button'

function App() {
  const [color, setColor] = useState("olive")

  const colors = {
    'white': 'red',
    'black': 'yellow',
    'white': 'green',
    'white': 'blue',
    'white': 'purple',
    'black': 'white'
  }

  return (
    <>
      <div className='w-full h-screen p-4' style={{backgroundColor: color}}>
        <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
          <div className='flex flex-wrap justify-center gap-3 shadow-xl bg-amber-50 px-3 py-2 rounded-xl'>
            {
              Object.entries(colors).map((item)=>
              //   (
              //   <Button key={key} textColor={key} btnColor={value} textName={value} />
              // )
              console.log(item[0])
              
            )
            }
          </div>
        </div>
      </div>
    </>
  )
}

export default App
