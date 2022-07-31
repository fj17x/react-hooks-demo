// This is the second way of using useRef
// First is just storing Eg. button clicks in .current and it will not trigger component re-rendereing

import React from "react"
import { Button } from "../styles/styles"

function Ref() {
  const inputRef = React.useRef({})
  const [domValues, setDomValues] = React.useState({})

  const onClick = () => {

    function convertToObject(obj) {
      obj = {}
      for (var p in inputRef.current) {
        obj[p] = inputRef.current[p]
      }
      return obj
    }

    var result = Object.assign(convertToObject(inputRef.current))
    setDomValues(result)

    inputRef.current.focus()
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
        Other than just storing a value in the .current property, we can use
        useRef to control DOM elements inside the .current. The input element
        above is referenced. So I am able to access and control its attributes.
      </h3>
      <h3>
        The attribute 'type' is <u>{domValues.type}</u>, 'placeholder' is{" "}
        <u>{domValues.placeholder}</u> and the value is <u>{domValues.value}</u>
        . The focus() is called when first button clicked.
      </h3>
    </div>
  )
}

export default Ref
