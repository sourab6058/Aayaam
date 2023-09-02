import React, { useEffect, useRef } from "react";

export default function Nav({ lang, setLang }) {
  const toggleBtn = useRef(null);

  useEffect(() => {
    toggleBtn.current.style.left = lang == "ENGLISH" ? "0px" : "38px";
  }, [lang]);

  return (
    <div className="nav">
      <div className="nav-logo">
        <a href="https://www.aayaamnitt.com/" target="_blank">
          {lang == "ENGLISH" ? <>Aayaam</> : <>आयाम</>}
        </a>
      </div>
      <div className="nav-links">
        <a
          href="http://example.com"
          target="_blank"
          rel="noopener noreferrer"
          className="link-hover"
        >
          {lang == "ENGLISH" ? <>Home</> : <>होम पेज</>}
        </a>
        <a
          href="http://example.com"
          target="_blank"
          rel="noopener noreferrer"
          className="link-hover"
        >
          {lang == "ENGLISH" ? <>About Us</> : <>हमारे बारे में</>}
        </a>
        <a
          href="http://example.com"
          target="_blank"
          rel="noopener noreferrer"
          className="link-hover"
        >
          {lang == "ENGLISH" ? <>Highlights</> : <>हाइलाइट</>}
        </a>
        <a
          href="http://example.com"
          target="_blank"
          rel="noopener noreferrer"
          className="link-hover"
        >
          {lang == "ENGLISH" ? <>Events</> : <>आयोजन</>}
        </a>
        <a
          href="http://example.com"
          target="_blank"
          rel="noopener noreferrer"
          className="link-hover"
        >
          {lang == "ENGLISH" ? <>Magazine</> : <>पत्रिका</>}
        </a>
        <a
          href="http://example.com"
          target="_blank"
          rel="noopener noreferrer"
          className="link-hover"
        >
          {lang == "ENGLISH" ? <>Members</> : <>सदस्यों</>}
        </a>
        <a
          href="http://example.com"
          target="_blank"
          rel="noopener noreferrer"
          className="link-hover"
        >
          {lang == "ENGLISH" ? <>Contact Us</> : <>संपर्क करें</>}
        </a>
      </div>
      <div className="funs">
        <div
          className="lang-toggle"
          onClick={() => setLang(lang == "ENGLISH" ? "HINDI" : "ENGLISH")}
        >
          <div className="round-radio" ref={toggleBtn}></div>
          <div
            className="night-icon"
            style={{ color: lang == "ENGLISH" ? "black" : "white", zIndex: 10 }}
          >
            EN
          </div>
          <div
            className="day-icon"
            style={{ color: lang == "HINDI" ? "black" : "white", zIndex: 10 }}
          >
            हिं
          </div>
        </div>
      </div>
    </div>
  );
}
