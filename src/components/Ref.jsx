// This is the second way of using useRef
// First is just storing Eg. button clicks in .current and it will not trigger component re-rendereing

import React from "react"
import { Button } from "../styles/styles"

function Ref() {
  const inputRef = React.useRef({})
  const [domValues, setDomValues] = React.useState({})

  const onClick = () => {
    inputRef.current.focus()
    inputRef.current.value = ""
    setDomValues(inputRef.current)
  }

  const onClickType = () => {
    if (inputRef.current.type === "text") inputRef.current.type = "password"
    else inputRef.current.type = "text"
  }

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
        <u>useRef</u>
      </h1>

      <input type="text" placeholder="Write here" ref={inputRef} />
      <br></br>
      <Button color="green" onClick={onClick}>
        Check
      </Button>
      <Button color="green" onClick={onClickType}>
        Click to toggle between password and text input
      </Button>
      <h3>
        Other than just storing a value in the .current, we can use useRef to
        control DOM elements inside the .current. The input element above is
        referenced. So I am able to access and control its attributes. The
        attribute 'type' is
        {domValues.type}, 'placeholder' is
        {domValues.placeholder}. The focus() is called when first button
        clicked.
      </h3>
    </div>
  )
}

export default Ref
