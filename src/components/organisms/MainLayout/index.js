import React from "react";
import Sidebar from "components/molecules/Sidebar";
import BaseHeader from "components/atoms/BaseHeader";
import MainLayoutContainers from "../MainLayoutContainers";
import "./styles.scss";

const MainLayout = ({ showHeader = true }) => {
  const options = [
    {
      title: "Nuevo Ejercicio",
      options: [
        "Generar el nuevo Ejercicio fiscal para formular el Presupuesto.",
      ],
    },
    {
      title: "Anteproyecto",
      options: ["Administrar la información de Anteproyectos."],
    },
    {
      title: "Clasificadores Primarios",
      options: ["Administrar la información de los Clasificadores Primarios."],
      selects: [
        "Clasificador Institucional",
        "Estructura Programática",
        "Recursos por Rubro",
        "Clasificador Institucional",
        "Gastos por Objeto",
        "Fuentes de Financiamiento",
      ],
    },
    {
      title: "Clasificadores Agregados",
      options: ["Administrar la información de los clasificadores Agregados."],
      selects: [
        "Recursos por Origen y Procedencia",
        "Recursos por Carácter Económico",
        "Gastos por Finalidad y Función",
        "Gastos por Carácter Económico",
      ],
    },
    {
      title: "Reglas Presupuestarias",
      options: [
        "Administrar la información de Reglas Presupuestarias para la etapa de Formulación y Programación.",
      ],
    },
    {
      title: "Categorías Programáticas",
      options: ["Administrar la información de Categorías Programáticas."],
    },
    {
      title: "Unidades Ejecutadoras",
      options: ["Administrar la información de Unidades Ejecutadoras."],
    },
    {
      title: "Causas de Desvíos",
      options: [
        "Administrar la información de las Causas Operativas, Financieras y conclusiones.",
      ],
      selects: ["Financieras", "Operativas", "Conclusiones"],
    },
    {
      title: "Tablas Referenciales",
      options: [
        "Administrar la información de las Tablas Referenciales del Módulo Presupuesto.",
      ],
      selects: [
        "Unidades de Medida",
        "Gastos Prioritarios",
        "Motivos Reglas Presupuestarias",
      ],
    },
  ];
  return (
    <div className="desktop-main-layout-container">
      <Sidebar />
      <div className="right-layout-container">
        {showHeader && <BaseHeader />}
        <div className="right-layout-content" id="right-layout-content">
          <h3 className="h3">Configuración</h3>
          <div className="rightContainer">
            {options.map((option, index) => (
              <MainLayoutContainers
                key={index}
                title1={option.title}
                title2={option.options}
                title3={option.selects}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainLayout;
