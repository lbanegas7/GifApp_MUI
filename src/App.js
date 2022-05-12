import { Route, Routes, Navigate, HashRouter } from 'react-router-dom';
import { Home } from './containers/Home'
import './App.css';

function App() {
  return (
    <>
      <HashRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='*'  element={<Navigate replace to='/' />} />
        </Routes>
      </HashRouter>
    </>
  );
}

export default App;
