import { useState } from "react"
import "./index.css"


const App = () => {
  const [interval, setInter] = useState(1)
  const [count, setCount] = useState(1)

  const date = new Date()
  const dateFormated = new Intl.DateTimeFormat("pt-br", { dateStyle: "full" })
    .format(date.setDate(date.getDate() + count))

  const handleClickMinusInterval = () => setInter((i) => i === 1 ? i : i - 1)
  const handleClickPlusInterval = () => setInter((prev) => prev + 1)
  const handleClickMinusCount = () => setCount((i) => i - interval)
  const handleClickPlusCount = () => setCount((c) => c + interval)


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
        Hoje é {dateFormated}
      </h2>
    </div>
  )
}

export { App }
