import Sidebar from "./componentes/sidebar/Sidebar";
import Topbar from "./componentes/topbar/Topbar";
import NewUser from "./pages/newUser/NewUser";

import "./app.css";
import Home from "./pages/home/Home";
import NewArea from "./pages/newArea/NewArea";
import { Routes, BrowserRouter, Route } from "react-router-dom";
import SearchBarU from "./componentes/SearchBar/SearchBarU";
import SearchBarA from "./componentes/SearchBar/SearchBarA";

function App() {
  return (
    <BrowserRouter>
      <div className="app">
      <Topbar />
        <div className="contenedor">
          <Sidebar />
          <div className="container">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/newUser" element={<NewUser />} />
              <Route path="/newArea" element={<NewArea />} />
              <Route path="/searchBarU" element={<SearchBarU />} />
              <Route path="/searchBarA" element={<SearchBarA />} />
            </Routes>
          </div>
        </div>
       
      </div>
    </BrowserRouter>
  );
}

export default App;
