import { useState } from 'react'
import Homepage from './pages/Homepage'
import { Grommet } from 'grommet'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Grommet>
        <Homepage />
      </Grommet>
    </>
  )
}

export default App
