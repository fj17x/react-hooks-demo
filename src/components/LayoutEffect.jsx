// Happens even before useEffect()
// useEffect() happens after the page is done loading
// useLayoutEffect() happens even before that

import React from "react"

function LayoutEffect() {
  const [date, setDate] = React.useState({})
  React.useLayoutEffect(() => {
    fetch("http://worldtimeapi.org/api/timezone/Europe/Rome", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => setDate(data))
      .catch((err) => console.log(err))
  }, [])

  return (
    <div>
      <h1>
        <u>useLayoutEffect</u>
      </h1>
      <h2>This executes even before useEffect: {date.unixtime}</h2>
    </div>
  )
}

export default LayoutEffect
