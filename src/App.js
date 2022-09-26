import React from 'react';
import Login from './components/Login';
import Listado from './components/Listado';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import MovieDetail from './components/MovieDetails';
import Resultados from './components/Resultados';


function App() {
  const addRemoveFavorite = (id) =>{
    console.log("Favorito", id)
  }
  return (
    <>
      <Header />
      <div className='container mt-3'>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/listado' element={<Listado addRemoveFavorite={addRemoveFavorite}/>} />
          <Route path='/detalle' element={<MovieDetail />} />
          <Route path='/results' element={<Resultados />} />
          {/* <Route path='/detalle1' element={<MovieDetail />} /> */}
        </Routes>
      </div>
      <Footer />
    </>

  );
}

export default App;
