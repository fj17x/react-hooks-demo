import React from "react"
import { Button } from "../styles/styles"

function State() {
  const [num, setNum] = React.useState(0)

  function increment() {
    setNum(num + 1)
  }

  return (
    <div>
      <h1>
        <u>useState</u>
      </h1>
      <h2>{num}</h2>
      <Button color="orange" onClick={increment}>
        Click here bruh!
      </Button>
    </div>
  )
}

export default State
