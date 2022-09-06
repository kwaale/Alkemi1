import Login from './components/Login';
import Listado from './components/Listado';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/listado' element={<Listado />} />
      </Routes>
      <Footer />
    </>

  );
}

export default App;
