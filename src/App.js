import Login from './components/Login';
import Listado from './components/Listado';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';


function App() {
  return (
    <>
      <Header />
      <div className='container mt-3'>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/listado' element={<Listado />} />
        </Routes>
      </div>
      <Footer />
    </>

  );
}

export default App;
