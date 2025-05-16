import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import './App.css';
import Home from "./pages/Home";
import Create from "./pages/Create";
import Update from "./pages/Update";

function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <nav>
        <h1>Supa Smoothies1</h1>
        <Link to="/">Home</Link>&nbsp;
        <Link to="/create">Create New Smooothie</Link>
        <a href="https://www.daum.net">다음사이트</a>
        <a href="/smootihes">홈</a> 
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
