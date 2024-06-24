import React, { useState } from "react";
import "./ChatDetail.scss";
import im from "../../../assets/edit.png";
import ima from "../../../assets/line1.png";
import imagec from "../../../assets/imagec.png";
import imag from "../../../assets/illustration.png";
import image from "../../../assets/line2.png";
import image2 from "../../../assets/line3.png";
import image1 from "../../../assets/menu.png";
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
          <span className="message-time">9:00 AM</span>
          <div className="chat-card1">
            <p>Hello there, i need some advice about halloween.</p>
            <img src={ima} alt="cvbn" />
            <img src={im} alt="uj" />
          </div>
        </div>
        <div className="chat-message2">
          <span className="message-time">9:00 AM</span>
          <div className="chat-card2">
            <img src={imag} alt="ikm" />
            <p>
              Of course! I'd be happy to help you with Halloween advice. What
              specifically do you need assistance with? Whether it's costume
              ideas, party planning, decorations, or anything else related to
              Halloween, feel free to let me know how I can assist you!
            </p>
            <img src={image} alt="ijh" />
            <img src={image1} alt="wert" />
          </div>
        </div>
        <div className="chat-message3">
          <span className="message-time">9:01 AM</span>
          <div className="chat-card3">
            <p>
              i need idea about what costume i wear in halloween. can you give
              me some suggestion?
            </p>
            <img src={image2} alt="erty" />
            <img src={im} alt="sdf" />
          </div>
        </div>
        <div className="chat-message4">
          <span className="message-time">9:00 AM</span>
          <div className="chat-card4">
            <img src={imag} alt="zxc" />
            <p>
              Certainly! Choosing a Halloween costume can be a lot of fun. Here
              are some costume ideas across different themes, and you can pick
              one based on your interests: <br />  <br />         
              1. Classic Horror Icons: <br />
              2. Dracula <br />
              3. Frankenstein's Monster <br />
              4. Mummy Werewolf <br />
              5. Zombie <br />
            </p>
            <img src={image} alt="wdsc" />
            <img src={image1} alt="tgv" />
          </div>
        </div>
      </div>
      <div className="chat-input">
        <input type="text" placeholder="Ask me anything..." />
        <img src={imagec} alt="ujn" />
        <img src={mic} alt="rfc" />
        <img src={send} alt="efv" />
      </div>
      {showAddDataModal && <Pop onClose={handleCloseModal} />}
    </div>
  );
};

export default ChatDetail;
