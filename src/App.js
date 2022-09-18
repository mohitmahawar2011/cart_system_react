import logo from './logo.svg';
import './App.css';
import Aryan from './Components/Aryan';
import Header from './Components/Header';
import { BrowserRouter, Route ,Routes } from 'react-router-dom';
import Cart from './Components/Cart';
import Home from './Components/Home';


function App() {
  return (
    <>
    <BrowserRouter>
    <Header />
    
    <Routes>
      <Route path="/"
        element={<Home />} />
        
      <Route path="/cart" 
        element={<Cart />}
      />
      </Routes>
    
    </BrowserRouter>
    </>
  );
}

export default App;
