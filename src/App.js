import React from 'react';
import './App.css';
import { Routes, Route} from "react-router-dom";
import Grid from './Componets/Grid';
import Practica from './Componets/Practica';

function App() {
  return (
    <Routes>
          <Route exact path="/Grid" element={<Grid/>} />
          <Route exact path="/Practica" element={<Practica/>} />
    </Routes>
  );
}

export default App;
