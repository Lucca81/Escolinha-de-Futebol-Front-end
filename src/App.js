import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './components/pages/Home';
import Cadastro from './components/pages/Cadastro';
import Pagamento from './components/pages/Pagamento';
import Lista from './components/pages/Lista';


import Container from './components/layout/Container';
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
function App() {
  return (
  <Router>
    <Navbar/>
    <Container customClass="min-height"> 
    <Routes>
    <Route path='/' element={<Home/>}></Route>
    <Route path='/cadastro' element={<Cadastro/>}></Route>
    <Route path='/pagamento' element={<Pagamento/>}></Route>
    <Route path='/lista' element={<Lista/>}></Route>
    </Routes>
    </Container>
    <Footer/>
  </Router>
)}

export default App;
