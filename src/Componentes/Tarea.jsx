import React from "react";
import "../Estilos/Tarea.css";
import { AiOutlineClose } from "react-icons/ai";

function Tarea({ id, texto, completada, completarTarea, eliminarTarea }) {
  return (
    <div
      className={
        completada ? "tarea-contenedor completada" : "tarea-contenedor"
      }
    >
      <div className="tarea-texto" onClick={() => completarTarea(id)}>
        {texto}
      </div>
      <div className="tarea-contenedor-icono" onClick={() => eliminarTarea(id)}>
        <AiOutlineClose className="tarea-icono" />
      </div>
    </div>
  );
}

export default Tarea;
