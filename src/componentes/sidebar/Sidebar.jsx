import "./sidebar.css";
import HomeIcon from "@mui/icons-material/Home";
import PersonAddAltIcon from "@mui/icons-material/PersonAddAlt";
import AddIcon from "@mui/icons-material/Add";
import PersonSearchIcon from "@mui/icons-material/PersonSearch";
import ManageSearchIcon from "@mui/icons-material/ManageSearch";
import { Link } from "react-router-dom";
export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <h3 className="sidebarTittle">Dashboard</h3>
          <ul className="sidebarList">
            <Link to="/">
              <li className="sidebarListItem ">
                <HomeIcon />
                Inicio
              </li>
            </Link>
            <Link to="/newUser">
              <li className="sidebarListItem ">
                <PersonAddAltIcon />
                Añadir Usuario
              </li>
            </Link>
            <Link to="/newArea">
              <li className="sidebarListItem ">
                <AddIcon />
                Añadir Area
              </li>
            </Link>
            <Link to="/searchBarU">
              <li className="sidebarListItem ">
                <PersonSearchIcon />
                Buscar Empleado
              </li>
            </Link>
            <Link to="/searchBarA">
              <li className="sidebarListItem ">
                <ManageSearchIcon />
                Buscar Area
              </li>
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
}
