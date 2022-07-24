import React from "react"

const AppContext = React.createContext()

function Context() {
  const [data, setData] = React.useState("")
  const data2 = "."
  const handleChange = (e) => {
    setData(e.target.value)
  }

  return (
    <AppContext.Provider value={{ data, data2 }}>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "pink",
        }}
      >
        <h1>
          <u>useContext</u>
        </h1>
        <input type="text" onChange={(e) => handleChange(e)} />
        <br />
        <Child />
      </div>
    </AppContext.Provider>
  )
}

function Child() {
  return (
    <div
      style={{
        backgroundColor: "red",
        height: "100px ",
        width: "100px",
        padding: "10px",
      }}
    >
      Child 1,
      <Child2 />
    </div>
  )
}

function Child2() {
  const Fdata = React.useContext(AppContext)
  return (
    <div style={{ backgroundColor: "orange" }}>
      The value is: {Fdata.data + Fdata.data2}
    </div>
  )
}

// // method 2 (using AppContext.Consumer )
// function Child2() {
//   //Consumer requires a function as a child.
//   return (
//     <AppContext.Consumer>
//       {({ data, data2 }) => (
//         <div style={{ backgroundColor: "orange" }}>
//           Child 2, The value is: {data} {data2}
//         </div>
//       )}
//     </AppContext.Consumer>
//   )
// }

export default Context
