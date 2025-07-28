import { Link, useLocation } from "@remix-run/react";
import {
  RiExternalLinkLine,
  RiNotification4Line,
  RiMenuLine,
  RiCloseLine,
  RiDiscordFill,
  RiRedditFill,
} from "@remixicon/react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import React, { useState, useEffect } from "react";

const linkStyle: React.CSSProperties = {
  color: "#9ca3af", // Tailwind gray-400
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
  className,
  iconType,
}: {
  to: string;
  children: React.ReactNode;
  style: React.CSSProperties;
  isInitiallyUnderlined?: boolean;
  hoverColor?: string;
  isExternal?: boolean;
  showUnderline?: boolean;
  isActive?: boolean;
  className?: string;
  iconType?: "discord" | "reddit" | "external";
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

  const renderIcon = () => {
    const iconProps = {
      className: "w-4 h-4",
      style: {
        marginLeft: "8px",
        display: "inline-block",
        verticalAlign: "middle",
      },
    };

    if (iconType === "discord") {
      return <RiDiscordFill {...iconProps} />;
    }
    if (iconType === "reddit") {
      return <RiRedditFill {...iconProps} />;
    }
    if (isExternal) {
      return <RiExternalLinkLine {...iconProps} className="w-3 h-3" />;
    }
    return null;
  };

  // Determine hover color
  let computedHoverColor = "#fff";
  if (iconType === "discord") computedHoverColor = "#5865f2";
  if (iconType === "reddit") computedHoverColor = "#FF4500";
  if (hoverColor) computedHoverColor = hoverColor;

  // If active, color is always white
  const linkColor = isActive ? "#fff" : (isHovered ? computedHoverColor : style.color);

  return (
    <motion.div
      onHoverStart={handleHoverStart}
      onHoverEnd={handleHoverEnd}
      style={{ position: "relative", display: "inline-block" }}
      className={className}
    >
      <Link
        to={to}
        style={{
          ...style,
          color: linkColor,
          fontWeight: isActive || isHovered ? 800 : style.fontWeight,
          display: "flex",
          alignItems: "center",
        }}
        target={isExternal ? "_blank" : "_self"}
        rel={isExternal ? "noopener noreferrer" : ""}
      >
        {children}
        {renderIcon()}
      </Link>
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
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkIsMobile();
    setHasMounted(true);
    window.addEventListener("resize", checkIsMobile);
    return () => window.removeEventListener("resize", checkIsMobile);
  }, []);

  useEffect(() => {
    if (isMobile && isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobile, isMenuOpen]);

  const toggleMenu = () => setIsMenuOpen((v) => !v);

  const menuVariants = {
    hidden: {
      x: "100%",
      transition: {
        type: "tween",
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
      },
    },
    visible: {
      x: 0,
      transition: {
        type: "tween",
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
        staggerChildren: 0.12,
      },
    },
  } as const;

  const overlayVariants = {
    hidden: {
      opacity: 0,
      transition: {
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
      },
    },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  } as const;

  const buttonStyle: React.CSSProperties = {
    padding: "10px 16px",
    borderRadius: "10px",
    textAlign: "center",
    display: "block",
    width: "100%",
    boxSizing: "border-box",
    justifyContent: "center",
  };

  if (!hasMounted) return null;

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
                to="/about"
                style={linkStyle}
                isActive={isActive("/about")}
              >
                About
              </AnimatedLink>              
              <AnimatedLink
                to="/resources"
                style={linkStyle}
                isActive={isActive("/resources")}
              >
                Resources
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
            <AnimatePresence>
              {isMobile && showDropdown && (
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
                  onClick={() => setShowDropdown(false)}
                >
                  <motion.div
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                    variants={menuVariants}
                    style={{
                      background: "#121212",
                      width: "80vw",
                      maxWidth: "300px",
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
                      onClick={() => setShowDropdown(false)}
                    >
                      <RiCloseLine className="w-6 h-6" />
                    </div>
                    <div style={{ marginTop: "1rem" }}>
                      <h2
                        style={{
                          fontFamily: "DMSans, sans-serif",
                          fontSize: "16px",
                          fontWeight: 800,
                          margin: 0,
                          marginBottom: "8px",
                        }}
                      >
                        Notifications
                      </h2>
                      <p
                        style={{
                          fontFamily: "DMSans, sans-serif",
                          fontSize: "14px",
                          margin: 0,
                        }}
                      >
                        No notifications yet.
                      </p>
                    </div>
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>
            {!isMobile && showDropdown && (
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
              <div style={{ marginTop: "1rem", flexGrow: 1, display: "flex", flexDirection: "column", gap: "5px" }}>
                <AnimatedLink
                  to="/"
                  style={{ ...linkStyle, fontSize: "16px" }}
                  isActive={isActive("/")}
                >
                  Home
                </AnimatedLink>
                <AnimatedLink
                  to="/about"
                  style={{ ...linkStyle, fontSize: "16px" }}
                  isActive={isActive("/about")}
                >
                  About
                </AnimatedLink>                
                <AnimatedLink
                  to="/resources"
                  style={{ ...linkStyle, fontSize: "16px" }}
                  isActive={isActive("/resources")}
                >
                  Resources
                </AnimatedLink>
                <AnimatedLink
                  to="/partners"
                  style={{ ...linkStyle, fontSize: "16px" }}
                  isActive={isActive("/partners")}
                >
                  Partners
                </AnimatedLink>
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: "10px", marginBottom: "1rem" }}>
                <AnimatedLink
                  to="https://discord.com/invite/igcse"
                  style={{
                    ...linkStyle,
                    ...buttonStyle,
                    backgroundColor: "#5865f2",
                    color: "#ffffff",
                    fontSize: "16px",
                  }}
                  isExternal
                  showUnderline={false}
                  className="w-full"
                  iconType="discord"
                >
                  Discord
                </AnimatedLink>
                <AnimatedLink
                  to="https://www.reddit.com/r/igcse"
                  style={{
                    ...linkStyle,
                    ...buttonStyle,
                    backgroundColor: "#FF4500",
                    color: "#ffffff",
                    fontSize: "16px",
                  }}
                  isExternal
                  showUnderline={false}
                  className="w-full"
                  iconType="reddit"
                >
                  Reddit
                </AnimatedLink>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default NavBar;