import Login from './pages/Login';
import Register from './pages/Register';
import Otp from './pages/Otp';
import Error from './pages/Error';
import Headers from './components/Headers';
import { Routes, Route } from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';

import Chatbot from './pages/Chatbot';
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  
  return (
    <>
      <Headers />
      <Routes>
        
        <Route path='/' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/chatbot' element={<Chatbot/>} />
        <Route path='/user/otp' element={<Otp />} />
        <Route path='*' element={<Error />} />
      </Routes>
    </>
  );
}

export default App;

