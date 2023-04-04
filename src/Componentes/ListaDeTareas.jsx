import React from "react";
import "../Estilos/ListaDeTareas.css";
import Formulario from "./Formulario";
import Tarea from "./Tarea";
import { useState } from "react";

function ListaDeTareas() {
  const [tareas, setTareas] = useState([]);

  const agregarTarea = (tarea) => {
    if (tarea.texto !== "") {
      const tareasActualizadas = [tarea, ...tareas];
      setTareas(tareasActualizadas);
    }
  };

  const eliminarTarea = (id) => {
    const tareasActualizadas = tareas.filter((tarea) => tarea.id !== id);
    setTareas(tareasActualizadas);
  };

  const completarTarea = (id) => {
    const tareasActualizadas = tareas.map((tarea) => {
      if (tarea.id === id) {
        tarea.completada = !tarea.completada;
      }
      return tarea;
    });
    setTareas(tareasActualizadas);
  };

  return (
    <>
      <Formulario onSubmit={agregarTarea} />

      <div className="tareas-lista-contenedor">
        {tareas.map((tarea) => (
          <Tarea
            texto={tarea.texto}
            completada={tarea.completada}
            key={tarea.id}
            id={tarea.id}
            eliminarTarea={eliminarTarea}
            completarTarea={completarTarea}
          />
        ))}
      </div>
    </>
  );
}

export default ListaDeTareas;
