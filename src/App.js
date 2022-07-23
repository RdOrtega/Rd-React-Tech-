import { DataContextProvider } from "./Components/DataContext/DataContext";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

//import de las paginas...............
import Home from "./pages/Home/Home";
import Marcas from "./pages/Marca/Marca";
import Details from './pages/Details/Details';
import Products from './pages/Products/Products';
import Facturar from "./pages/Facturar/Facturar";
import About from './pages/About/About';

//import del componente iconCart..... 
import ShoppingCart from './pages/ShoppinCart/ShoppinCart';




function App() {

  return (
    <Router>
      <DataContextProvider>
      <div className="App">
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/marca/:marca' element={<Marcas />} />
          <Route path='/products' element={<Products />} />
          <Route path='/detail/:id' element={<Details />} />
          <Route path='/about' element={<About />} />
          <Route path='/shoppingCart' element={<ShoppingCart />} />
          <Route path='/facturar' element={<Facturar />} />
        </Routes>
      </div>
      </DataContextProvider>
    </Router>
  );
}

export default App;
