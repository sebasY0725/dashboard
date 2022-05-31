import Sidebar from "./componentes/sidebar/Sidebar";
import Topbar from "./componentes/topbar/Topbar";
import "./app.css";
function App() {
  return (
    <div>
      <Topbar />
      <div className="container">
        <Sidebar />
        <div className="others"> otros </div>
      </div>
    </div>
  );
}

export default App;
