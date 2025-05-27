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
    padding: "1.5rem 3rem",
    fontSize: "0.875rem",
    fontWeight: "500",
    color: "#1b2e13",
    letterSpacing: "0.05em",
  };

  const navStyle = {
    display: "flex",
    gap: "2rem",
  };

  const linkStyle = {
    color: "#1b2e13",
    textDecoration: "none",
  };

  const mainStyle = {
    display: "flex",
    flex: 1,
    alignItems: "center",
    justifyContent: "space-between",
    padding: "2rem 4rem",
  };

  const leftImageStyle = {
    maxWidth: "1200px",
    width: "100%",
    height: "auto",
  };

  const rightContent = {
    flex: 1,
    paddingLeft: "3rem",
    maxWidth: "600px",
  };

  const headingStyle = {
    fontSize: "2rem",
    fontWeight: "600",
    color: "#1b2e13",
    letterSpacing: "0.1em",
  };

  const paragraphStyle = {
    marginTop: "1.5rem",
    fontSize: "0.9rem",
    lineHeight: "1.75",
    color: "#2c2c2c",
  };

  const buttonStyle = {
    marginTop: "2rem",
    backgroundColor: "#263e1c",
    color: "#fff",
    padding: "0.5rem 1.5rem",
    borderRadius: "9999px",
    fontSize: "0.875rem",
    fontWeight: "500",
    border: "none",
    cursor: "pointer",
    letterSpacing: "0.05em",
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

      {/* Main Section */}
      <main style={mainStyle}>
        {/* Left: PNG Image */}
        <div>
          <img
            src="/2222222222.png"
            alt="Leaf and CRAFT text"
            style={leftImageStyle}
          />
        </div>

        {/* Right */}
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
            onMouseEnter={(e) => (e.target.style.backgroundColor = "#1a2c14")}
            onMouseLeave={(e) => (e.target.style.backgroundColor = "#263e1c")}
          >
            COMING SOON
          </button>
        </div>
      </main>
    </div>
  );
}

export default App;
