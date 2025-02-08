import React, { useState, useRef } from "react";

const Expand = ({ title = "Section Title", content, image }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const contentRef = useRef(null);

  const toggleContent = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div style={{ width: "139%", textAlign: "left", padding: "1rem 0" }}>
      {/* Clickable Header */}
      <h3
        onClick={toggleContent}
        style={{
          fontSize: "3rem",
          fontWeight: "bold",
          color: isExpanded ? "#0f01ea" : "#000000",
          marginBottom: "1rem",
          marginLeft: "0rem",
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

      {/* Always Full-Length Underline */}
      <div
        style={{
          height: "0.5px",
          backgroundColor: "#000",
          width: "100%",
          marginLeft: "0",
          transition: "background-color 0.3s ease",
        }}
      ></div>

      {/* Expandable Content - Two-Column Layout */}
      <div
        ref={contentRef}
        style={{
          maxHeight: isExpanded ? `${contentRef.current?.scrollHeight}px` : "0px",
          overflow: "hidden",
          opacity: isExpanded ? 1 : 0,
          transition: "max-height 0.3s ease-in-out, opacity 0.3s ease-in-out",
          marginTop: "1rem",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "flex-start",
            justifyContent: "space-between",
            gap: "2rem",
          }}
        >
          {/* Left Side - Text */}
          <div style={{ flex: 1, textAlign: "left", maxWidth: "40%" }}>
            <p style={{ fontSize: "0.9rem", lineHeight: "1.6", color: "#333" }}>
              {content}
            </p>
          </div>

          {/* Right Side - Image */}
          {image && (
            <div style={{ flex: 1, maxWidth: "60%" }}>
              <img
                src={image}
                alt={title}
                style={{
                  width: "100%",
                  maxHeight: "350px",
                  objectFit: "cover",
                  borderRadius: "0px",
                  opacity: isExpanded ? 1 : 0,
                  transition: "opacity 0.5s ease-in-out",
                }}
              />
            </div>
          )}
        </div>
      </div>

      {/* Bottom Underline (Appears Smoothly When Expanded) */}
      <div
        style={{
          height: "0.5px",
          backgroundColor: "#000",
          width: "100%",
          marginTop: "1rem",
          opacity: isExpanded ? 1 : 0,
          transition: "opacity 0.3s ease-in-out",
        }}
      ></div>
    </div>
  );
};

export default Expand;
