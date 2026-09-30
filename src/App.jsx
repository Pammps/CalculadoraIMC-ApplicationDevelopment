import './App.css'
import ImcCalc from './components/ImcCalc'
import ImcTable from './components/ImcTable'
import Button from './components/Button'
import { useState } from 'react'
import { data } from './data/data'

function App() {
  const [imc, setImc] = useState('')
  const [info, setInfo] = useState('')
  const [infoClass, setInfoClass] = useState('')

  const calcImc = (e, height, weight) => {
    e.preventDefault()

    if (!weight || !height) return

    const weightFloat = +weight.replace(',', '.')
    const heightFloat = +height.replace(',', '.')

    if (!weightFloat || !heightFloat) return

    const imcResult = (weightFloat / (heightFloat * heightFloat)).toFixed(1)
    const result = Number(imcResult)
    const currentData = data.find((item) => result >= item.min && result <= item.max)

    if (!currentData) return

    setImc(imcResult)
    setInfo(currentData.info)
    setInfoClass(currentData.infoclass)
  }

  const resetCalc = (e) => {
    e.preventDefault()
    setImc('')
    setInfo('')
    setInfoClass('')
  }

  return (
    <div className="container">
      {!imc ? (
        <ImcCalc calcImc={calcImc} />
      ) : (
        <>
          <ImcTable
            data={data}
            imc={imc}
            info={info}
            infoClass={infoClass}
          />
          <div className="result-actions">
            <Button id="back-btn" text="Calcular novamente" action={resetCalc} />
          </div>
        </>
      )}
    </div>
  )
}

export default App
