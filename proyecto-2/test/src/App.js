import Navbar from './components/Navbar/Navbar';
import './App.css';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route} from "react-router-dom"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
       <Navbar/>
       <Routes>
        <Route path="/" element={<ItemListContainer greeting="listado de productos"/>}/>
        <Route path="/detail/:productId" element={<ItemDetailContainer/>}/>
        
       </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
