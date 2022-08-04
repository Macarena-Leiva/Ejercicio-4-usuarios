
import './App.css';
import { Usuarios } from './componentes/Usuarios';
import { Routes, Route } from "react-router-dom";
import {ItemDetailContainer} from './componentes/ItemDetailContainer'



function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Usuarios />} />
        <Route path="/item/:id" element={<ItemDetailContainer />} />     
      </Routes>
    </div>
  );
}

export default App;
