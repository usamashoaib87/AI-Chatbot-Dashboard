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
          <img src={im} alt='dfgh'></img>
          <img className="topicon" src={ima} alt='gfd'></img>
        </div>
        <div className="main">
          <span>Main Menu</span>
          <div>
            <img src={li1} alt='dfgh'></img>
            <a href=''>
              <Link to="/Monitor">Monitor</Link>
            </a>
          </div>
          <div>
            <img className="image2" src={li2} alt='gf'></img>
            <a href=''>
              <Link to="/TrainingData">Training Data</Link>
            </a>
          </div>
          <div>
            <img src={li3} alt='dfgh'></img>
            <a href=''>
              <Link to="/Inbox">Inbox</Link>
            </a>
          </div>

          <div>
            <img src={li4} alt='dfgh'></img>
            <a href=''>
              <Link to="/Customers">Customers</Link>
            </a>
          </div>
          <div>
            <img src={li5} alt='dfgh'></img>
            <a href=''>
              <Link to="/Integrations">Integrations</Link>
            </a>
          </div>
          <div>
            <img src={li6} alt='dfgh'></img>
            <a href=''>
              <Link to="/AssistantCust">Assistant Customization</Link>
            </a>
          </div>
          <div>
            <img src={li7} alt='dfgh'></img>
            <a href=''>
              <Link to="/HelpCenter">Help Center</Link>
            </a>
          </div>
          <div>
            <img src={li8} alt='dfgh'></img>
            <a href=''>
              <Link to="/Settings">Settings</Link>
            </a>
          </div>
          <div>
            <a href=''>
              <Link to="/">Assistant</Link>
            </a>
            <img src={li9} alt='dfgh'></img>
          </div>
          <div>
            <img src={li10} alt='dfgh'></img>
            <a href=''>
              <Link to="/">Assistant Behavior</Link>
            </a>
          </div>
          <div>
            <img src={li11} alt='dfgh'></img>
            <a href=''>
              <Link to="/">Assistant Testing</Link>
            </a>
          </div>
          <div>
            <img src={li12} alt='dfgh'></img>
            <a href=''>Sarah</a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
