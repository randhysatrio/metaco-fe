import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import InsertResult from './pages/InsertResult';
import Leaderboard from './pages/Leaderboard';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/leaderboard" element={<Leaderboard />} />
        <Route path="/insert-result" element={<InsertResult />} />
      </Routes>
      <ToastContainer />
    </BrowserRouter>
  );
}

export default App;
