import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from './pages/Layout';
import Home from './pages/Home';
import Ideas from './pages/Ideas';
import Form from './pages/Form';
import Details from './pages/Details';
import Login from './pages/Login';
import Register from './pages/Register';


function App() {
  return (

    <BrowserRouter>
      <Routes>
        <Route path="/" Component={Layout}>
          <Route path='home' Component={Home} />
          <Route path='ideas' Component={Ideas} />
          <Route path='pitch' Component={Form} />
          <Route path='ideas/:ideaname/:id' Component={Details} />
          <Route path='login' Component={Login} />
          <Route path='register' Component={Register} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
