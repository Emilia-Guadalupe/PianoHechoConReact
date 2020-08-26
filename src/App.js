import React, { useState } from "react";
import "./styles.css";

const notas = [
  {
    nombre: "DO",
    link: require("./notes/do.wav"),
    tieneSostenido: true
  },
  {
    nombre: "RE",
    link: require("./notes/re.wav"),
    tieneSostenido: true
  },
  {
    nombre: "MI",
    link: require("./notes/mi.wav")
  },
  {
    nombre: "FA",
    link: require("./notes/fa.wav"),
    tieneSostenido: true
  },
  {
    nombre: "SOL",
    link: require("./notes/sol.wav"),
    tieneSostenido: true
  },
  {
    nombre: "LA",
    link: require("./notes/la.wav"),
    tieneSostenido: true
  },
  {
    nombre: "SI",
    link: require("./notes/si.wav")
  }
];

function App() {
  const Key = ({ estaSonando, nota, handleClick }) => {
    return (
      <>
        <div
          className={`nota ${estaSonando === nota.nombre && "suena"}`}
          onClick={() => handleClick(nota)}
        >
          {nota.tieneSostenido && <div className="negra"></div>}
        </div>
      </>
    );
  };

  const [estaSonando, setEstaSonando] = useState(null);

  const handleClick = (nota) => {
    setEstaSonando(nota.nombre);
    const sonido = new Audio(nota.link);
    sonido.play();
    setTimeout(() => {
      setEstaSonando("");
    }, 300);
  };

  return (
    <div className="App">
      <div className="titulo">
        <h1>Piano con React</h1>
        <h2>
          <span>⭐️</span> Hecho en el Workshop de ADA <span>⭐️</span>
        </h2>
        <h3>Por Emi Guadalupe</h3>
        <div class="esta-sonando">
          {estaSonando && `Está sonando ${estaSonando}`}
        </div>
      </div>
      <div className="contenedor">
        {notas.map((nota, i) => (
          <Key
            key={i}
            estaSonando={estaSonando}
            nota={nota}
            handleClick={handleClick}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
