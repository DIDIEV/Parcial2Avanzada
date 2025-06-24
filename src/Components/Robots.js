import React, { useState } from "react";
import { FormattedDate } from "react-intl";

const Robots = ({ robot }) => {
    const [mostrarDetalle, setMostrarDetalle] = useState(false);

  const toggleDetalle = () => {
    setMostrarDetalle(!mostrarDetalle);
  };

  return (
    <>
      <tr>
        <td>{robot.id}</td>
        <td>{robot.nombre}</td>
        <td>{robot.modelo}</td>
        <td>{robot.fabricante}</td>
        <td>
          <button
            onClick={toggleDetalle}
            style={{
              padding: "6px 12px",
              backgroundColor: "#4CAF50",
              color: "white",
              border: "none",
              borderRadius: "4px",
              cursor: "pointer"
            }}
          >
            {mostrarDetalle ? "Ocultar" : "Ver más"}
          </button>
        </td>
      </tr>

      {mostrarDetalle && (
        <tr>
          <td colSpan="5">
            <div style={{ display: "flex", alignItems: "center", gap: "16px", padding: "10px", backgroundColor: "#f9f9f9", border: "1px solid #ddd", borderRadius: "6px" }}>
              <img
                src={robot.imagen}
                alt={robot.nombre}
                style={{ width: "120px", height: "auto", borderRadius: "8px" }}
              />
              <p style={{ marginBottom: "8px", fontWeight: "bold", color: "#333" }}>FECHA DE CREACIÓN: <span style={{ fontWeight: "normal", color: "#555" }}>{robot.añoFabricacion}</span></p>
              <p style={{ marginBottom: "8px", fontWeight: "bold", color: "#333" }}>CAPACIDAD DE PROCESAMIENTO: <span style={{ fontWeight: "normal", color: "#555" }}>{robot.capacidadProcesamiento}</span></p>
              <p style={{ margin: 0, fontWeight: "bold", color: "#333" }}>HUMOR: <span style={{ fontWeight: "normal", color: "#555" }}>{robot.humor}</span></p>

            </div>
          </td>
        </tr>
      )}
    </>
  );
};

export default Robots;
