import React, { useState } from 'react';
import './Sidebar.css';
import logo from '../Assets/logo.jpg';

const Sidebar = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleSidebar = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className={`sidebar ${isExpanded ? 'expanded' : ''}`}>
      <img src={logo} alt="Logo" onClick={toggleSidebar} style={{ cursor: 'pointer' }} />
      <h2 onClick={toggleSidebar} style={{ color: 'white' ,cursor: 'pointer' }}> 🔻 LMS Menu</h2>
      <ul>
        <li><a href="/dashboard">Dashboard</a></li>
        <li><a href="/config_Settings">Config Settings</a></li>
        <li><a href="/student">Student</a></li>
        <li><a href="/department">Departments</a></li>
        <li><a href="/report">Reports</a></li>
        <li><a href="/exam_settings">Exam Settings</a></li>
        <li><a href="/timetable">Timetable</a></li>
        <li><a href="/feeStructure">Fee Structure</a></li>
        <li><a href="/library">Library</a></li>
        <li><a href="/settings">Settings</a></li>
      </ul>
    </div>
  );
};

export default Sidebar;
