import styles from './Home.module.css'
import savings from '../../img/bola.png'
import LinkButton from '../layout/LinkButton'

function Home(){
  return(
    <section className={styles.home_container}>
      <h1>Bem-vindo a <span>Serv</span></h1>
      <p>Comece a cadastrar seus alunos agora mesmo</p>
      <LinkButton to="/cadastro" text="Cadastrar Aluno"/>
      <img src={savings} alt="Serv"/>
    </section>
  )
}

export default Home