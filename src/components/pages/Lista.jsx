import { useState } from 'react'
import styles from './Lista.module.css'

function Lista() {
  const [cpf, setCpf] = useState('')
  const [aluno, setAluno] = useState(null)

  function handleChange(e) {
    setCpf(e.target.value)
  }

  async function handleBuscar(e) {
    e.preventDefault()
    const res = await fetch(`http://localhost:8080/aluno/cpf/${cpf}`)
    const data = await res.json()
    setAluno(data)
  }

  return (
    <div className={styles.container}>
      <h2 className={styles.h2}>Buscar Aluno por CPF</h2>
      <form onSubmit={handleBuscar} style={{ marginBottom: '24px' }}>
        <input
          type="text"
          placeholder="Digite o CPF"
          value={cpf}
          onChange={handleChange}
          style={{ padding: '3px, 3px, 3px, 3px', marginRight: '8px'}}
        />
        <button type="submit">Buscar</button>
      </form>
      {aluno && (
        <table className={styles.table}>
          <thead>
            <tr>
              <th>Nome</th>
              <th>CPF</th>
              <th>Categoria</th>
              <th>Pagamentos</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{aluno.nome}</td>
              <td>{aluno.cpf}</td>
              <td>{aluno.categoria}</td>
              <td>
                {aluno.pagamentos && aluno.pagamentos.length > 0 ? (
                  <ul>
                    {aluno.pagamentos.map((p, i) => (
                      <li key={i}>
                        Data: {p.dataPagamento} | Mês: {p.mesPagamento} | Valor: {p.valor}
                      </li>
                    ))}
                  </ul>
                ) : (
                  <span>Sem pagamentos</span>
                )}
              </td>
            </tr>
          </tbody>
        </table>
      )}
    </div>
  )
}

export default Lista