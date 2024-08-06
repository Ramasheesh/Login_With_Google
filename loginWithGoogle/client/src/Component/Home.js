import React from "react";
import "./home.css";

const Home = () => {
  return (
    <>
      <div className="homepage-container">
        <header className="homepage-header">
          <h1>Welcome to Our Site</h1>
          <p>Your gateway to amazing content</p>
          <button className="cta-button">Get Started</button>
        </header>
        <section className="homepage-content">
          <div className="content-card">
            <h2>Feature 1</h2>
            <p>Description of feature 1.</p>
          </div>
          <div className="content-card">
            <h2>Feature 2</h2>
            <p>Description of feature 2.</p>
          </div>
          <div className="content-card">
            <h2>Feature 3</h2>
            <p>Description of feature 3.</p>
          </div>
        </section>
      </div>
    </>
  );
};

export default Home;
