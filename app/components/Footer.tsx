export default function Footer() {
  return (
    <footer
      style={{
        width: "100%",
        background: "#101010",
        borderTop: "1px solid #232323",
        fontFamily: "DM Sans, sans-serif",
      }}
    >
      <style>{`
        .footer-link {
          color: #b0b0b0;
          display: flex;
          align-items: center;
          text-decoration: none;
          font-weight: 700;
          font-size: 0.8rem;
          gap: 6px;
          transition: color 0.2s;
        }
        .footer-link.discord:hover {
          color: #5865f2;
        }
        .footer-link.reddit:hover {
          color: #FF4500;
        }
      `}</style>
      <div
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          height: "50px",
          display: "flex",
          alignItems: "center",
          padding: "0 32px",
          color: "#b0b0b0",
          fontSize: "0.8rem",
          fontWeight: 800,
          letterSpacing: 0.2,
          justifyContent: "space-between",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "18px" }}>
          <a
            href="https://discord.com/invite/igcse"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-link discord"
          >
            Discord
          </a>
          <a
            href="https://www.reddit.com/r/igcse"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-link reddit"
          >
            Reddit
          </a>
        </div>
        <div style={{ textAlign: "right" }}>
          © r/IGCSE Resources {new Date().getFullYear()}
        </div>
      </div>
    </footer>
  );
}
