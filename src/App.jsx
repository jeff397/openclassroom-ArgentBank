import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header/header";

import Home from "./pages/Home/home";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
