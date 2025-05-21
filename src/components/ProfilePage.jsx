
import React from "react";
import { useState } from "react";
import { FaPaperclip, FaLink, FaSmile } from "react-icons/fa";

const ProfilePage = () => {
  return (
    <div className="profile-page">
      {/* LEFT SIDE */}
      <div className="left-side">
        <div className="card combined-section">
          <div className="section">
            <h3>About Me</h3>
            <p>
              Hello, I’m Mike Nielsen. I’m a professional who designs,
              develops, tests, and maintains software applications and systems.
            </p>
          </div>

          <hr />

          <div className="section">
              
            <h3>Contact</h3>
            <div className="contact-item">
              <div className="icon-label">
                <span className="icon call">📞</span>
                <span className="label">Call</span>
              </div>
              <div className="value">(123) 456-7890</div>
            </div>

            <div className="contact-item">
              <div className="icon-label">
                <span className="icon email">✉️</span>
                <span className="label">Email</span>
              </div>
              <div className="value">info@spike.com</div>
            </div>

            <div className="contact-item">
              <div className="icon-label">
                <span className="icon skype">💬</span>
                <span className="label">Skype</span>
              </div>
              <div className="value">Mike.Nielsen</div>
            </div>
          </div>

          <hr />

          {/* Other */}
          <div className="section">
            <h3>Other</h3>
            <div className="contact-item">
              <div className="icon-label">
                <span className="icon location">📍</span>
                <span className="label">Location</span>
              </div>
              <div className="value">Newyork, USA - 100001</div>
            </div>

            <div className="contact-item">
              <div className="icon-label">
                <span className="icon education">🎓</span>
                <span className="label">Education</span>
              </div>
              <div className="value">Saint Josef Institute of Science</div>
            </div>

            <div className="contact-item">
              <div className="icon-label">
                <span className="icon language">🗣️</span>
                <span className="label">Language</span>
              </div>
              <div className="value">English</div>
            </div>
          </div>
        </div>

      
        <div className="card">
          <h3>Teams</h3>
          <div className="contact-item">
            <div className="icon-label">
              <span className="icon backend">🐙</span>
              <span className="label">Backend Developer</span>
            </div>
            <div className="value">120 members</div>
          </div>

          <div className="contact-item">
            <div className="icon-label">
              <span className="icon react">⚛️</span>
              <span className="label">React Developer</span>
            </div>
            <div className="value">86 members</div>
          </div>

          <p className="view-all">View all</p>
        </div>
      </div>
      

      {/* RIGHT SIDE */}
      <div className="right-side">
        
         <div className="stats">
          <div className="stat-box">
            <div className="stat-icon">📋</div>
            <div>
              <div className="stat-number">680</div>
              <div className="stat-label">Tasks Done</div>
            </div>
          </div>
          <div className="stat-box">
            <div className="stat-icon">📁</div>
            <div>
              <div className="stat-number">42</div>
              <div className="stat-label">Projects</div>
            </div>
          </div>
          <div className="stat-box">
            <div className="stat-icon">💰</div>
            <div>
              <div className="stat-number">$780</div>
              <div className="stat-label">Sales</div>
            </div>
          </div>
        </div>

        <div className="card feed-section">
          <div className="feed-header">
            <h3>Feeds</h3>
            <button className="timeline-btn">Timeline</button>
          </div>

          <div className="input-box">
            <img
              src="https://randomuser.me/api/portraits/men/1.jpg"
              alt="User"
              className="avatar1"
            />
            <div className="input-content">
              <strong className="area-box">Jonathan Doe</strong> <br />
              <textarea placeholder="What are your thoughts?" className="area" />
              <div className="input-actions">
               <div> <FaPaperclip  /> Attachment </div>
               <div className="link-button"> <FaLink /> Link </div>
                <div className="emoji-button"><FaSmile /> Emoji </div>
                <button className="post-button">Post</button>
              </div>
            </div>
          </div>

         
          <div className="post-box">
            <div className="post-user">
              <img
                src="https://randomuser.me/api/portraits/men/32.jpg" className="avatar2"/>
              <div>
                <strong >Ralph Edwards</strong>
                <p >1 month ago</p>
              </div>
            </div>
            <p>
              This could be a real app for sure. but you need to pay royalties
              though
            </p>
            <img
              src="https://images.unsplash.com/photo-1515378791036-0648a3ef77b2"
              className="post-image"
            />
            <div className="post-interactions">
              👍 26 &nbsp;&nbsp; 💬 4 <span className="reply">Reply</span>
            </div>
          </div>

          <div className="post-box">
            <div className="post-user">
              <img
                src="https://randomuser.me/api/portraits/men/45.jpg"
                className="avatar2"
              />
              <div>
                <strong>Floyd Miles</strong>
                <p>1 month ago</p>
              </div>
            </div>
            <p>
              Great Work !!! Just to tell you that when I open your prototype I
              was swiping to see what’s on the other slide instead of clicking
              continue.
            </p>
            <img
              src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d"
              className="post-image"
            />
            <div className="post-interactions">
              👍 12 &nbsp;&nbsp; 💬 2 <span className="reply">Reply</span>
            </div>


            {[3, 8].map((likes, idx) => (
              <div key={idx} className="reply-box">
                <div className="reply-user">
                   <img
                src="https://randomuser.me/api/portraits/women/45.jpg"
                className="avatar2"
              />
                  <strong >{idx === 0 ? "Darrell Steward" : "Kathryn Murphy"}</strong>
                  <p >1 month ago</p>
                </div>
                <p>
                  Great Work !!! Just to tell you that when I open your
                  prototype I was swiping to see what’s on the other slide
                  instead of clicking continue.
                </p>
                <div className="reply-interactions">👍 {likes}</div>
                <span className="reply3">Reply</span>
              </div>
            ))}
          </div>

          <div className="post-box">
            <div className="post-user">
              <img
                src="https://randomuser.me/api/portraits/women/45.jpg"
                className="avatar2"
              />
              <div>
                <strong>Bessie Cooper</strong>
                <p>1 month ago</p>
              </div>
            </div>
            <p>
              Awesome work! I love that the case study was laid out as a story
              that was perfectly told. Thanks for sharing.
            </p>
            <div className="multi-image">
              <img src="https://i.pinimg.com/originals/5c/dd/c2/5cddc2b889ab36f39105c62dddf4e439.jpg" />
              <img src="https://tse3.mm.bing.net/th?id=OIP.j9pKwTGR68UFCeoamCRmcgHaE8&pid=Api&P=0&h=180" />
            </div>
            <div className="post-interactions">
              👍 128 &nbsp;&nbsp; 💬 12 <span className="reply">Reply</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    
  );
};



export default ProfilePage;
