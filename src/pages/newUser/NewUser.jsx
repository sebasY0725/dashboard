import "./newuser.css"

export default function newUser() {
  return (
    <div className="newUser">
        <h1 className="newUSerTittle">Nuevo usuario</h1>
        <form className="newForm">
            <div className="newItem">
                <label>Nombres</label>
                <input type="text" placeholder="Nombres" />
            </div>
             <div className="newItem">
                <label>Apellidos</label>
                <input type="text" placeholder="Apellidos" />
            </div>
             <div className="newItem">
                <label>Fecha de nacimiento</label>
                <input type="date" />
            </div>
             <div className="newItem">
                <label>Email</label>
                <input type="email" placeholder="email" />
            </div>
            <div className="newItem">
                <label>Numero de docuemento</label>
                <input type="number" placeholder="CC" />
            </div>
               <div className="newItem">
                <label>Area </label>
                <input type="number" placeholder="Area" />
            </div>
               <div className="newItem">
                <label>Salario</label>
                <input type="number" placeholder="salario" />
            </div>
            <div className="newItem">
                <label>Estado</label>
                <select className="Estate" name="active" id="active">
                    <option value="Activo">Activo</option>
                    <option value="Inactivo">Inactivo</option>
                </select>
        
            </div>
            <button className="newButton">Crear</button>
           
            
        </form>
    </div>
  )
}
