import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";

import Login from "./componets/login/Login";
import Register from "./componets/register/Register";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
