import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import A from './A';
import B from './B';
import C from './C';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <h1>APP</h1>
        <A/>
        <B/>
        <C/>
      </div>
    </>
  )
}

export default App
