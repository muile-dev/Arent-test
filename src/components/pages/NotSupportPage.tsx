import React from "react";
import "../../styles/NotSupportPage.scss";

const NotSupportPage: React.FC = () => {
  return (
    <div className="not-support-page">
      <h1>Page Not Supported</h1>
      <p>
        We apologize, but the requested page is not supported in your current
        browser or device.
      </p>
      <p>Please try accessing the page using a different browser or device.</p>
    </div>
  );
};

export default NotSupportPage;
