import Login from './components/Login';
import Listado from './components/Listado';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import MovieDetail from './components/MovieDetails';


function App() {
  return (
    <>
      <Header />
      <div className='container mt-3'>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/listado' element={<Listado />} />
          <Route path='/detalle' element={<MovieDetail />} />
          {/* <Route path='/detalle1' element={<MovieDetail />} /> */}
        </Routes>
      </div>
      <Footer />
    </>

  );
}

export default App;
