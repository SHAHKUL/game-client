import "./App.css";
import{BrowserRouter,Routes,Route} from 'react-router-dom'

import Navbar from "./Navbar";
import Login from "./component/Login";
import Register from "./component/Register";

function App() {
  return (
    <BrowserRouter>
    <div className="App">

      <Routes>
    
        <Route path="/home" element={<Navbar/>} />
        <Route path="/" element={<Login/>} />
        <Route path="/register" element={<Register/>} />
      </Routes>

    </div>
    </BrowserRouter>
  );
}

export default App;
