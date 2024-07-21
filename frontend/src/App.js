import './App.css';
import Login from './Login';
import SignUp from './SignUp';
import { Route, BrowserRouter, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/login' Component={Login}></Route>
        <Route path='/signup' Component={SignUp}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
