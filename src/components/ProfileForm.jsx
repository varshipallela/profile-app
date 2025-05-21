import React, { useState } from "react";

const initialData = {
  name: "Mike Nielsen",
  storeName: "Maxima Studio",
  location: "United Kingdom",
  currency: "India (INR)",
  email: "info@modernize.com",
  phone: "+9112345 65478",
  address: "814 Howard Street, 120065, India"
};

function ProfileForm() {
  const [formData, setFormData] = useState(initialData);
  const [tempData, setTempData] = useState(initialData);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTempData({ ...tempData, [name]: value });
  };

  const handleSave = () => {
    setFormData(tempData);
    alert("Saved Successfully!");
  };

  const handleCancel = () => {
    setTempData(formData);
  };

  return (
    <div className="profile-form">
      <h3>Personal Details</h3>
      <p>To change your personal detail, edit and save from here</p>
      <div className="form-row">
        <input name="name" value={tempData.name} onChange={handleChange} placeholder="Your Name" />
        <input name="storeName" value={tempData.storeName} onChange={handleChange} placeholder="Store Name" />
      </div>
      <div className="form-row">
        <select name="location" value={tempData.location} onChange={handleChange}>
          <option>United Kingdom</option>
          <option>USA</option>
          <option>India</option>
        </select>
        <select name="currency" value={tempData.currency} onChange={handleChange}>
          <option>India (INR)</option>
          <option>USD</option>
          <option>Euro</option>
        </select>
      </div>
      <div className="form-row">
        <input name="email" value={tempData.email} onChange={handleChange} placeholder="Email" />
        <input name="phone" value={tempData.phone} onChange={handleChange} placeholder="Phone" />
      </div>
      <div className="form-row">
        <input name="address" value={tempData.address} onChange={handleChange} placeholder="Address" />
      </div>
      <div className="buttons">
        <button className="save" onClick={handleSave}>Save</button>
        <button className="cancel" onClick={handleCancel}>Cancel</button>
      </div>
    </div>
  );
}

export default ProfileForm;
