import "./newuser.css";
import { useState, useEffect } from "react";

export default function NewUser() {
  const [{nombre,apellido,email,cc,area,salario}, setData] = useState({
    nombre: "",
    apellido: "",
    email: "",
    cc: "",
    area: "",
    salario: "",
  });

  const handleSubmitForm = (e) => {
    e.preventDefault();

    setData({
      nombre: e.target,
      apellido: e.target,
      email: e.target,
      cc: e.target,
      area: e.target,
      salario: e.target
    });

    console.log(nombre.nombre);
  };
  return (
    <div className="newUser">
      <h1 className="newUSerTittle">Nuevo usuario</h1>
      <form 
            onSubmit={handleSubmitForm}
            className="newForm"
          >
  
        <div className="newItem">
          <label>Nombres</label>
          <input type="text" placeholder="Nombres" value={nombre} />
        </div>
        <div className="newItem">
          <label>Apellidos</label>
          <input type="text" placeholder="Apellidos" value={apellido} />
        </div>
        <div className="newItem">
          <label>Fecha de nacimiento</label>
          <input type="date" />
        </div>
        <div className="newItem">
          <label>Email</label>
          <input type="email" placeholder="email" value={email} />
        </div>
        <div className="newItem">
          <label>Numero de docuemento</label>
          <input type="number" placeholder="CC" value={cc} />
        </div>
        <div className="newItem">
          <label>Area </label>
          <input type="number" placeholder="Area" value={area} />
        </div>
        <div className="newItem">
          <label>Salario</label>
          <input type="number" placeholder="salario" value={salario} />
        </div>
        <div className="newItem">
          <label>Estado</label>
          <select className="Estate" name="active" id="active">
            <option value="Activo">Activo</option>
            <option value="Inactivo">Inactivo</option>
          </select>
        </div>
        <button className="newButton" type="submit" value="Crear">
          Crear
        </button>
      </form>
    </div>
  );
}
