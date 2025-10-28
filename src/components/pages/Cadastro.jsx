import CadastroForm from '../cadastro/CadastroForm'
import styles from './Cadastro.module.css'

function CadastrarAluno(){
  return(
    <div className={styles.cadastro_container}>
      <h1>Cadastrar Aluno</h1>
      <p>Cadastre seu aluno</p>
      <CadastroForm btnText="Cadastrar Aluno"/>
    </div>
  )
}

export default CadastrarAluno