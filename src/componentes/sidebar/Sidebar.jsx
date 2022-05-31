import "./sidebar.css"
import HomeIcon from '@mui/icons-material/Home';
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';
import AddIcon from '@mui/icons-material/Add';
import PersonSearchIcon from '@mui/icons-material/PersonSearch';
import ManageSearchIcon from '@mui/icons-material/ManageSearch';
export default function Sidebar() {
  return (
    <div className="sidebar">
        <div className="sidebarWrapper">
          <div className="sidebarMenu">
            <h3 className="sidebarTittle">Dashboard</h3>
            <ul className="sidebarList">
              <li className="sidebarListItem ">
              <HomeIcon/>
              Inicio
              </li>
               <li className="sidebarListItem ">
              <PersonAddAltIcon/>
              Añadir usuario
              </li>
               <li className="sidebarListItem ">
              <AddIcon/>
              Añadir Area
              </li>
               <li className="sidebarListItem ">
              <PersonSearchIcon/>
              Buscar Empleado
              </li>
               <li className="sidebarListItem ">
              <ManageSearchIcon/>
              Buscar Area
              </li>
            </ul>
          </div>
        </div>
    </div>
  )
}
