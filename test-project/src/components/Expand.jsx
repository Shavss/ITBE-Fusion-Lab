import React, { useState, useRef } from "react";

const Expand = ({ title = "Section Title", content }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const contentRef = useRef(null);

  const toggleContent = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div style={{ width: "100%", textAlign: "left", padding: "2rem 0" }}>
      {/* Clickable Header */}
      <h3
        onClick={toggleContent}
        style={{
          fontSize: "4rem",
          fontWeight: "bold",
          color: isExpanded ? "#0f01ea" : "#000000",
          marginBottom: "1rem",
          marginLeft: "3rem",
          lineHeight: "4rem",
          cursor: "pointer",
          transition: "color 0.3s ease",
        }}
        onMouseEnter={(e) => (e.target.style.color = "#007BFF")}
        onMouseLeave={(e) =>
          (e.target.style.color = isExpanded ? "#007BFF" : "#000000")
        }
      >
        {title}
      </h3>

      {/* Always Full-Length Underline (0.5px Thick) */}
      <div
        style={{
          height: "0.5px", // ✅ Thinner line
          backgroundColor: "#000",
          width: "100%", // Always full width
          marginLeft: "0",
          transition: "background-color 0.3s ease",
        }}
      ></div>

      {/* Expandable Content with Smooth Animation */}
      <div
        ref={contentRef}
        style={{
          maxHeight: isExpanded ? `${contentRef.current?.scrollHeight}px` : "0px",
          overflow: "hidden",
          opacity: isExpanded ? 1 : 0,
          transition: "max-height 0.1s ease-in-out, opacity 0.1s ease-in-out",
          fontSize: "0.9rem",
          lineHeight: "1.5",
          color: "#333",
          maxWidth: "800px",
          marginLeft: "3rem",
          marginTop: "1rem",
          
        }}
      >
        {content}
      </div>

      {/* Bottom Underline (Appears Smoothly When Expanded, 0.5px Thick) */}
      <div
        style={{
          height: "0.5px", // ✅ Thinner line
          backgroundColor: "#000",
          width: "100%", // Full width
          marginTop: "1rem",
          opacity: isExpanded ? 1 : 0, // Fade in effect
          transition: "opacity 0.1s ease-in-out",
          
        }}
      ></div>
    </div>
  );
};

export default Expand;
