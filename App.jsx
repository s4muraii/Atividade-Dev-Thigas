import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './pages/Login';
import Painel from './pages/Painel';
import {BrowserRouter, Routes, Route} from 'react-router-dom'; //importando o BrowserRouter e o Routes do react-router-dom para criar as rotas e avisar o navegador que estamos usando rotas

function App() { //uma função sempre retornará um elemento JSX
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/painel' element={<Painel/>}/>
      </Routes>
    </BrowserRouter>
   
  )
}

export default App