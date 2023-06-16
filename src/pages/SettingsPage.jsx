import React, { useState } from 'react';

const SettingsPage = () => {
  const [settings, setSettings] = useState({
    notifications: true,
    darkMode: false,
    // Add more settings fields as needed
  });

  const handleToggleChange = (e) => {
    setSettings({
      ...settings,
      [e.target.name]: e.target.checked
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Submit settings updates to the backend or API
    // Example code:
    // updateSettings(settings)
    //   .then(data => console.log('Settings updated successfully'))
    //   .catch(error => console.log(error));
  };

  return (
    <div>
      <h1>Settings</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <div className="custom-control custom-switch">
            <input
              type="checkbox"
              id="notifications"
              name="notifications"
              checked={settings.notifications}
              onChange={handleToggleChange}
              className="custom-control-input"
            />
            <label htmlFor="notifications" className="custom-control-label">
              Notifications
            </label>
          </div>
        </div>
        <div className="form-group">
          <div className="custom-control custom-switch">
            <input
              type="checkbox"
              id="darkMode"
              name="darkMode"
              checked={settings.darkMode}
              onChange={handleToggleChange}
              className="custom-control-input"
            />
            <label htmlFor="darkMode" className="custom-control-label">
              Dark Mode
            </label>
          </div>
        </div>
        {/* Add more settings options as needed */}
        <button type="submit" className="btn btn-primary">Save Changes</button>
      </form>
    </div>
  );
};

export default SettingsPage;
