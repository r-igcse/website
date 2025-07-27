import { Link, useLocation } from "@remix-run/react";
import {
  RiExternalLinkLine,
  RiNotification4Line,
  RiMenuLine,
  RiCloseLine,
} from "@remixicon/react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import React, { useState, useEffect } from "react";

const linkStyle: React.CSSProperties = {
  color: "#d7dadc",
  textDecoration: "none",
  fontSize: "14px",
  fontWeight: 600,
  padding: "12px 4px",
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
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkIsMobile();
    window.addEventListener("resize", checkIsMobile);
    return () => window.removeEventListener("resize", checkIsMobile);
  }, []);

  const toggleMenu = () => setIsMenuOpen((v) => !v);

  const menuVariants = {
    hidden: {
      x: "100%",
      transition: {
        type: "tween",
        duration: 0.3,
      },
    },
    visible: {
      x: 0,
      transition: {
        type: "tween",
        duration: 0.3,
        staggerChildren: 0.1,
      },
    },
  } as const;

  const overlayVariants = {
    hidden: {
      opacity: 0,
      transition: {
        duration: 0.3,
      },
    },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.3,
      },
    },
  } as const;

  return (
    <nav
      style={{
        width: "100%",
        backgroundColor: "#121212",
        boxSizing: "border-box",
        position: "relative",
        borderBottom: "1px solid #313338",
        padding: "0",
      }}
    >
      <div
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          height: "70px",
          padding: "0 32px",
          fontFamily: "DMSans, sans-serif",
          gap: "0px",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "32px" }}>
          <Link
            to="/"
            title="Home"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              textDecoration: "none",
            }}
          >
            <img src="/favicon.png" alt="Logo" style={{ height: "38px" }} />
            <span
              style={{ color: "#d7dadc", fontSize: "18px", fontWeight: "bold" }}
            >
              <span style={{ fontFamily: "DMSans, sans-serif" }}>r/IGCSE</span>
            </span>
          </Link>

          {!isMobile && (
            <div style={{ display: "flex", alignItems: "center", gap: "18px" }}>
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
          )}
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "18px",
            position: "relative",
          }}
        >
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
                onClick={(e) => e.stopPropagation()}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginBottom: "8px",
                  }}
                >
                  <h2
                    style={{
                      fontFamily: "DMSans, sans-serif",
                      fontSize: "14px",
                      fontWeight: 800,
                      margin: 0,
                    }}
                  >
                    Notifications
                  </h2>
                </div>
                <p
                  style={{
                    fontFamily: "DMSans, sans-serif",
                    fontSize: "12px",
                    margin: 0,
                  }}
                >
                  No notifications yet.
                </p>
              </div>
            )}
          </div>
          {isMobile && (
            <div onClick={toggleMenu} style={{ cursor: "pointer" }}>
              <RiMenuLine className="w-6 h-6" />
            </div>
          )}
        </div>
      </div>

      <AnimatePresence>
        {isMobile && isMenuOpen && (
          <motion.div
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={overlayVariants}
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              width: "100vw",
              height: "100vh",
              background: "rgba(0,0,0,0.7)",
              zIndex: 998,
              display: "flex",
              flexDirection: "column",
              overflow: "hidden",
            }}
            onClick={toggleMenu}
          >
            <motion.div
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={menuVariants}
            style={{
              background: "#121212",
              width: "80vw",
              maxWidth: "250px",
              height: "100vh",
              padding: "56px 24px",
              boxShadow: "0 2px 16px rgba(0,0,0,0.2)",
              display: "flex",
              flexDirection: "column",
              gap: "10px",
              position: "fixed",
              top: 0,
              right: 0,
              zIndex: 999,
            }}
            onClick={(e) => e.stopPropagation()}
            >
              <div
                style={{
                  position: "absolute",
                  top: 24,
                  right: 24,
                  cursor: "pointer",
                }}
                onClick={toggleMenu}
              >
                <RiCloseLine className="w-6 h-6" />
              </div>
              <AnimatedLink to="/" style={{ ...linkStyle, fontSize: "16px" }} isActive={isActive("/")}>
                Home
              </AnimatedLink>
              <AnimatedLink
                to="/resources"
                style={{ ...linkStyle, fontSize: "16px" }}
                isActive={isActive("/resources")}
              >
                Resources
              </AnimatedLink>
              <AnimatedLink
                to="/about"
                style={{ ...linkStyle, fontSize: "16px" }}
                isActive={isActive("/about")}
              >
                About
              </AnimatedLink>
              <AnimatedLink
                to="/partners"
                style={{ ...linkStyle, fontSize: "16px" }}
                isActive={isActive("/partners")}
              >
                Partners
              </AnimatedLink>
              <AnimatedLink
                to="https://discord.com/invite/igcse"
                style={{ ...linkStyle, color: "#5865f2", fontSize: "16px" }}
                isExternal
                showUnderline={false}
              >
                Discord
              </AnimatedLink>
              <AnimatedLink
                to="https://www.reddit.com/r/igcse"
                style={{ ...linkStyle, color: "#FF4500", fontSize: "16px" }}
                isExternal
                showUnderline={false}
              >
                Reddit
              </AnimatedLink>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default NavBar;