import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './App.css';

// 레이아웃
import Layout from './components/Layout';

// 페이지들
import Home from './pages/Home';
import DataLab from './pages/DataLab';
import Indexes from './pages/Indexes';
import About from './pages/About';
import Research from './pages/Research';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/research" element={<Research />} />

          <Route path="/datalab" element={<DataLab />} />
          <Route path="/indexes" element={<Indexes />} />

          <Route path="/about" element={<About />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
