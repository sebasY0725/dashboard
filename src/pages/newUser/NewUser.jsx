import "./newuser.css"

export default function newUser() {
  return (
    <div className="newUser">
        <h1 className="newUSerTittle">Nuevo usuario</h1>
        <form className="newUserForm">
            <div className="newUserItem">
                <label>Nombres</label>
                <input type="text" placeholder="Nombres" />
            </div>
             <div className="newUserItem">
                <label>Apellidos</label>
                <input type="text" placeholder="Apellidos" />
            </div>
             <div className="newUserItem">
                <label>Fecha de nacimiento</label>
                <input type="date" />
            </div>
             <div className="newUserItem">
                <label>Email</label>
                <input type="email" placeholder="email" />
            </div>
            <div className="newUserItem">
                <label>Numero de docuemento</label>
                <input type="number" placeholder="CC" />
            </div>
               <div className="newUserItem">
                <label>Area </label>
                <input type="number" placeholder="Area" />
            </div>
               <div className="newUserItem">
                <label>Salario</label>
                <input type="number" placeholder="salario" />
            </div>
            <div className="newUserItem">
                <label>Estado</label>
                <select className="Estate" name="active" id="active">
                    <option value="Activo">Activo</option>
                    <option value="Inactivo">Inactivo</option>
                </select>
        
            </div>
            <button className="newUserButton">Crear</button>
           
            
        </form>
    </div>
  )
}
