import "./App.css";
import Logo from "./Imagenes/logoCheckList.png";
import ListaDeTareas from "./Componentes/ListaDeTareas";

function App() {
  return (
    <div className="App">
      <div className="logo-bienvenida">
        <img src={Logo} alt="Logo Check List" className="Logo" />
        <h1>Check List con React</h1>
      </div>

      <div className="lista-de-tareas">
        <ListaDeTareas />
      </div>
    </div>
  );
}

export default App;
