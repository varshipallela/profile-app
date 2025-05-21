
import React, { useState } from "react";
import { FaMapMarkerAlt } from "react-icons/fa";

const initialFollowers = [
  { name: "Betty Adams", location: "Sint Maarten", followed: false, avatar: "https://i.pravatar.cc/150?img=1" },
  { name: "Steven Lindsey", location: "Malaysia", followed: true, avatar: "https://i.pravatar.cc/150?img=2" },
  { name: "Mark Barton", location: "French Southern Territories", followed: false, avatar: "https://i.pravatar.cc/150?img=3" },
  { name: "Jon Cohen", location: "United States", followed: true, avatar: "https://i.pravatar.cc/150?img=4" },
  { name: "Harvey Baldwin", location: "Uruguay", followed: false, avatar: "https://i.pravatar.cc/150?img=5" },
  { name: "Francis Barber", location: "Colombia", followed: false, avatar: "https://i.pravatar.cc/150?img=6" },
  { name: "Blanche Strickland", location: "South Africa", followed: true, avatar: "https://i.pravatar.cc/150?img=7" },
  { name: "Virginia Wong", location: "Tunisia", followed: false, avatar: "https://i.pravatar.cc/150?img=8" },
  { name: "Hannah Rhodes", location: "Grenada", followed: true, avatar: "https://i.pravatar.cc/150?img=9" },
  { name: "Carolyn Knight", location: "Nauru", followed: true, avatar: "https://i.pravatar.cc/150?img=10" },
  { name: "Mary Hernandez", location: "Equatorial Guinea", followed: false, avatar: "https://i.pravatar.cc/150?img=11" },
  { name: "Alice George", location: "Madagascar", followed: false, avatar: "https://i.pravatar.cc/150?img=12" },
  { name: "Christian Morales", location: "Maldives", followed: false, avatar: "https://i.pravatar.cc/150?img=13" },
  { name: "Adam Washington", location: "Suriname", followed: true, avatar: "https://i.pravatar.cc/150?img=14" },
  { name: "Birdie Burgess", location: "Algeria", followed: true, avatar: "https://i.pravatar.cc/150?img=15" },
  { name: "Effie Gross", location: "Azerbaijan", followed: false, avatar: "https://i.pravatar.cc/150?img=16" },
  { name: "Elizabeth Malone", location: "Djibouti", followed: false, avatar: "https://i.pravatar.cc/150?img=17" },
  { name: "Willie Peterson", location: "Solomon Islands", followed: false, avatar: "https://i.pravatar.cc/150?img=18" },
  { name: "Beulah Simpson", location: "Bahrain", followed: false, avatar: "https://i.pravatar.cc/150?img=19" },
  { name: "Laura Nelson", location: "St. Helena", followed: true, avatar: "https://i.pravatar.cc/150?img=20" },
];

function Teams() {
  const [followers, setFollowers] = useState(initialFollowers);
  const [searchTerm, setSearchTerm] = useState("");

  const toggleFollow = (index) => {
    setFollowers(prev =>
      prev.map((f, i) =>
        i === index ? { ...f, followed: !f.followed } : f
      )
    );
  };

  const filteredFollowers = followers.filter(f =>
    f.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const followedCount = followers.filter(f => f.followed).length;

  return (
    <div className="teams-container">
      {/* <h3>Followers ({followedCount} followed)</h3> */}
      <h3 className="followers-header">
  Followers
  <button className="followers-count-btn">
    {followers.filter((f) => f.followed).length}
  </button>
</h3>


      <div className="search-bar">
        <input
          type="text"
          placeholder=" 🔍 Search Followers"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <div className="followers-grid">
        {filteredFollowers.map((f, index) => (
          <div key={index} className="follower-card">
            <div className="follower-left">
              <img src={f.avatar} alt={f.name} />
              <div className="follower-info">
                <div className="follower-name">{f.name}</div>
                <div className="follower-location">
                  <FaMapMarkerAlt style={{ marginRight: "4px", color: "#000" }} />
                  {f.location}
                </div>
              </div>
            </div>
            <button
              className={`follow-button ${f.followed ? "followed" : ""}`}
              onClick={() => toggleFollow(index)}
            >
              {f.followed ? "Followed" : "Follow"}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Teams;

