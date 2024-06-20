import React from 'react'
import './Sidebar.scss';
import im from '../../assets/image.png';
import ima from '../../assets/icon.png';
import li1 from '../../assets/monitor.png';
import li2 from '../../assets/trainingdata.png';
import li3 from '../../assets/inbox.png';
import li4 from '../../assets/customers.png';
import li5 from '../../assets/integration.png';
import li6 from '../../assets/customization.png';
import li7 from '../../assets/help.png';
import li8 from '../../assets/settings.png';
import li9 from '../../assets/navigate.png';
import li10 from '../../assets/behavior.png';
import li11 from '../../assets/testing.png';
import li12 from '../../assets/profile.png';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <>
      <div className="sidebar">
        <div className="inner">
          <img src={im}></img>
          <img className="topicon" src={ima}></img>
        </div>
        <div className="main">
          <span>Main Menu</span>
          <div>
            <img src={li1}></img>
            <a>
              <Link to="/Monitor">Monitor</Link>
            </a>
          </div>
          <div>
            <img className="image2" src={li2}></img>
            <a>
              <Link to="/TrainingData">Training Data</Link>
            </a>
          </div>
          <div>
            <img src={li3}></img>
            <a>
              <Link to="/Inbox">Inbox</Link>
            </a>
          </div>

          <div>
            <img src={li4}></img>
            <a>
              <Link to="/Customers">Customers</Link>
            </a>
          </div>
          <div>
            <img src={li5}></img>
            <a>
              <Link to="/Integrations">Integrations</Link>
            </a>
          </div>
          <div>
            <img src={li6}></img>
            <a>
              <Link to="/AssistantCust">Assistant Customization</Link>
            </a>
          </div>
          <div>
            <img src={li7}></img>
            <a>
              <Link to="/HelpCenter">Help Center</Link>
            </a>
          </div>
          <div>
            <img src={li8}></img>
            <a>
              <Link to="/Settings">Settings</Link>
            </a>
          </div>
          <div>
            <a>
              <Link to="/">Assistant</Link>
            </a>
            <img src={li9}></img>
          </div>
          <div>
            <img src={li10}></img>
            <a>
              <Link to="/">Assistant Behavior</Link>
            </a>
          </div>
          <div>
            <img src={li11}></img>
            <a>
              <Link to="/">Assistant Testing</Link>
            </a>
          </div>
          <div>
            <img src={li12}></img>
            <a>Sarah</a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
