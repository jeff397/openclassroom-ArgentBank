import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./pages/Home/home";
import "./index.css";
import Footer from "./components/Footer/Footer";
import SignIn from "./pages/SignIn/SignIn";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<SignIn />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
