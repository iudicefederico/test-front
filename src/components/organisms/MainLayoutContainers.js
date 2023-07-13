import React from "react";

export default function MainLayoutContainers(props) {
  const { title1, title2, title3 } = props;

  return (
    <div className="rightContainers">
      <h2 className="subtitle1">{title1}</h2>
      <h5 className="subtitle2">{title2}</h5>
      {title3 && (
        <div className="subtitle3-container">
          {title3.map((subtitle, index) => (
            <h4 key={index} className="subtitle3">
              {subtitle}
            </h4>
          ))}
        </div>
      )}
    </div>
  );
}
