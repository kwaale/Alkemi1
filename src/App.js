import Login from './components/Login';
import Listado from './components/Listado';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/listado' element={<Listado/>}/>
      </Routes>
    
  );
}

export default App;
