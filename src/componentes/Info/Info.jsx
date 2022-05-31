import "./info.css"

export default function Info() {
  return (
    <div className="info">
        <div className="lastInfo">
            <span className="NameTitle"> aqui va su name </span>
            <div className="NumberContainer">
                <span className="Number">aqui va su sueldo</span>
            </div>
        </div>
        <div className="lastInfo">
            <span className="NameTitle"> aqui va su name de area </span>
            <div className="NumberContainer">
                <span className="Number">aqui va su codigo</span>
            </div>
        </div>
    </div>
  )
}
