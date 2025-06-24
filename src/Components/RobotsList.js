import React, { useEffect, useState } from "react";
import Robots from "./Robots";
import image from "../Visuals/AdoptaRobots.png"; 

const RobotsList = () => {
  const [robots, setRobots] = useState([]);

  useEffect(() => {
    fetch(
      "https://gist.githubusercontent.com/josejbocanegra/aa5fb56863c326ebb3d558f8a225d223/raw/5c55db5012e5fc24862e05847ff1f2927aea11db/robots.json"
    )
      .then((res) => res.json())
      .then((data) => setRobots(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h2>Adopta un robot con Robot lovers!!</h2>
      <img
        src={image}
        alt="Adopta Robots"
        style={{ width: "100%", height: "auto", borderRadius: "8px", marginBottom: "20px" }}
      />
      <table style={{ width: "100%", borderCollapse: "collapse" }}>
        <thead style={{ backgroundColor: "#e0e0e0" }}>
          <tr>
            <th style={{ padding: "10px", border: "1px solid #ccc" }}>ID</th>
            <th style={{ padding: "10px", border: "1px solid #ccc" }}>Nombre</th>
            <th style={{ padding: "10px", border: "1px solid #ccc" }}>Modelo</th>
            <th style={{ padding: "10px", border: "1px solid #ccc" }}>Fabricante</th>
            <th style={{ padding: "10px", border: "1px solid #ccc" }}>Acción</th>
          </tr>
        </thead>
        <tbody>
          {robots.map((robot, index) => (
            <Robots key={index} robot={robot} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default RobotsList;
