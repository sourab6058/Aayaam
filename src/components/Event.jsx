import React from "react";

export default function Event({ title, text, lang }) {
  return (
    <div className="event">
      <h3 style={{ color: "rgb(245 158 11)" }}>{title}</h3>
      <br />
      <p>{text}</p>
      <div className="event-btn">
        {lang == "ENGLISH" ? "Know More" : "और जाने"}
      </div>
    </div>
  );
}
