import { useEffect } from 'react';
import Counter from "./components/Counter"
import { Routes, Route } from 'react-router-dom';

function App() {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (location.pathname === '/' && !window.location.hash) {
      navigate('/');
    }
  }, [location, navigate]);

  return (
    <>
     <Routes>
      <Route path="/" element={<Counter />} />
      <Route path="/counter" element={<Counter />} />
     </Routes>
    </>
  )
}
export default App
