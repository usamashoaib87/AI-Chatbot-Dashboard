import "./App.css";
import Sidebar from "./Components/Sidebar/Sidebar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TrainingData from "./Components/SidebarPages/TrainingData/TrainingData";
import Inbox from "./Components/SidebarPages/Inbox/Inbox";
import HelpCenter from "./Components/SidebarPages/HelpCenter/HelpCenter";
import Monitor from "./Components/SidebarPages/Monitor/Monitor";
import Customers from "./Components/SidebarPages/Customers/Customers";
import Integrations from "./Components/SidebarPages/Integrations/Integrations";
import Settings from "./Components/SidebarPages/Settings/Settings";
import AssistantCust from "./Components/SidebarPages/AssistantCust/AssistantCust";

function App() {
  return (
    <div className="App">
      <Router>
        <Sidebar />
        <Routes>
          <Route path="/" element={<Monitor />} />
          <Route path="/TrainingData" element={<TrainingData />} />
          <Route path="/Inbox" element={<Inbox />} />
          <Route path="/Customers" element={<Customers />} />
          <Route path="/Integrations" element={<Integrations />} />
          <Route path="/AssistantCust" element={<AssistantCust />} />
          <Route path="/HelpCenter" element={<HelpCenter />} />
          <Route path="/Settings" element={<Settings />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
