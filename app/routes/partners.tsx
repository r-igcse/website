import type { MetaFunction } from "@remix-run/node";
import { motion, AnimatePresence } from "framer-motion";
import { RiDiscordFill } from "@remixicon/react";

export const meta: MetaFunction = () => [
  { title: "Our Partners" },
  { name: "description", content: "Explore our partners and collaborations." }
];

const partners = [
  {
    name: "Mojza",
    url: "https://mojza.org/",
    discordUrl: "https://discord.gg/wQ7rHu9XHt",
    logo: "/mojza.png",
    description: "A 6000+ member academic community for O/A Levels & IGCSE students. Get study queries resolved, join group study sessions, and access curated notes."
  },
  {
    name: "DeezNotes",
    url: "https://deeznotes.framer.website/",
    logo: "/deeznotes.png",
    description: "A curated archive of IGCSE notes, study materials, and tips. Founded by IGCSE alumni, it’s a time-saving resource hub designed to help students excel in their exams."
  },
  {
    name: "StudyHaven",
    url: "https://studyhaven.org/",
    discordUrl: "https://discord.gg/XQkBKdd2jW",
    logo: "/studyhaven.png",
    description: "An all-in-one platform for effective exam preparation, featuring a standout topic-wise worksheet generator that creates custom worksheets from past papers in minutes."
  }
];


const fadeUpVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7 } }
};

export default function Partners() {
  return (
    <div style={{
      background: "linear-gradient(180deg, #0A0A0A 0%, #000000 100%)",
      minHeight: "100vh",
      color: "#FFFFFF",
      fontFamily: "'DM Sans', sans-serif"
    }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&display=swap');
        
        .partners-hero {
          text-align: center;
          padding: 6rem 2rem 4rem;
        }

        .partners-hero h1 {
          font-size: 3.2rem;
          font-weight: 1000;
          margin-bottom: 0.5rem;
          background: -webkit-linear-gradient(45deg, #007BFF, #FFFFFF, #00AFFF);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .partners-hero p {
          color: #A0A0A0;
          font-size: 1.15rem;
          max-width: 650px;
          margin: 0 auto;
          line-height: 1.6;
        }

        .partners-list {
          display: flex;
          flex-direction: column;
          gap: 2rem;
          max-width: 900px;
          margin: 0 auto 6rem auto;
          padding: 0 2rem;
        }

        .partner-card {
          display: flex;
          flex-direction: row;
          align-items: center;
          gap: 2.5rem;
          background: rgba(24, 24, 24, 0.2);
          border-radius: 16px;
          border: 1px solid #232323;
          padding: 2rem;
          transition: background 0.3s ease, border-color 0.3s ease, transform 0.3s ease;
          position: relative;
        }

        .partner-card:hover {
          background: rgba(30, 30, 30, 0.5);
          border-color: #007BFF;
          transform: scale(1.02);
        }

        .partner-logo-container {
          flex-shrink: 0;
        }

        .partner-logo {
          width: 72px;
          height: 72px;
          object-fit: contain;
          transition: transform 0.3s ease;
        }
        
        .partner-card:hover .partner-logo {
            transform: scale(1.1);
        }

        .partner-content {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          text-align: left;
          flex-grow: 1;
        }

        .partner-title {
          font-size: 1.5rem;
          font-weight: 700;
          color: #FFFFFF;
          margin-bottom: 0.5rem;
        }

        .partner-desc {
          color: #B0B0B0;
          font-size: 1rem;
          line-height: 1.6;
          margin-bottom: 1.25rem;
        }
        
        .partner-links {
          display: flex;
          flex-wrap: wrap;
          gap: 0.75rem;
        }

        .partner-link {
          display: inline-flex;
          align-items: center;
          gap: 0.6rem;
          padding: 0.6rem 1.2rem;
          border-radius: 8px;
          font-weight: 500;
          text-decoration: none;
          font-size: 0.95rem;
          transition: all 0.2s ease;
          position: relative;
          overflow: hidden;
          border: 1px solid transparent;
        }
        
        .partner-link .icon {
          width: 18px;
          height: 18px;
        }

        .partner-link span {
          position: relative;
          z-index: 1;
        }

        .partner-link::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(45deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0));
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .partner-link:hover::before {
          opacity: 1;
        }

        .website-link {
          background: linear-gradient(45deg, #007BFF, #00AFFF);
          color: #FFFFFF;
          border: 1px solid #007BFF;
        }

        .website-link:hover {
          background: linear-gradient(45deg, #0056b3, #007BFF);
          transform: translateY(-2px);
          box-shadow: 0 4px 15px rgba(0, 123, 255, 0.2);
        }
        
        .discord-link {
          background: linear-gradient(45deg, #5865F2, #7882f2);
          color: #FFFFFF;
          border: 1px solid #5865F2;
        }

        .discord-link:hover {
          background: linear-gradient(45deg, #4550d7, #5865F2);
          transform: translateY(-2px);
          box-shadow: 0 4px 15px rgba(88, 101, 242, 0.2);
        }

        /* Responsive Design */
        @media (max-width: 768px) {
          .partner-desc {
            text-align: center;
          }
          .partners-hero { padding: 4rem 1.5rem 3rem; }
          .partners-hero h1 { font-size: 2.5rem; }
          .partners-list { padding: 0 1rem; gap: 1.5rem; }

          .partner-card {
            flex-direction: column;
            align-items: center;
            text-align: center;
            gap: 1.5rem;
            padding: 2rem 1.5rem;
          }
          
          .partner-content {
            align-items: center;
          }

          .partner-links {
            justify-content: center;
          }
        }
      `}</style>
      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeUpVariants}
      >
        <section className="partners-hero">
          <h1>Our Collaborative Partners</h1>
          <p>
            We team up with exceptional organizations and communities dedicated to one thing: student success. Discover the partners who share our mission.
          </p>
        </section>
        <div className="partners-list">
          {partners.map((partner) => (
            <div className="partner-card" key={partner.name}>
              <div className="partner-logo-container">
                <img src={partner.logo} alt={partner.name + " logo"} className="partner-logo" />
              </div>
              <div className="partner-content">
                <h3 className="partner-title">{partner.name}</h3>
                <p className="partner-desc">{partner.description}</p>
                <div className="partner-links">
                  <a
                    href={partner.url}
                    className="partner-link website-link"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span>Visit Website</span>
                  </a>
                  {partner.discordUrl && (
                    <a
                      href={partner.discordUrl}
                      className="partner-link discord-link"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <RiDiscordFill />
                      <span>Join Discord</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}