import './App.css';

import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';

import Sidebar from './sidebar';
import Profile from "./profile";
import Articles from "./articles";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <BrowserRouter>
    <Sidebar />
      <div style={{ marginLeft: "250px", padding: "20px", flex: 1 }}>
        <Routes>
          <Route path="/" element={<Navigate to="/profile" />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/articles" element={<Articles />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;