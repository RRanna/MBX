// App.jsx ou Home.jsx
import React, { useEffect } from "react";

function Home() {
  useEffect(() => {
    const script1 = document.createElement("script");
    script1.src =
      "https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js";
    script1.async = true;
    document.body.appendChild(script1);

    const script2 = document.createElement("script");
    script2.src =
      "https://cdn.jsdelivr.net/npm/three@0.128.0/examples/js/controls/OrbitControls.js";
    script2.async = true;
    document.body.appendChild(script2);
  }, []);

  return (
    <div
      className="container"
      style={{
        fontFamily: "sans-serif",
        backgroundColor: "#fff",
        padding: "20px",
        margin: "20px auto",
        borderRadius: "8px",
        maxWidth: "900px",
      }}
    >
      <h1 style={{ textAlign: "center", color: "#0056b3" }}>
        Planejador de Carga - MVP
      </h1>

      {/* Seções de formulário e visualização */}
      {/* Aqui você insere os mesmos campos que estavam no HTML estático, agora como JSX */}

      {/* Exemplo de um campo */}
      <div
        className="form-section"
        style={{
          marginBottom: "25px",
          padding: "20px",
          backgroundColor: "#f9f9f9",
          borderRadius: "8px",
          border: "1px solid #ddd",
        }}
      >
        <h2 style={{ textAlign: "center", color: "#0056b3" }}>
          1. Definir Espaço de Carga (Contêiner/Caminhão)
        </h2>
        <div
          className="form-grid"
          style={{
            display: "grid",
            gap: "15px",
            gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
          }}
        >
          <div>
            <label htmlFor="container-length">Comprimento (cm):</label>
            <input
              type="number"
              id="container-length"
              defaultValue={1200}
              min="1"
            />
          </div>
          <div>
            <label htmlFor="container-width">Largura (cm):</label>
            <input
              type="number"
              id="container-width"
              defaultValue={235}
              min="1"
            />
          </div>
          <div>
            <label htmlFor="container-height">Altura (cm):</label>
            <input
              type="number"
              id="container-height"
              defaultValue={239}
              min="1"
            />
          </div>
          <div>
            <label htmlFor="container-max-weight">Peso Máximo (kg):</label>
            <input
              type="number"
              id="container-max-weight"
              defaultValue={25000}
              min="0"
            />
          </div>
        </div>
      </div>

      {/* Continuação: adicionar itens, botões, visualização 3D etc. */}
      {/* Você pode continuar convertendo o restante do HTML para JSX da mesma forma */}

      <div
        id="visualization"
        style={{
          border: "1px solid #ccc",
          minHeight: "400px",
          borderRadius: "5px",
          overflow: "hidden",
          marginTop: "20px",
        }}
      >
        <p style={{ textAlign: "center", paddingTop: "50px", color: "#666" }}>
          (A visualização 3D aparecerá aqui após o cálculo)
        </p>
      </div>

      <pre
        id="report-output"
        style={{
          backgroundColor: "#e9ecef",
          padding: "15px",
          borderRadius: "5px",
          border: "1px solid #ced4da",
          whiteSpace: "pre-wrap",
          wordWrap: "break-word",
          fontFamily: "monospace",
          fontSize: "0.9em",
          maxHeight: "400px",
          overflowY: "auto",
          marginTop: "20px",
        }}
      >
        (O relatório do plano de carga aparecerá aqui)
      </pre>
    </div>
  );
}

export default Home;
