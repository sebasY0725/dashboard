import Sidebar from "./componentes/sidebar/Sidebar";
import Topbar from "./componentes/topbar/Topbar";
import "./app.css";
import Home from "./pages/home/Home";
function App() {
  return (
    <div>
      <Topbar />
      <div className="container">
        <Sidebar />
        <Home/>
      </div>
    </div>
  );
}

export default App;
