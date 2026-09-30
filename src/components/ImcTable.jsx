import './ImcTable.css'

const ImcTable = ({ data, imc, info, infoClass }) => {
  return (
    <div id="result-container">
      <div className="result-header">
        <h2>Resultado</h2>
        <p>Confira seu IMC e a classificação correspondente.</p>
      </div>

      <div className="result-card">
        <p className="result-title">Seu IMC</p>
        <p id="imc-number" className={infoClass}>
          {imc}
        </p>
        <p id="imc-info">
          Situação atual: <strong className={infoClass}>{info}</strong>
        </p>
      </div>

      <div className="classification-heading">
        <h3>Confira as classificações</h3>
        <p>A sua faixa fica destacada na tabela.</p>
      </div>

      <div id="imc-table">
        <div className="table-header">
          <h4>IMC</h4>
          <h4>Classificação</h4>
          <h4>Obesidade</h4>
        </div>

        {data.map((item) => {
          const isCurrent = item.info === info

          return (
            <div
              className={`table-data ${isCurrent ? 'current' : ''}`}
              key={item.info}
            >
              <p>{item.classification}</p>
              <p className={item.infoclass}>{item.info}</p>
              <p>{item.obesity}</p>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default ImcTable
