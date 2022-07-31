import React from "react"

function Effect() {
  const [date, setDate] = React.useState({})

  React.useEffect(() => {
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
        <u>useEffect</u>
      </h1>
      <h2>The unix time of Rome is {date.unixtime} </h2>
      <h3>The above information is fetched before the component renders.</h3>
    </div>
  )
}

export default Effect
