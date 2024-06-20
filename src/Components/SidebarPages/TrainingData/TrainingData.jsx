import React, { useState } from 'react';
import FileList from './FileList';
import Search from './Search';
import "./TrainingData.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faList, faTh } from '@fortawesome/free-solid-svg-icons';
import AddDataModal from './AddDataModal';
const TrainingData = () => {
  const [files, setFiles] = useState([
    { name: "docs", size: "2 Mb", date: "Nov 01, 2020", storage: "235 MB" },
    { name: "files", size: "2 Mb", date: "Sep 27, 2020", storage: "324 MB" },
    {
      name: "documentry",
      size: "2 Mb",
      date: "Jul 09, 2020",
      storage: "265 MB",
    },
    { name: "office", size: "2 Mb", date: "May 14, 2020", storage: "593 MB" },
    { name: "home", size: "2 Mb", date: "Dec 30, 2020", storage: "423 MB" },
    { name: "work", size: "2 Mb", date: "Dec 30, 2020", storage: "298 MB" },
    { name: "weekend", size: "2 Mb", date: "Apr 03, 2019", storage: "312 MB" },
  ]);
  const [showAddDataModal, setShowAddDataModal] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [viewStyle, setViewStyle] = useState("list");

  const handleAddData = (newData) => {
    setFiles([...files, newData]);
    setShowAddDataModal(false);
  };

  const handleCloseModal = () => {
    setShowAddDataModal(false);
  };

  const handleSearch = (event) => {
    setSearchTerm(event.target.value.toLowerCase());
  };

  const filteredFiles = files.filter((file) =>
    file.name.toLowerCase().includes(searchTerm)
  );
  const handleViewChange = (newStyle) => {
    setViewStyle(newStyle);
  };

  return (
    <div className="data">
      <div className="App">
        <Search onSearch={handleSearch} searchTerm={searchTerm} />
        <div className="toggle">
          <button className="btn" onClick={() => setShowAddDataModal(true)}>
            Add Data
          </button>
          <div className="toggle-container">
            <button
              className={`toggle-button ${
                viewStyle === "list" ? "active" : ""
              }`}
              onClick={() => handleViewChange("list")}
            >
              <FontAwesomeIcon icon={faList} />
            </button>
            <button
              className={`toggle-button ${
                viewStyle === "grid" ? "active" : ""
              }`}
              onClick={() => handleViewChange("grid")}
            >
              <FontAwesomeIcon icon={faTh} />
            </button>
          </div>
        </div>
        {showAddDataModal && (
          <AddDataModal onAddData={handleAddData} onClose={handleCloseModal} />
        )}
        <FileList files={filteredFiles} viewStyle={viewStyle} />
      </div>
    </div>
  );
};

export default TrainingData;
