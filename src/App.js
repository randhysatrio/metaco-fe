import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Home from './pages/Home';
import InsertResult from './pages/InsertResult';
import Leaderboard from './pages/Leaderboard';
import Team from './pages/Team';
import DeleteResult from './pages/DeleteResult';
import Explorer from './pages/Explorer';
import NotFound from './pages/NotFound';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/leaderboard" element={<Leaderboard />} />
        <Route path="/explorer" element={<Explorer />} />
        <Route path="/team/:id" element={<Team />} />
        <Route path="/insert-result" element={<InsertResult />} />
        <Route path="/delete-result" element={<DeleteResult />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <ToastContainer />
    </BrowserRouter>
  );
}

export default App;
