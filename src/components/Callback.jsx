import React from "react"
import { Button } from "../styles/styles"

function Memo() {
  const [name, setName] = React.useState("Mi")
  const [m, setM] = React.useState(false)
  const [depend, setDepend] = React.useState(0)

  function forever() {
    let i = 0
    while (i < 20000) {
      i++
    }
    console.log("forever was computed")
    return (
      <div>
        <h3>
          forever is an unrelated function (but still used in this component)
          but is still executed when name changes. Check the console to confirm.
          It's CB has been made to only update when depend is changed.
        </h3>
      </div>
    )
  }

  const memoForever = React.useCallback(() => forever(), [depend])

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <h1>
        <u>useCallback</u>
      </h1>
      {console.log(m)}
      <span>{m ? memoForever() : forever()} </span>
      <Button
        color="purple"
        onClick={() => {
          setName(name + name)
        }}
      >
        Click here to change "name" state
      </Button>
      <Button
        color="purple"
        onClick={() => {
          setDepend(depend + 1)
        }}
      >
        Click here to change "depend" state
      </Button>
      <Button
        color="purple"
        onClick={() => {
          setM(true)
        }}
      >
        Toggle useCallback
      </Button>
    </div>
  )
}

export default Memo
