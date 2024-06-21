
////////////using pure//////////

import React, { useState } from "react";
import "./Settings.scss";
import LimitAndUsage from "./Tabs/LimitAndUsage";
import AssistantPreferences from "./Tabs/AssistantPreferences";
import AccountPreferences from "./Tabs/AccountPreferences";
import ApiKeys from "./Tabs/ApiKeys";
import MyTeam from "./Tabs/MyTeam";
const tabs = [
  { name: "Limit and Usage", content: <LimitAndUsage /> },
  { name: "Assistant Preferences", content: <AssistantPreferences /> },
  { name: "Account Preferences", content: <AccountPreferences /> },
  { name: "API Keys", content: <ApiKeys /> },
  { name: "My Team", content: <MyTeam /> },
];

const TabContent = ({ children }) => {
  return <div className="tab-Content">{children}</div>;
};

const Tab = ({ name, active, onSelect }) => (
  <li
    className={`tab ${active ? "active underline" : ""} ${
      active ? "text-blue" : ""
    }`}
    onClick={() => onSelect(name)}
  >
    {name}
  </li>
);

const Settings = () => {
  const [activeTab, setActiveTab] = useState(tabs[0].name);

  const handleTabSelect = (tabName) => {
    setActiveTab(tabName);
  };

  const renderedTabs = tabs.map((tab) => (
    <Tab
      key={tab.name}
      name={tab.name}
      active={activeTab === tab.name}
      onSelect={handleTabSelect}
    />
  ));

  const activeContent = tabs.find((tab) => tab.name === activeTab).content;

  return (
    <div className="data">
      <div className="head5">
        <h1>Settings</h1>
        <i class="fas fa-search"></i>
        <i class="fas fa-ellipsis-h"></i>
      </div>
      <div className="tabs">
        <ul className="tab-list">{renderedTabs}</ul>
      </div>
      <TabContent>{activeContent}</TabContent>
    </div>
  );
};

export default Settings;

//// using Material UI tabs////


// import * as React from "react";
// import PropTypes from "prop-types";
// import Tabs from "@mui/material/Tabs";
// import Tab from "@mui/material/Tab";
// import Box from "@mui/material/Box";
// import LimitAndUsage from "./LimitAndUsage";
// import AssistantPreferences from "./AssistantPreferences";
// import AccountPreferences from "./AccountPreferences";
// import ApiKeys from "./ApiKeys";
// import MyTeam from "./MyTeam";

// function CustomTabPanel(props) {
//   const { children, value, index, ...other } = props;

//   return (
//     <div
//       className=""
//       role="tabpanel"
//       hidden={value !== index}
//       id={`simple-tabpanel-${index}`}
//       aria-labelledby={`simple-tab-${index}`}
//       {...other}
//     >
//       {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
//     </div>
//   );
// }

// CustomTabPanel.propTypes = {
//   children: PropTypes.node,
//   index: PropTypes.number.isRequired,
//   value: PropTypes.number.isRequired,
// };

// function a11yProps(index) {
//   return {
//     id: `simple-tab-${index}`,
//     "aria-controls": `simple-tabpanel-${index}`,
//   };
// }

// export default function Settings() {
//   const [value, setValue] = React.useState(0);

//   const handleChange = (event, newValue) => {
//     setValue(newValue);
//   };

//   return (
//     <div className="data">
//       <div className="head5">
//         <h1>Settings</h1>
//         <i class="fas fa-search"></i>
//         <i class="fas fa-ellipsis-h"></i>
//       </div>
//       <Box sx={{ width: "auto" }} >
//         <Box sx={{ borderBottom: 1, borderColor: "divider" }} className="tabs">
//           <Tabs
//             value={value}
//             onChange={handleChange}
//             aria-label="basic tabs example"
//           >
//             <Tab label="Limit ans Usage" {...a11yProps(0)} />
//             <Tab label="Assistant Preferences" {...a11yProps(1)} />
//             <Tab label="Account Preferences" {...a11yProps(2)} />
//             <Tab label="Api Keys" {...a11yProps(3)} />
//             <Tab label="My Team" {...a11yProps(4)} />
//           </Tabs>
//         </Box>
//         <CustomTabPanel value={value} index={0} className='tabContent'>
//           <LimitAndUsage />
//         </CustomTabPanel>
//         <CustomTabPanel value={value} index={1} className='tabContent'>
//           <AssistantPreferences />
//         </CustomTabPanel>
//         <CustomTabPanel value={value} index={2} className='tabContent'>
//           <AccountPreferences />
//         </CustomTabPanel>
//         <CustomTabPanel value={value} index={3} className='tabContent'>
//           <ApiKeys />
//         </CustomTabPanel>
//         <CustomTabPanel value={value} index={4} className='tabContent'>
//           <MyTeam />
//         </CustomTabPanel>
//       </Box>
//     </div>
//   );
// }
