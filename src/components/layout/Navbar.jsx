import { Link } from "react-router-dom";
import Container from "./Container";
import styles from './Navbar.module.css'
import logo from '../../img/serv.png'

function Navbar(){
  return(
    <nav className={styles.navbar}>
      <Container>
        <Link to="/"> <img src={logo} alt="Serv" /></Link>
        <ul className={styles.list}>
          <li class={styles.item}>
            <Link to="/"> Home</Link>
          </li>
          <li className={styles.item}>
            <Link to="/cadastro"> Cadastro</Link>
          </li>
          <li className={styles.item}>
            <Link to="/pagamento"> Pagamento</Link>
          </li>
          <li className={styles.item}>
            <Link to="/lista"> Lista</Link>
          </li>
        </ul>
        </Container>
    </nav>
  )
}

export default Navbar;