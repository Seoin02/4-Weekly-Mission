import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Shared from '../pages/Shared';
import Folder from '../pages/Folder';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shared" element={<Shared />} />
        <Route path="/folder" element={<Folder />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
