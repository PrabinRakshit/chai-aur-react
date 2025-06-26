import { useState } from 'react'
import './App.css'
import Button from './components/Button'

function App() {
  const [color, setColor] = useState("olive")

  const colors = {
    btn: ['white', 'black', 'red', 'green', 'blue', 'purple', 'yellow'],
    text: ['black', 'white', 'white', 'white', 'white', 'white', 'black'],
  }

  return (
    <>
      <div className='w-full h-screen p-4' style={{backgroundColor: color}}>
        <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
          <div className='flex flex-wrap justify-center gap-3 shadow-xl bg-amber-50 px-3 py-2 rounded-xl'>
            {
              colors.btn.map((btn, index)=>
                (
                <Button key={btn} textColor={colors.text[index]} btnColor={btn} textName={btn} onClick={()=>setColor(btn)} />
              )
              
            )
            }
          </div>
        </div>
      </div>
    </>
  )
}

export default App
