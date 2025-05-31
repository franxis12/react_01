import Counter from "./components/Counter"
import { Routes, Route } from 'react-router-dom';

function App() {

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
