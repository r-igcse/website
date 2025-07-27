import type { MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";
import NavBar from "~/components/NavBar";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { RiDiscordFill, RiRedditFill, RiCloseLine } from "@remixicon/react";
import { RiBookOpenLine, RiGroupLine, RiGift2Line, RiFileAddLine, RiShieldLine, RiEditBoxLine } from "@remixicon/react"

const styles = `
    .about-us-container {
        padding: 0 1.5rem;
        max-width: 1100px;
        margin: 0 auto;
        animation: fadeIn 1s ease-in-out;
    }

    .hero-section {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        min-height: 50vh;
        text-align: center;
        margin-top: 2rem;
        margin-bottom: 2rem;
    }

    .hero-text h1 {
        font-size: 2.7rem;
        font-weight: 1000;
        line-height: 1.2;
        color: #FFFFFF;
        margin-bottom: 2rem;
        max-width: 800px;
    }

    .hero-text p {
        font-size: 1.1rem;
        color: #A0A0A0; /* Lighter grey for subtitle */
        max-width: 650px;
        margin: 0 auto;
    }

    .divider {
        border: 0;
        height: 1px;
        background: #2A2A2A;
        margin: 2rem 0;
    }

    .grid-container {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); /* More robust responsive grid */
        gap: 2rem;
        margin-top: -4rem;
    }

    .card {
        background: #121212; /* Slightly different from main background */
        padding: 2rem;
        border-radius: 12px;
        border: 1px solid #2A2A2A;
        transition: border-color 0.3s ease, transform 0.3s ease;
    }

    .card:hover {
        transform: translateY(-5px);
        border-color: #007BFF; /* Accent color on hover */
    }
    
    .card-icon {
        color: #007BFF; /* Accent color */
        margin-bottom: 1.5rem;
    }

    .card h3 {
        font-size: 1.4rem;
        font-weight: 600;
        margin-bottom: 0.75rem;
        color: #EFEFEF;
    }

    .card p {
        color: #888888; /* Softer grey for body text */
        line-height: 1.6;
    }

    .contribution-section {
        text-align: center;
        margin: 5rem auto;
        padding: 4rem 2rem;
        background-color: #121212;
        border-radius: 12px;
        border: 1px solid #2A2A2A;
    }

    .contribution-section h2 {
        font-size: 1.5rem;
        font-weight: 1000;
        margin-bottom: 1rem;
    }
    
    .contribution-section .subtitle {
        color: #A0A0A0;
        max-width: 650px;
        margin: 0 auto 3rem auto;
        font-size: 0.8rem;
        line-height: 1.6;
    }

    .contribution-wrapper {
        display: flex;
        flex-direction: column;
        gap: 2rem;
        align-items: center;
        justify-content: center;
    }

    .contribution-card {
      background: #090909; /* Darker than section bg */
      padding: 2rem;
      border-radius: 10px;
      border: 1px solid #333;
      width: 100%;
      max-width: 400px;
      text-align: left;
      transition: border-color 0.3s ease;
    }
    
    .contribution-card:hover {
        border-color: #007BFF;
    }
    
    .contribution-card h4 {
      font-size: 1.5rem;
      margin-bottom: 0.5rem;
      font-weight: 600;
      color: #EFEFEF;
    }
    
    .contribution-card p {
      color: #888888;
      margin-bottom: 1.5rem;
    }

    .cta-button {
        display: inline-block;
        padding: 0.8rem 1.8rem;
        color: #FFFFFF;
        text-decoration: none;
        font-weight: 600;
        border-radius: 8px;
        transition: background-color 0.3s ease, transform 0.3s ease;
        background-color: #007BFF;
        border: 2px solid transparent;
    }
    
    .cta-button.secondary {
        background-color: transparent;
        border: 2px solid #333;
        color: #EFEFEF;
    }

    .cta-button:hover {
        transform: scale(1.03);
    }

    .cta-button.primary:hover {
        background-color: #0056b3; /* Darker blue on hover */
    }

    .cta-button.secondary:hover {
        border-color: #007BFF;
        color: #007BFF;
    }

    .modmail-social-card {
        background: #1a1a1a;
        border-radius: 12px;
        padding: 1.5rem;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        text-decoration: none;
        color: #EFEFEF;
        border: 1px solid #333;
        transition: all 0.3s ease;
    }

    .modmail-social-card:hover {
        transform: translateY(-5px);
        border-color: #007BFF;
        background: #222222;
    }

    .modmail-social-card .social-icon {
        margin-bottom: 1rem;
    }
    
    .modmail-social-card .social-text {
        font-weight: 600;
        font-size: 1rem;
    }
    

    /* --- Responsive Adjustments --- */
    @media (max-width: 768px) {
        .hero-text h1 {
            font-size: 2.5rem;
        }
        .hero-text p {
            font-size: 1.1rem;
        }
        .contribution-wrapper {
            flex-direction: column;
        }
    }

    @media (min-width: 768px) {
        .contribution-wrapper {
            flex-direction: row;
            align-items: stretch; /* Makes cards equal height */
        }
    }

    @keyframes fadeIn {
        from { opacity: 0; transform: translateY(15px); }
        to { opacity: 1; transform: translateY(0); }
    }
`;

export const meta: MetaFunction = () => {
    return [
        { title: "About Us | IGCSE Repository" },
        { name: "description", content: "Learn about our mission to provide free, high-quality, community-driven IGCSE, O-level, and A-level resources." }
    ];
};

function About() {
    const [showModmailModal, setShowModmailModal] = useState(false);

    // Modal animation variants
    const overlayVariants = {
      hidden: { opacity: 0 },
      visible: { opacity: 1, transition: { duration: 0.3 } },
      exit: { opacity: 0, transition: { duration: 0.2 } }
    };
    const modalVariants = {
      hidden: { scale: 0.95, opacity: 0, y: 30 },
      visible: { scale: 1, opacity: 1, y: 0, transition: { duration: 0.3 } },
      exit: { scale: 0.95, opacity: 0, y: 30, transition: { duration: 0.2 } }
    };

    return (
        <div style={{
            fontFamily: "DMSans, sans-serif",
            background: "#090909", // Main background
            minHeight: "100vh",
            color: "#EFEFEF"
        }}>
            <style>{styles}</style>
            <NavBar />
            <main className="about-us-container">
                <section className="hero-section">
                    <div className="hero-text" aria-label="About Repository Information">
                        <h1>Information about our Repository</h1>
                        <p>We are a community-driven initiative building a world-class library of free IGCSE, O-level, and A-level resources. Created for students, by students.</p>
                    </div>
                </section>

                <div className="grid-container">
                    <div className="card">
                        <div className="card-icon"><RiBookOpenLine /></div>
                        <h3>Our Mission</h3>
                        <p>To dismantle financial barriers in education by providing a comprehensive, completely free repository of resources for CAIE learners worldwide.</p>
                    </div>

                    <div className="card">
                        <div className="card-icon"><RiGroupLine/></div>
                        <h3>Community Powered</h3>
                        <p>Our entire collection is crowdsourced from generous students and educators on Discord and Reddit. A true testament to collaborative learning.</p>
                    </div>

                    <div className="card">
                        <div className="card-icon"><RiGift2Line /></div>
                        <h3>Always Free</h3>
                        <p>Every resource is, and always will be, free of charge. This is our non-negotiable promise to the student community we serve.</p>
                    </div>

                    <div className="card">
                        <div className="card-icon"><RiShieldLine /></div>
                        <h3>Piracy-Free Zone</h3>
                        <p>We are committed to respecting intellectual property. If you believe any content is copyrighted, contact us for its immediate review and removal.</p>
                    </div>

                    <div className="card">
                        <div className="card-icon"><RiFileAddLine /></div>
                        <h3>Your Content, Your Control</h3>
                        <p>If you've shared work with us and wish for it to be removed, simply reach out with proof of creation. We respect your ownership completely.</p>
                    </div>

                    <div className="card">
                        <div className="card-icon"><RiEditBoxLine /></div>
                        <h3>Quality First</h3>
                        <p>We accept high-quality, free resources that provide immediate value. Submissions are reviewed to ensure they meet our community's standards.</p>
                    </div>
                </div>

                <hr className="divider" />

                <section className="contribution-section">
                    <h2>Become a Contributor</h2>
                    <p className="subtitle">You can help us grow our library of free resources. Choose the contribution method that's right for you.</p>
                    <div className="contribution-wrapper">

                        <div className="contribution-card">
                           <h4>Create New Resources</h4>
                           <p>Join a team to draft and produce new content like notes or guide booklets from scratch.</p>
                           {/* Replace with your actual form link */}
                           <a
                             href="https://forms.r-igcse.study/f/resource-contribution"
                             className="cta-button primary"
                             target="_blank"
                             rel="noopener noreferrer"
                           >
                               Fill In The Form
                           </a>
                        </div>
                        
                        <div style={{ display: "flex", justifyContent: "center" }}>
                        <div className="contribution-card">
                           <h4>Donate Finished Resources</h4>
                           <p>Already have complete notes, flashcards, or guides you'd like to share with the community?</p>
                            <button
                              className="cta-button secondary"
                              type="button"
                              onClick={() => setShowModmailModal(true)}
                            >
                                Send us a Modmail
                            </button>
                        </div>
                        </div>

                    </div>
                </section>

                {/* Modal for Modmail options */}
                <AnimatePresence>
                  {showModmailModal && (
                    <motion.div
                      className="modmail-overlay"
                      initial="hidden"
                      animate="visible"
                      exit="exit"
                      variants={overlayVariants}
                      style={{
                        position: "fixed",
                        top: 0,
                        left: 0,
                        width: "100vw",
                        height: "100vh",
                        background: "rgba(0,0,0,0.85)",
                        zIndex: 9999,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        padding: "1rem"
                      }}
                      onClick={() => setShowModmailModal(false)}
                    >
                      <motion.div
                        className="modmail-modal"
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        variants={modalVariants}
                        style={{
                          background: "#111111",
                          border: "0.1rem solid #191919",
                          borderRadius: "18px",
                          boxShadow: "0 8px 32px rgba(0,0,0,0.5)",
                          padding: "2.5rem",
                          width: "80%",
                          maxWidth: "500px",
                          position: "relative",
                        }}
                        onClick={e => e.stopPropagation()}
                      >
                        <h3 style={{ textAlign: "center", marginBottom: "0.5rem", fontSize: "1.5rem", fontWeight: 700 }}>Contact Us</h3>
                        <p style={{ textAlign: "center", color: "#A0A0A0", marginTop: 0, marginBottom: "2.5rem" }}>
                            Choose your preferred platform to send us a modmail.
                        </p>
                        <div style={{ display: "flex", gap: "1.5rem", justifyContent: "center", alignItems: "center", flexWrap: "wrap" }}>
                            <a
                              href="https://discord.com/users/861445044790886467"
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="modmail-social-card"
                            >
                              <div className="social-icon">
                                <RiDiscordFill style={{ color: "#5865F2", fontSize: "48px" }} />
                              </div>
                              <span className="social-text">Contact on Discord</span>
                            </a>
                            <a
                              href="https://www.reddit.com/message/compose?to=/r/igcse"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="modmail-social-card"
                            >
                              <div className="social-icon">
                                <RiRedditFill style={{ color: "#FF4500", fontSize: "48px" }} />
                              </div>
                              <span className="social-text">Contact on Reddit</span>
                            </a>
                        </div>
                        <button
                            onClick={() => setShowModmailModal(false)}
                            style={{
                                position: "absolute",
                                top: "1rem",
                                right: "1rem",
                                background: "transparent",
                                border: "none",
                                color: "#A0A0A0",
                                cursor: "pointer",
                                padding: "0.5rem"
                            }}
                            aria-label="Close modal"
                        >
                            <RiCloseLine size={24} />
                        </button>
                      </motion.div>
                    </motion.div>
                  )}
                </AnimatePresence>
            </main>
        </div>
    );
}

export default About;