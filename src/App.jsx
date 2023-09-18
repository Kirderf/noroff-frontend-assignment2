import { BrowserRouter, Route, Routes } from "react-router-dom";
import Profile from "./pages/profile";
import Login from "./pages/login";
import Translation from "./pages/translation";
import Error from "./pages/error";
import Header from "./components/header/Header";

import { useEffect } from "react";

import { useSelector, useDispatch } from "react-redux";

function App() {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser && storedUser !== "undefined") {
      dispatch(setUser(JSON.parse(storedUser)));
    }
  }, []);

  return (
    <BrowserRouter>
      <Header />
      {!user.username ? (
        <Login />
      ) : (
        <Routes>
          <Route path="/" element={<Translation />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="*" element={<Error code={404} />} />
        </Routes>
      )}
    </BrowserRouter>
  );
}

export default App;
