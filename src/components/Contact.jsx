import React, { useState } from 'react';
import '../css/contact.css';

const Contact = () => {
  const [showTip, setShowTip] = useState(false);

  const handleFormFocus = () => {
    setShowTip(true); // Show tooltip on focus
  };

  const handleFormBlur = () => {
    setShowTip(false); // Hide tooltip when focus is lost
  };

  return (
    <>
      <div className="container">
        <div className="contact">
          <div className="heading mb-4">
            <span>Get in Touch</span>
          </div>
          <div className="col-md-6 col-10">
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                placeholder="Name.."
                onFocus={handleFormFocus}
                onBlur={handleFormBlur}
              />
            </div>
            <div className="form-group">
              <input
                type="email"
                className="form-control"
                placeholder="Email.."
                onFocus={handleFormFocus}
                onBlur={handleFormBlur}
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                placeholder="Contact.."
                onFocus={handleFormFocus}
                onBlur={handleFormBlur}
              />
            </div>
            <div className="form-group">
              <textarea
                placeholder="Message"
                className="form-control"
                rows={7}
                onFocus={handleFormFocus}
                onBlur={handleFormBlur}
              ></textarea>
              <button
                className="btn-blue mt-5 shadow-lg f-btn justify-content-center"
                onClick={() => alert("This is a dummy box and will not actually send a message.")}
              >
                Message
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Tooltip */}
      {showTip && (
        <div className="tooltip">
          This is a dummy form and will not actually send a message.
        </div>
      )}
    </>
  );
};

export default Contact;