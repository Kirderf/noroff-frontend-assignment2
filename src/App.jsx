import ReactDOM from 'react-dom/client';
import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";
import Profile from './pages/profile';
import Login from './pages/login';
import Translation from './pages/translation';
import Error from './pages/error';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/translate"
          element={<Translation/>}/>
          <Route
           path= "/login"
           element={<Login/>}
           /> 
           <Route
           path= "/profile"
           element={<Profile/>}
           /> 
           {/* TODO NAVIGATE TO LOGIN */}
           <Route
           path= "/"
           element={<p>ll</p>}
           /> 
           <Route
           path= "/error"
           element={<Error/>}
           /> 
      </Routes>
  </BrowserRouter>
  )
}

export default App
