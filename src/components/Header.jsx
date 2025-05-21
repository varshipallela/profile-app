// import React, { useState } from "react";
import { FaUser, FaUsers, FaEdit } from "react-icons/fa";

function Header({ activeTab, setActiveTab }) {
  return (
    <div className="header">
      <div className="breadcrumb">
        <h3 >User Profile2</h3>
        <p>Home &middot; User Profile2</p>
      </div>

      <img
        src="https://tse1.mm.bing.net/th?id=OIP.SqkKcPmn7j_ats47Zt8NKAHaCq&pid=Api&P=0&h=180"
        alt="Banner"
        className="banner"
      />

      <div className="user-card">
        <div className="avatar-box">
          <img
            src="https://tse3.mm.bing.net/th?id=OIP.l0ai3Gemc84mnwkfBwywrAHaHa&pid=Api&P=0&h=180"
            alt="Avatar"
            className="avatar"
          />
          <div className="avatar-edit">
    +
  </div>
        </div>

        <div className="user-info">
          <h2>
            Mike Nielsen <span className="badge">Admin</span>
          </h2>
          <p className="role">super admin</p>
          <p className="status">
  <span className="status-dot"></span> Active
</p>

        </div>

        <div className="tabs">
          <button
            className={activeTab === "profile" ? "active" : ""}
            onClick={() => setActiveTab("profile")}
          >
            <FaUser /> My Profile
          </button>
          <button
            className={activeTab === "teams" ? "active" : ""}
            onClick={() => setActiveTab("teams")}
          >
            <FaUsers /> Teams
          </button>
          <button
            className={activeTab === "update" ? "active" : ""}
            onClick={() => setActiveTab("update")}
          >
            <FaEdit /> Update Profile
          </button>
        </div>
      </div>
    </div>
  );
}

export default Header;
