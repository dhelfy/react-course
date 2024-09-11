import "./styles/styles.css"
import Posts from "./pages/Posts"
import About from "./pages/About";
import NoPage from "./pages/NoPage";
import NavBar from "./components/UI/NavBar/NavBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />

        <Routes>
          <Route path="posts" element={<Posts />} />
          <Route path="about" element={<About />} />
          <Route path="*" element={<NoPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;