import { Link, useLocation } from "@remix-run/react";
import { RiExternalLinkLine, RiNotification4Line } from "@remixicon/react";
import { motion } from "framer-motion";
import React, { useState } from "react";

const linkStyle: React.CSSProperties = {
  color: "#d7dadc",
  textDecoration: "none",
  fontSize: "14px",
  fontWeight: 500,
  padding: "8px 4px",
  fontFamily: "DMSans, sans-serif",
  position: "relative",
  display: "inline-block",
};

const AnimatedLink = ({
  to,
  children,
  style,
  isInitiallyUnderlined,
  hoverColor,
  isExternal,
  showUnderline = true,
  isActive = false,
}: {
  to: string;
  children: React.ReactNode;
  style: React.CSSProperties;
  isInitiallyUnderlined?: boolean;
  hoverColor?: string;
  isExternal?: boolean;
  showUnderline?: boolean;
  isActive?: boolean;
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [lastDirection, setLastDirection] = useState<"left" | "right">("left");

  const underlineVariants = {
    hiddenLeft: { scaleX: 0, transformOrigin: "left" },
    visibleLeft: {
      scaleX: 1,
      transformOrigin: "left",
      transition: { duration: 0.3 },
    },
    hiddenRight: { scaleX: 0, transformOrigin: "right" },
    visibleRight: {
      scaleX: 1,
      transformOrigin: "right",
      transition: { duration: 0.3 },
    },
  };

  const handleHoverStart = () => {
    setIsHovered(true);
    setLastDirection("left");
  };

  const handleHoverEnd = () => {
    setIsHovered(false);
    setLastDirection("right");
  };

  return (
    <motion.div
      onHoverStart={handleHoverStart}
      onHoverEnd={handleHoverEnd}
      style={{ position: "relative", display: "inline-block" }}
    >
      <Link
        to={to}
        style={{
          ...style,
          color: isHovered && hoverColor ? hoverColor : style.color,
          fontWeight: isActive ? 800 : style.fontWeight,
        }}
        target={isExternal ? "_blank" : "_self"}
        rel={isExternal ? "noopener noreferrer" : ""}
      >
        {children}
        {isExternal && (
          <RiExternalLinkLine
            className="w-3 h-3"
            style={{
              marginLeft: "4px",
              display: "inline-block",
              verticalAlign: "middle",
            }}
          />
        )}
      </Link>
      {showUnderline && !isActive && (
        <motion.div
          style={{
            position: "absolute",
            bottom: "5px",
            left: "0",
            right: "0",
            height: "2px",
            backgroundColor:
              isHovered && hoverColor ? hoverColor : "currentColor",
          }}
          initial={isInitiallyUnderlined ? "visibleLeft" : "hiddenLeft"}
          animate={
            isHovered
              ? "visibleLeft"
              : lastDirection === "right"
              ? "hiddenRight"
              : "hiddenLeft"
          }
          variants={underlineVariants}
        />
      )}
    </motion.div>
  );
};

const NavBar = () => {
  const location = useLocation();
  const isActive = (path: string) => {
    if (path === "/")
      return location.pathname === "/" || location.pathname === "/home";
    return location.pathname === path;
  };

  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <nav
      style={{
        width: "100%",
        height: "40px",
        backgroundColor: "#121212",
        display: "flex",
        alignItems: "center",
        padding: "0 12px",
        justifyContent: "space-between",
        fontFamily: "DMSans, sans-serif",
        boxSizing: "border-box",
        position: "relative",
        borderBottom: "1px solid #313338",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
        <Link
          to="/"
          title="Home"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "4px",
            textDecoration: "none",
          }}
        >
          <img src="/favicon.png" alt="Logo" style={{ height: "28px" }} />
          <span
            style={{ color: "#d7dadc", fontSize: "15px", fontWeight: "bold" }}
          >
            <span style={{ fontFamily: "DMSans, sans-serif" }}>r/IGCSE</span>
          </span>
        </Link>

        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <AnimatedLink to="/" style={linkStyle} isActive={isActive("/")}>
            Home
          </AnimatedLink>
          <AnimatedLink
            to="/resources"
            style={linkStyle}
            isActive={isActive("/resources")}
          >
            Resources
          </AnimatedLink>
          <AnimatedLink
            to="/about"
            style={linkStyle}
            isActive={isActive("/about")}
          >
            About
          </AnimatedLink>
          <AnimatedLink
            to="/partners"
            style={linkStyle}
            isActive={isActive("/partners")}
          >
            Partners
          </AnimatedLink>
          <AnimatedLink
            to="https://discord.com/invite/igcse"
            style={linkStyle}
            hoverColor="#5865f2"
            isExternal
            showUnderline={false}
          >
            Discord
          </AnimatedLink>
          <AnimatedLink
            to="https://www.reddit.com/r/igcse"
            style={linkStyle}
            hoverColor="#FF4500"
            isExternal
            showUnderline={false}
          >
            Reddit
          </AnimatedLink>
        </div>
      </div>
      
      <div style={{ display: "flex", alignItems: "center", gap: "12px", position: "relative" }}>
        <div style={{ position: "relative" }}>
          <RiNotification4Line
            className="w-4 h-4"
            style={{ cursor: "pointer" }}
            onClick={() => setShowDropdown((v) => !v)}
            tabIndex={0}
            aria-label="Notifications"
          />
          {showDropdown && (
            <div
              style={{
                position: "absolute",
                top: "calc(100% + 8px)",
                right: 0,
                background: "#121212",
                color: "#d7dadc",
                marginTop: "6px",
                borderRadius: "8px",
                minWidth: "300px",
                boxShadow: "0 2px 16px rgba(0,0,0,0.2)",
                zIndex: 100,
                padding: "16px 12px 16px 12px",
              }}
              onClick={e => e.stopPropagation()}
            >
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "8px" }}>
                <h2 style={{ fontFamily: "DMSans, sans-serif", fontSize: "14px", fontWeight: 800, margin: 0 }}>Notifications</h2>
              </div>
              <p style={{ fontFamily: "DMSans, sans-serif", fontSize: "12px", margin: 0 }}>No notifications yet.</p>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default NavBar;