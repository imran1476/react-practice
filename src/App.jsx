import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import AllApps from './pages/AllApps';
import AppDetails from './pages/AppDetails';
import Installation from './pages/Installation';
import ErrorPage from './pages/ErrorPage';

function App() {
  return (
    <Router>
      {/* Toast notifications handler */}
      <Toaster position="bottom-center" reverseOrder={false} />
      
      <div className="flex flex-col min-h-screen">
        <Navbar />
        
        <main className="flex-grow bg-slate-50/50">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/apps" element={<AllApps />} />
            <Route path="/app/:id" element={<AppDetails />} />
            <Route path="/installation" element={<Installation />} />
            <Route path="*" element={<ErrorPage />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;