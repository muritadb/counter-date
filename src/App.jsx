import { useState } from "react"
import "./index.css"


const DateMsg = ({ count }) => {
  const date = new Date()
  const formattedDate = new Intl.DateTimeFormat("pt-br", { dateStyle: "full" })
    .format(date.setDate(date.getDate() + count))

  const singularPlural = count === 1 || count === -1 ? "dia" : "dias"

  return (
    <h2>
      {count > 0
        ? `${count} ${singularPlural} a partir de hoje será ${formattedDate}`
        : count < 0
          ? `${Math.abs(count)} ${singularPlural} atras era ${formattedDate}`
          : `Hoje é ${formattedDate}`

      }
    </h2>
  )
}

const App = () => {
  const [step, setStep] = useState(1)
  const [count, setCount] = useState(0)



  const handleClickMinusInterval = () => setStep((i) => i === 1 ? i : i - 1)
  const handleClickPlusInterval = () => setStep((prev) => prev + 1)
  const handleClickMinusCount = () => setCount((i) => i - step)
  const handleClickPlusCount = () => setCount((c) => c + step)


  return (
    <div className="container">
      <div className="count">
        <button onClick={handleClickMinusInterval}>-</button>
        <h2>Intervalo: {step}</h2>
        <button onClick={handleClickPlusInterval}>+</button>
      </div>
      <div className="count">
        <button onClick={handleClickMinusCount}>-</button>
        <h2>Contagem: {count}</h2>
        <button onClick={handleClickPlusCount}>+</button>
      </div>
      <DateMsg count={count} />
    </div>
  )
}

export { App }
