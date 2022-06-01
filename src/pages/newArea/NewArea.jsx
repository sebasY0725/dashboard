import "./newarea.css"

export default function NewArea() {
  return (
    <div className='newArea'>
        <h1 className="NewAreaTittle">Nueva Area</h1>
        <form className='NewAreaForm'>
             <div className="newItem">
                <label>Nombre</label>
                <input type="text" placeholder="Nombre" />
            </div>
             <div className="newItem">
                <label>Codigo</label>
                <input type="number" placeholder="Codigo" />
            </div>
             <div className="newItem">
                <label>Lider</label>
                <input type="number" placeholder="Lider" />
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
