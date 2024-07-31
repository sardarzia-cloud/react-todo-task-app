import React, { useState, useEffect } from "react";
import "./WelcomeNote.css";

const WelcomeNote = () => {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShow(false), 3000); // Change the timeout duration as needed
    return () => clearTimeout(timer);
  }, []);

  return show ? (
    <div className="welcome-note">Welcome to the Task App!</div>
  ) : null;
};

export default WelcomeNote;
