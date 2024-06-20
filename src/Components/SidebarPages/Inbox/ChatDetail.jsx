import React, { useState } from "react";
import "./ChatDetail.scss";
import im from "../../../assets/chat1.png";
import ima from "../../../assets/chat2.png";
import imag from "../../../assets/chat3.png";
import image from "../../../assets/chat4.png";
import imagec from "../../../assets/imagec.png";
import mic from "../../../assets/mic.png";
import send from "../../../assets/send.png";
import Pop from "./Pop";
const ChatDetail = () => {
  const [showAddDataModal, setShowAddDataModal] = useState(false);

  const handleCloseModal = () => {
    setShowAddDataModal(false);
  };

  return (
    <div className="chat-detail-container">
      <div className="chat-detail-header">
        <h2>Messages</h2>
        <button onClick={() => setShowAddDataModal(true)}>
          Assign to agent
        </button>
        <i class="fas fa-search"></i>
        <i class="fas fa-ellipsis-h"></i>
      </div>
      <div className="chat-detail-messages">
        <div className="message-time1">Today, 9:00 AM</div>
        <div className="chat-message1">
          <img src={im} alt="" />
        </div>
        <div className="chat-message2">
          <img src={ima} alt="" />
        </div>
        <div className="chat-message3">
          <img src={imag} alt="" />
        </div>
        <div className="chat-message4">
          <img src={image} alt="" />
        </div>
      </div>
      <div className="chat-input">
        <input type="text" placeholder="Ask me anything..." />
        <img src={imagec} alt="" />
        <img src={mic} alt="" />
        <img src={send} alt="" />
      </div>
      {showAddDataModal && <Pop onClose={handleCloseModal} />}
    </div>
  );
};

export default ChatDetail;
