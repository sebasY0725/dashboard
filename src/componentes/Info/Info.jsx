import "./info.css";

export default function Info() {
  return (
    <div>
      <div className="info">
        <div className="lastInfo">
          <span className="NameTitle"> Total de usuarios </span>
          <div className="NumberContainer">
            <span className="Number">aqui va el numero</span>
          </div>
        </div>
        <div className="lastInfo">
          <span className="NameTitle"> Total de areas </span>
          <div className="NumberContainer">
            <span className="Number">aqui va el numero</span>
          </div>
        </div>
        <div className="lastInfo">
          <span className="NameTitle"> Cantidad de usuario por area </span>
          <div className="NumberContainer">
            <span className="Number">aqui va el numero</span>
          </div>
        </div>
      </div>
      <ul>
          <li>
              Lider 1 
          </li>
      </ul>
    </div>
  );
}
