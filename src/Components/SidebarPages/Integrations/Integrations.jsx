import React, { useState } from "react";
import "./Integrations.scss";
import ima1 from "../../../assets/icon1.png";
import ima2 from "../../../assets/icon2.png";
import ima3 from "../../../assets/icon3.png";
import ima4 from "../../../assets/icon4.png";
import ima5 from "../../../assets/icon5.png";
import ima6 from "../../../assets/icon6.png";
import ima7 from "../../../assets/icon7.png";
import ima8 from "../../../assets/icon8.png";
import imag1 from "../../../assets/text1.png";
import imag2 from "../../../assets/text2.png";
import imag3 from "../../../assets/text3.png";
import imag4 from "../../../assets/text4.png";
import imag5 from "../../../assets/text5.png";
import imag6 from "../../../assets/text6.png";
import imag7 from "../../../assets/text7.png";
import imag8 from "../../../assets/text8.png";
import Popup from "./Popup";

const Integrations = () => {
  const [showAddDataModal, setShowAddDataModal] = useState(false);

  const handleCloseModal = () => {
    setShowAddDataModal(false);
  };
  return (
    <div className="data">
      <div className="head">
        <h1>Integrations</h1>
        <i class="fas fa-search"></i>
        <i class="fas fa-ellipsis-h"></i>
      </div>
      <div className="cards">
        <div>
          <img src={ima1} alt="tfcv" />
          <img src={imag1} alt="vcd" />
          <button onClick={() => setShowAddDataModal(true)} className="btn">
            Integrated
          </button>
        </div>
        <div>
          <img src={ima2} alt="tfv" />
          <img src={imag2} alt="uytfv" />
          <button onClick={() => setShowAddDataModal(true)} className="btn">
            Integrated
          </button>
        </div>
        <div>
          <img src={ima3} alt="xcv" />
          <img src={imag3} alt="ijn" />
          <button onClick={() => setShowAddDataModal(true)} className="btn">
            Integrated
          </button>
        </div>
        <div>
          <img src={ima4} alt="rdcv" />
          <img src={imag4} alt="dcvb" />
          <button onClick={() => setShowAddDataModal(true)} className="btn">
            Integrated
          </button>
        </div>
        <div>
          <img src={ima5} alt="jn" />
          <img src={imag5} alt="nnn" />
          <button onClick={() => setShowAddDataModal(true)} className="btn">
            Integrated
          </button>
        </div>
        <div>
          <img src={ima6} alt="rd" />
          <img src={imag6} alt="ol" />
          <button onClick={() => setShowAddDataModal(true)} className="btn">
            Integrated
          </button>
        </div>
        <div>
          <img src={ima7} alt="uj" />
          <img src={imag7} alt="j" />
          <button onClick={() => setShowAddDataModal(true)} className="btn">
            Integrated
          </button>
        </div>
        <div>
          <img src={ima8} alt="jn" />
          <img src={imag8} alt="d" />
          <button onClick={() => setShowAddDataModal(true)} className="btn">
            Integrated
          </button>
        </div>
      </div>
      {showAddDataModal && <Popup onClose={handleCloseModal} />}
    </div>
  );
};

export default Integrations;
