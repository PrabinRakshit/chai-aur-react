import { useCallback, useEffect, useState, useRef } from 'react'
import './App.css'

function App() {
  const [length, setLength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [characterAllowed, setCharacterAllowed] = useState(false)
  const [password, setPassword] = useState('')
  const [copied, setCopied] = useState(false)
  const [activeClass, setActiveClass] = useState('')

  // useRef hook
  const passwordRef = useRef(null)

  const passwordGenerator = useCallback(() => {
    let pass = ''
    let string = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';

    if (numberAllowed) {
      string += '0123456789'
    }

    if (characterAllowed) {
      string += '!@#$%^&*'
    }

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * string.length + 1)
      pass += string.charAt(char)
    }

    setPassword(pass)

  }, [length, numberAllowed, characterAllowed, setPassword])

  useEffect(() => {
    passwordGenerator()
  }
  , [length, numberAllowed, characterAllowed, passwordGenerator])

  const copyToClipboard = useCallback(() => {
    passwordRef.current?.select()
    passwordRef.current?.setSelectionRange(0, 10) // For range options
    navigator.clipboard.writeText(password)
      .then(() => {
        setCopied(true)
        setTimeout(() => setCopied(false), 500)
      })
      .catch((err) => {
        console.error('Failed to copy: ', err)
      })
  }, [password])
  const handleCopy = (e) => {
    e.preventDefault()
    copyToClipboard()
  }

  const handleMousedown = (e) => {
    e.preventDefault()
    setActiveClass('active-btn')    
  }

  const handleMouseup = (e) => {
    e.preventDefault()
    setActiveClass('')
  }

  return (
    <>
      <div className='w-full max-w-2xl mx-auto shadow-md rounded-lg p-4 my-8 text-orange-500 bg-gray-700'>
        {/* Copied Popup */}
        {copied && (
          <div className="absolute top-2 right-2 bg-green-600 text-white px-4 py-2 rounded shadow transition-opacity duration-300 z-10">
            Copied!
          </div>
        )}
        <h1 className='text-white text-center mb-2'>Password Generator</h1>
        <div className='flex shadow rounded-lg overflow-hidden mb-4'>
          <input type="text" value={password} className='outline-none w-full py-1 px-3 bg-white' placeholder='Password' readOnly ref={passwordRef} />
          <button className={`outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0 cursor-pointer copy-btn ${activeClass}`} onClick={handleCopy} onMouseDown={handleMousedown} onMouseUp={handleMouseup}>copy</button>
        </div>
        <div className="flex text-sm gap-x-2 justify-between mb-4">
          <div className="flex items-center gap-x-1">
            <input type="range" min={6} max={100} value={length} className='cursor-pointer' onChange={(e)=>setLength(e.target.value)} />
            <label>Length: {length}</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input type="checkbox" id="numberAllowed" defaultChecked={numberAllowed} className='cursor-pointer' onChange={(e) => setNumberAllowed((prev)=>!prev)} />
            <label htmlFor="numberAllowed">Include Numbers</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input type="checkbox" id="characterAllowed" defaultChecked={characterAllowed} className='cursor-pointer' onChange={(e) => setCharacterAllowed((prev)=>!prev)} />
            <label htmlFor="characterAllowed">Include Characters</label>
            </div>
        </div>
      </div>
    </>
  )
}

export default App
