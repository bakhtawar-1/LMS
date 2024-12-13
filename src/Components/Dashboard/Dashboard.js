import React from "react";
import { Link } from "react-router-dom";
import "./Dashboard.css";

const Dashboard = () => {
  return (
    <div className="dashboard">
      <h1 className="dashboard-title">LMS Dashboard</h1>
      
      {/* Latest News Section */}
      <div className="latest-news-section">
        <h3>📢 Latest News</h3>

        {/* Marquee container for the news items */}
        <div className="news-marquee-container">
          <div className="news-marquee">
            <div className="news-update-box">
              <h4>New Course Available</h4>
              <p>Advanced Data Science course will be available from next semester. Stay tuned for more details!</p>
            </div>
            <div className="news-update-box">
              <h4>Exam Schedule Coming Soon</h4>
              <p>The exam schedule for the upcoming semester will be released next week. Be prepared!</p>
            </div>
            <div className="news-update-box">
              <h4>Profile Update Reminder</h4>
              <p>All students must update their profiles by the end of this month to ensure smooth access to course resources.</p>
            </div>
            <div className="news-update-box">
              <h4>Facilities Closed for Maintenance</h4>
              <p>School facilities will be closed for maintenance on weekends. Please plan accordingly.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Dashboard Cards */}
      <div className="dashboard-cards">
        <div className="card">
          <h3>Students</h3>
          <p>Manage student profiles and performance.</p>
          <button>
  <Link to="/student" style={{ textDecoration: 'none', color: 'inherit' }}>
    View Students
  </Link>
</button>        </div>
        <div className="card">
          <h3>Courses</h3>
          <p>View and manage all courses.</p>
          <button>Manage Courses</button>
        </div>
        <div className="card">
          <h3>Exams</h3>
          <p>Set exams and review results.</p>
          <button>
  <Link to="/exam_settings" style={{ textDecoration: 'none', color: 'inherit' }}>
    Exam Settings
  </Link>
</button>         </div>
        <div className="card">
          <h3>Reports</h3>
          <p>Generate student and course reports.</p>
          <button>Generate Reports</button>
        </div>
        <div className="card">
          <h3>Notifications</h3>
          <p>Send updates and announcements.</p>
          <button>Send Notifications</button>
        </div>
        <div className="card">
          <h3>Timetable</h3>
          <p>Access and organize the class schedules effectively.</p>
          <button>
  <Link to="/timetable" style={{ textDecoration: 'none', color: 'inherit' }}>
    View Timetable
  </Link>
</button> 
        </div>
        <div className="card">
          <h3>Fee Structure</h3>
          <p>Check and update student fee details.</p>
          <button>View Fee Structure</button>
        </div>
        <div className="card">
          <h3>Facilities</h3>
          <p>Explore and manage school facilities and resources.</p>
          <button>Manage Facilities</button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
