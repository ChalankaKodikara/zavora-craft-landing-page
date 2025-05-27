import React from "react";

function App() {
  const containerStyle = {
    height: "100vh",
    width: "100vw",
    backgroundColor: "#f8f7f3",
    fontFamily: "sans-serif",
    display: "flex",
    flexDirection: "column",
  };

  const headerStyle = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "1.5rem 2rem",
    fontSize: "0.875rem",
    fontWeight: "500",
    color: "#1b2e13",
    letterSpacing: "0.05em",
  };

  const navStyle = {
    display: "flex",
    gap: "1.5rem",
    flexWrap: "wrap",
  };

  const linkStyle = {
    color: "#1b2e13",
    textDecoration: "none",
  };

  const mainStyle = {
    display: "flex",
    flexDirection: "row",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: "2rem",
    gap: "3rem",
    flexWrap: "wrap-reverse",
  };

  const leftImageStyle = {
    maxWidth: "100%",
    width: "750px",
    height: "auto",
  };

  const rightContent = {
    maxWidth: "500px",
    flex: 1,
    minWidth: "280px",
  };

  const headingStyle = {
    fontSize: "2rem",
    fontWeight: "600",
    color: "#1b2e13",
    letterSpacing: "0.1em",
    lineHeight: "1.3",
  };

  const paragraphStyle = {
    marginTop: "1.25rem",
    fontSize: "0.95rem",
    lineHeight: "1.75",
    color: "#2c2c2c",
  };

  const buttonStyle = {
    marginTop: "2rem",
    backgroundColor: "#263e1c",
    color: "#fff",
    padding: "0.6rem 1.75rem",
    borderRadius: "9999px",
    fontSize: "0.875rem",
    fontWeight: "500",
    border: "none",
    cursor: "pointer",
    letterSpacing: "0.05em",
    transition: "background-color 0.3s",
  };

  const handleMouseEnter = (e) => {
    e.target.style.backgroundColor = "#1a2c14";
  };

  const handleMouseLeave = (e) => {
    e.target.style.backgroundColor = "#263e1c";
  };

  return (
    <div style={containerStyle}>
      {/* Header */}
      <header style={headerStyle}>
        <div>REALLY GREAT SITE</div>
        <nav style={navStyle}>
          <a href="#" style={linkStyle}>
            HOME
          </a>
          <a href="#" style={linkStyle}>
            ABOUT
          </a>
          <a href="#" style={linkStyle}>
            SHOP
          </a>
          <a href="#" style={linkStyle}>
            BLOG
          </a>
          <a href="#" style={linkStyle}>
            CONTACT
          </a>
        </nav>
      </header>

      {/* Main Content */}
      <main style={mainStyle}>
        <div>
          <img
            src="/2222222222.png"
            alt="Leaf and CRAFT text"
            style={leftImageStyle}
          />
        </div>
        <div style={rightContent}>
          <h1 style={headingStyle}>
            ZAVORA CRAFT <br /> JEWELLERY STORE
          </h1>
          <p style={paragraphStyle}>
            Zavora Craft & Jewellery Store was born out of a passion for
            preserving Sri Lanka's timeless heritage through artisanal jewelry
            and handcrafted treasures. Rooted in centuries-old traditions, each
            piece we create tells a story etched not just in gold or silver, but
            in soul, history, and pride.
          </p>
          <button
            style={buttonStyle}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            COMING SOON
          </button>
        </div>
      </main>
    </div>
  );
}

export default App;
