import { useState } from 'react'
import LoginScreen from './Components/LoginScreen'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='flex flex-1 bg-slate-600 h-full'>
        <LoginScreen/>
      </div>
    </>
  )
}

export default App
