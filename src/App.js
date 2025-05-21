
import React, { useState } from "react";
import Header from "./components/Header";
import ProfileForm from "./components/ProfileForm";
import Teams from "./components/Teams";
import ProfilePage from "./components/ProfilePage";
import "./App.css";

function App() {
  const [activeTab, setActiveTab] = useState("profile");

  const renderContent = () => {
    switch (activeTab) {
      case "profile":
        return <ProfilePage />;
      case "teams":
        return <Teams />;
      case "update":
        return <ProfileForm isEdit />;
      default:
        return null;
    }
  };

  return (
    <div className="container">
      <Header activeTab={activeTab} setActiveTab={setActiveTab} />
      {renderContent()}
    </div>
  );
}

export default App;
