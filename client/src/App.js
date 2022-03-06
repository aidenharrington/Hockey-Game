import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Setup from './components/Setup';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/setup" element={<Setup />} />
          <Route path="/question" element={<Question />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
