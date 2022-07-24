/* eslint-disable default-case */
import React from "react"
import { Button } from "../styles/styles"

function Reducer() {
  const [state, dispatch] = React.useReducer(reducer, {
    count: 0,
    showText: true,
  })

  return (
    <div>
      <h1 >
        <u>useReducer</u>
      </h1>
      <h2 >{state.count}</h2>
      {state.showText ? (
        <h1>You can see the text!</h1>
      ) : (
        <span></span>
      )}
      <Button color="red" onClick={() => dispatch({ type: "Increment" })}>
        Dispatch "Increment" action!
      </Button>
      <Button color="red" onClick={() => dispatch({ type: "ToggleShow" })}>
        Dispatch "ToggleShow" action!
      </Button>
    </div>
  )
}

const reducer = (state, action) => {
  switch (action.type) {
    case "Increment":
      return { count: state.count + 1, showText: state.showText }

    case "ToggleShow":
      return { count: state.count, showText: !state.showText }

    default:
      return state
  }
}

export default Reducer
