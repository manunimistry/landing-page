
//import { Route } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Product from './components/Product';
import {BrowserRouter as Router,  Route ,Routes } from 'react-router-dom';
import Solutions from './components/Solutions';
import Resources from './components/Resources';
import Pricing from './components/Pricing';

function App() {
  return (
    <Router>
    <div className="container">
      
      <Navbar/>
      <Routes>
          
          <Route path="/" element={<Home />} />
          <Route path="/product" element={<Product />} />
          <Route path='/solutions' element={<Solutions />}></Route>
          <Route path='/resources' element={<Resources />} />
          <Route path='/pricing' element={<Pricing  />} />
        </Routes>
      
    </div>
    </Router>
  );
}

export default App;
