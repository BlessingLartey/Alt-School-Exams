//import { useEffect } from 'react';
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import Econn from "./components/Econn";
import Nav from "./components/Nav"

function App() {
  //const { refreshUser } = useAuth();
  //useEffect(() => {
    //refreshUser()
  //}, []);

  return (
    //<ErrorBoundary FallbackComponent={ErrorHandler}>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/econn" element={<Econn />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp/>} />
        </Routes>
      </Router>
    //</ErrorBoundary>
  );
}

export default App;

