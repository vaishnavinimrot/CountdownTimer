import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import CountdownTimer from './CountdownTimer'
import './App.css'

function App() {

  return (
      <div>
          <CountdownTimer initialMinutes={1} />
      </div>
  )
}

export default App
