import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import { Autores } from './components/Autores';
import { Libros } from './components/Libros';
import { Home } from './components/Home';

function App() {
  return (
    <>
      <BrowserRouter> 
         <Routes>
          <Route path='/' element ={ <Home/>}/>
          <Route path='/autores' element= {<Autores/>}/>
          <Route path='/libros' element= {<Libros />}/>
         </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
