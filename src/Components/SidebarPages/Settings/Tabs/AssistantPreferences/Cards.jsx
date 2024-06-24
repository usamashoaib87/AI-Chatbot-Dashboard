import React, { useState } from "react";
import "../../Settings.scss";
const AIStatus = ({ status, onChange }) => (
  <div className="ai-status">
    <h3>AI assistant status</h3>
    <p>
      Lorem Ipsum is simply dummy text of the printing and typesetting industry.
      Lorem Ipsum has been the industry's standard dummy text ever since the
      1500s.
    </p>
    <label className="switch">
      <input type="checkbox" checked={status} onChange={onChange} />
      <span className="slider round"></span>
    </label>
  </div>
);
const Cards = () => {
  const [statuses, setStatuses] = useState([true, true, true]);
  const toggleStatus = (index) => {
    const newStatuses = [...statuses];
    newStatuses[index] = !newStatuses[index];
    setStatuses(newStatuses);
  };

  return (
    <div>
      {statuses.map((status, index) => (
        <AIStatus
          key={index}
          status={status}
          onChange={() => toggleStatus(index)}
        />
      ))}
    </div>
  );
};

export default Cards;
