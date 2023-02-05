import {BrowserRouter, Routes, Route} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './componenets/NavBar';
import Home from './pages/Home'
import Login from './pages/Login';
import Signup from './pages/Signup';
import ProductPage from './pages/ProductPage';
import CategoryPage from './pages/Category';
import About from './pages/About';
import Footer from './componenets/Footer';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route index element={<Home/>}/>
          <Route path="*" element={<Home/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/signup" element={<Signup/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/products" element= {<ProductPage/>}/>
          <Route path='/category' element={<CategoryPage/>}/>
        </Routes>
        <br/>
        
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
