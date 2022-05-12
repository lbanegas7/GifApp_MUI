import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import { Home } from './containers/Home'
import './App.css';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='*'  element={<Navigate replace to='/' />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
