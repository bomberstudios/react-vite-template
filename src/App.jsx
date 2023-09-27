import { useState } from 'react'
import './App.css'

function Button({onClick, children}) {
  return (
    <button onClick={onClick}>
      {children}
    </button>
  )
}

function Card({children}) {
  return (
    <div className="card">
      {children}
    </div>
  )
}

function App() {
  const [count, setCount] = useState(0)

  const handleClick = () => setCount((count) => count + 1)

  return (
    <>
      <h1>Vite + React</h1>
      <Card>
        <Button onClick={handleClick}>
          count is {count}
        </Button>
      </Card>
    </>
  )
}

export default App
