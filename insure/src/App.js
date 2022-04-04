import { BrowserRouter, Routes, Route } from "react-router-dom";
import InputTest from "./components/InputTest";
import Listcomponents from "./components/Listcomponents";





function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/test" element={<InputTest></InputTest>}></Route>
        <Route path="/test2" element={<Listcomponents></Listcomponents>}></Route>
      </Routes>
      
    </BrowserRouter>
  )
}

export default App;
