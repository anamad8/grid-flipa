import React from 'react';
import './App.css';
import { Routes, Route} from "react-router-dom";
import Grid from './Componets/Grid';
import Practica from './Componets/Practica';
import Page from './Componet/Page';

function App() {
  return (
    <Routes>
          <Route exact path="/Grid" element={<Grid/>} />
          <Route exact path="/Practica" element={<Practica/>} />
          <Route exact path="/Page" element={<Page/>} />
    </Routes>
  );
}

export default App;
