import Button from './Button'
import './ImcCalc.css'
import { useState } from 'react'

const ImcCalc = ({ calcImc }) => {
  const [height, setHeight] = useState('')
  const [weight, setWeight] = useState('')
  const [error, setError] = useState('')

  const validDigits = (text) => {
    const cleanedValue = text.replace(/[^0-9,]/g, '')
    const parts = cleanedValue.split(',')

    if (parts.length > 1) {
      return `${parts[0]},${parts.slice(1).join('').slice(0, 2)}`
    }

    return cleanedValue
  }

  const handleHeightChange = (e) => {
    setHeight(validDigits(e.target.value))
    setError('')
  }

  const handleWeightChange = (e) => {
    setWeight(validDigits(e.target.value))
    setError('')
  }

  const clearForm = (e) => {
    e.preventDefault()
    setWeight('')
    setHeight('')
    setError('')
  }

  const handleCalculate = (e) => {
    e.preventDefault()

    const heightFloat = Number(height.replace(',', '.'))
    const weightFloat = Number(weight.replace(',', '.'))

    if (!height || !weight) {
      setError('Preencha a altura e o peso para continuar.')
      return
    }

    if (heightFloat <= 0 || weightFloat <= 0) {
      setError('Digite valores maiores que zero.')
      return
    }

    setError('')
    calcImc(e, height, weight)
  }

  return (
    <div id="calc-container">
      <div className="calc-heading">
        <span className="calc-label">Application Development</span>
        <h1>Calculadora de IMC</h1>
        <p>Preencha seus dados para descobrir seu índice de massa corporal.</p>
      </div>

      <form id="imc-form" onSubmit={handleCalculate}>
        <div className="form-inputs">
          <div className="form-control">
            <label htmlFor="height">Altura</label>
            <div className="input-wrapper">
              <input
                type="text"
                name="height"
                id="height"
                inputMode="decimal"
                maxLength="6"
                placeholder="Exemplo 1,75"
                onChange={handleHeightChange}
                value={height}
                autoComplete="off"
                aria-describedby="height-help"
              />
              <span>m</span>
            </div>
            <small id="height-help">Use a altura em metros.</small>
          </div>

          <div className="form-control">
            <label htmlFor="weight">Peso</label>
            <div className="input-wrapper">
              <input
                type="text"
                name="weight"
                id="weight"
                inputMode="decimal"
                maxLength="7"
                placeholder="Exemplo 70,5"
                onChange={handleWeightChange}
                value={weight}
                autoComplete="off"
                aria-describedby="weight-help"
              />
              <span>kg</span>
            </div>
            <small id="weight-help">Use o peso em quilogramas.</small>
          </div>
        </div>

        {error && (
          <p className="form-error" role="alert">
            {error}
          </p>
        )}

        <div className="action-control">
          <Button id="calc-btn" type="submit" text="Calcular" action={handleCalculate} />
          <Button id="clear-btn" text="Limpar" action={clearForm} />
        </div>
      </form>
    </div>
  )
}

export default ImcCalc
