import {Routes, Route} from 'react-router-dom'
// import { useState } from 'react';
import Register from './components/Register'
import Login from './components/Login'
function App() {

  return (
    <Routes>
      <Route path='/register' element={<Register />}/>
      <Route path='/login' element={<Login />}/>
    </Routes>
  );
}

export default App;
