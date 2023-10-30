
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Regestration from './compo/Regestration';
import Login from './compo/Login';
import Home from './compo/Home';


function App() {
  return (
    <div className="App">
     <BrowserRouter>
     <Routes>
      <Route path='/' element={<Regestration />} />
      <Route path='/login' element={<Login />} />
      <Route path='/home' element={<Home />} />

      
     </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
