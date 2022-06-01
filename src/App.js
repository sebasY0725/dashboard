import Sidebar from "./componentes/sidebar/Sidebar";
import Topbar from "./componentes/topbar/Topbar";
import NewUser from "./pages/newUser/NewUser";

import "./app.css";
import Home from "./pages/home/Home";

function App() {
  return (
    <div>
      <Topbar />
      <div className="container">
        <Sidebar />
        {/* <Home /> */}
        <NewUser />
      </div>
    </div>
  );
}

export default App;
