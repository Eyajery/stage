import {Route, Link, Routes} from 'react-router-dom';
import Dashboard from "./components/Menu";
import Login from "./components/Login";
import Register from "./components/Register";
export default function App() {
  return (
    <div>
      <div>
       

        <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="/" element={<Login />} />
          <Route path="/menu" element={<Dashboard/>} />
        </Routes>
      </div>
    </div>
  );
}