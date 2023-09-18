import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Profile from "./pages/profile";
import Login from "./pages/login";
import Translation from "./pages/translation";
import Error from "./pages/error";
import Header from "./components/header/Header";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/translate" element={<Translation />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<Profile />} />
        {/* TODO NAVIGATE TO LOGIN */}
        <Route path="/" element={<Navigate to={"/login"}/>} />
        <Route path="*" element={<Error />} />
        <Route path="/error" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
