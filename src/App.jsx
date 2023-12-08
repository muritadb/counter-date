import { useState } from "react"
import "./index.css"

const ShowDate = () => {
  let date = new Date()
  date = new Intl.DateTimeFormat("pt-br", { dateStyle: "full" }).format(date)

  return <span>{date}</span>
}
const App = () => {
  const [interval, setInter] = useState(1)
  const [count, setCount] = useState(1)

  const handleClickMinusInterval = () => {
    setInter((i) => i - 1)
  }

  const handleClickPlusInterval = () => {
    setInter((prev) => prev + 1)
    console.log("Clicou no mais do Intervalo")
  }

  const handleClickMinusCount = () => {
    setCount((i) => i - 1)
  }

  const handleClickPlusCount = () => {
    setCount((c) => c + 1)
  }

  return (
    <div className="container">
      <div className="count">
        <button onClick={handleClickMinusInterval}>-</button>
        <h2>Intervalo: {interval}</h2>
        <button onClick={handleClickPlusInterval}>+</button>
      </div>
      <div className="count">
        <button onClick={handleClickMinusCount}>-</button>
        <h2>Contagem: {count}</h2>
        <button onClick={handleClickPlusCount}>+</button>
      </div>
      <h2>
        Hoje é <ShowDate />
      </h2>
    </div>
  )
}

export { App }
