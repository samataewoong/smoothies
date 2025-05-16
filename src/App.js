import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import './App.css';
import Home from "./pages/Home";
import Create from "./pages/Create";
import Update from "./pages/Update";

function App() {
  return (
    <BrowserRouter>
      <nav>
        <h1>Supa Smoothies1</h1>
        <Link to="/">Home</Link>&nbsp;
        <Link to="/create">Create New Smooothie</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/create" element={<Create/>}></Route>
        <Route path="/:id" element={<Update/>}> </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
