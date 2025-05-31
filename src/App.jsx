import Counter from "./components/Counter"

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
