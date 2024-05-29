import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Topbar from "./componets/topbar/Topbar";
import Login from "./componets/login/Login";
import Register from "./componets/register/Register";
import Profile from "./componets/profile/Profile";

function App() {
  return (
    <div>
    <BrowserRouter>
      {/* <Topbar/> */}
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/register" element={<Register/>} />
        {/* <Route exact path="/profile/:username" element={<Profile/>} /> */}
      </Routes>



    </BrowserRouter>

      
    </div>
  );
}

export default App;
