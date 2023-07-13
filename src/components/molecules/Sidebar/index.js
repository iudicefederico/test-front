import React, { useState } from "react";
import LoginHeader from "components/atoms/LoginHeader";
import { isMobile } from "helpers/Mobile";
import SidebarOptions from "./SidebarOptions";
import { useEffect } from "react";
import "./styles.scss";

const Sidebar = () => {
  const options = [
    {
      title: "Presupuesto",
      options: [
        "Configuración",
        "Formulación Presupuestaria",
        "Modificación Presupuestaria",
        "Programación Física",
        "Deportes",
      ],
    },
    {
      title: "CAS",
      options: ["Configuración"],
    },
    { title: "Planificación", options: ["Configuración"] },
    { title: "Presupuesto", options: ["Configuración"] },
    { title: "Contrataciones", options: ["Configuración"] },
    { title: "Portal", options: ["Configuración"] },
    { title: "Contabilidad", options: ["Configuración"] },
    { title: "Tesorería", options: ["Configuración"] },
    { title: "Bienes Físicos", options: ["Configuración"] },
    { title: "Inversión Pública", options: ["Configuración"] },
    { title: "Crédito Público", options: ["Configuración"] },
    { title: "Ingresos Públicos", options: ["Configuración"] },
    { title: "Recursos Humanos", options: ["Configuración"] },
  ];

  const [activeOption, setActiveOption] = useState(null);
  const [submenuHeight, setSubmenuHeight] = useState(0);

  const handleOptionClick = (index) => {
    if (index === activeOption) {
      setActiveOption(null);
    } else {
      setActiveOption(index);
    }
  };

  useEffect(() => {
    if (activeOption !== null) {
      const submenu = document.getElementById("submenu");
      setSubmenuHeight(submenu.scrollHeight);
    } else {
      setSubmenuHeight(0);
    }
  }, [activeOption]);

  return (
    <div className="sidebar-container">
      <div className="deploy-container">
        <h5 className="deploy">Desarrollado por RAFAM 2021</h5>
        <h5 className="deploy">v. 4.12.3</h5>
        <hr />
      </div>
      {!isMobile && <LoginHeader />}
      <div className="menu-items">
        <ul>
          <li>
            <div className="options inicio">
              <div className="item-title">Inicio</div>
            </div>
          </li>
          {options.map((option, index) => (
            <li
              key={index}
              onClick={() => handleOptionClick(index)}
              className={index === activeOption ? "active" : ""}
            >
              <div className="options">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="1rem"
                  fill="#e1e1e1"
                  viewBox={
                    index === activeOption ? "0 40 300 500" : "0 00 300 500"
                  }
                >
                  <path
                    d={
                      index === activeOption
                        ? "M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z"
                        : "M246.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-9.2-9.2-22.9-11.9-34.9-6.9s-19.8 16.6-19.8 29.6l0 256c0 12.9 7.8 24.6 19.8 29.6s25.7 2.2 34.9-6.9l128-128z"
                    }
                  />
                </svg>
                <SidebarOptions
                  key={index}
                  onClick={() => handleOptionClick(index)}
                  className={index === activeOption ? "active" : ""}
                  title={option.title}
                />
              </div>
              {index === activeOption && option.options && (
                <ul
                  id="submenu"
                  className="submenu"
                  style={{ maxHeight: submenuHeight }}
                >
                  {option.options.map((subOption, subIndex) => (
                    <li key={subIndex}>
                      <SidebarOptions title={subOption} />
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </div>
      {isMobile && <div className="menu-line"></div>}
      <div className="deploy-container">
        <hr />
        <div className="bottom">
          <div>
            <img
              src={require("./rafam.png")}
              alt="rafam2"
              className="logoRafam"
            />
          </div>
          <div className="contact">
            <h5 className="deploy">(0221) 429-4484/4509</h5>
            <h5 className="deploy">pa@es.gov.ar</h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
