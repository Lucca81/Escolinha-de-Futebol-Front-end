import PagamentoForm from '../pagamento/PagamentoForm'
import styles from './Pagamento.module.css'

function Pagamento(){
  return(
    <div className={styles.pagamento_container}>
      <h1>Registrar Pagamento</h1>
      <p>Registre Pagamento do aluno</p>
      <PagamentoForm btnText="Pagamento aluno"/>
    </div>
  )
}

export default Pagamento