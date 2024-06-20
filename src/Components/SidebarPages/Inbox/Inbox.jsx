import React,{useState} from 'react'
import "./Inbox.scss";
import image from "../../../assets/avatar.png";
import ima from "../../../assets/searchicon.png";
import ChatDetail from './ChatDetail';
const chats = [
  { title: "Halloween Advice Needed",  message: "Of course! I'd be happy to help you...",date: "Jan 18th, 2024", time: "9:00 AM" },
  { title: "Travel Plan", message: "Of course! I'd be happy to help you..." ,date: "Jan 18th, 2024", time: "4:00 PM"},
  { title: "Cooking Recipes Idea", message: "Of course! I'd be happy to help you...",date: "Jan 18th, 2024", time: "9:00 AM"},
  { title: "Design Moodboard",  message: "Hello! I'd be happy to help you with..." ,date: "Dec 27th, 2023", time: "8:00 AM"},
  { title: "Sleep Management Tips",  message: "Of course! I'd be happy to help you..." ,date: "Dec 15th, 2023", time: "7:00 PM"},
  { title: "PHP HTTP Request: cURL",  message: "In PHP, you can make HTTP reques..." ,date: "Dec 12th, 2023", time: "3:00 PM"},
  { title: "Retro Arcade Game Concepts",  message: "Pixel Pioneers: Galactic Salvage",date: "Nov 25th, 2023", time: "9:00 AM" },
  { title: "Barbeque Theme Ideas",  message: "Enjoy the warm and relaxed outdoor..." ,date: "Nov 18th, 2023", time: "6:00 AM"},
];
const Inbox = () => {
  const [selectedChat, setSelectedChat] = useState(null);

  const handleChatClick = (chat) => {
    setSelectedChat(chat);
  };
  return (
    <div className="data">
      <div className="chat-container">
        <div className="chat-header">
          <h1>Chats</h1>
          <button className="new-chat-button">+</button>
        </div>
        <div className="chat-search">
          <input type="text" placeholder="Search..." />
          <img src={ima} alt="" />
        </div>
        <div className="chat-list">
          {chats.map((chat, index) => (
            <div key={index} className="chat-item" onClick={() => handleChatClick(chat)}>
              <div className="chat-avatar"><img src={image} alt="" /></div>
              <div className="chat-info">
                <div className="chat-title">{chat.title}</div>
                <div className="chat-message">{chat.message}</div>
                <div className="chat-details">
                  <span>{chat.date}</span>
                  <span>{chat.time}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {selectedChat && <ChatDetail chat={selectedChat} />}
    </div>
    
    
  );
};

export default Inbox
