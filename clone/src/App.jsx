import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './App.css';

// 레이아웃
import Layout from './components/Layout';

// 페이지들
import Home from './pages/Home';
import Insights from './pages/Insights';
import InsightDetail from './pages/InsightsDetail';
import QuarterlyTrends from './pages/QuarterlyTrends';
import Index from './pages/Index';
import About from './pages/About';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/insights" element={<Insights />} />
          <Route path="/insights/:id" element={<InsightDetail />} />

          <Route path="/trends" element={<QuarterlyTrends />} />
          <Route path="/index" element={<Index />} />

          <Route path="/about" element={<About />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
