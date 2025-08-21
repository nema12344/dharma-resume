function Hero() {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero-content">
          <h1>Dharmraj Choudhary</h1>
          <p>Professional with expertise in Microsoft Excel and Data Management</p>
          <div className="hero-tags">
            <span className="tag">Hindi</span>
            <span className="tag">English</span>
          </div>
          <div className="hero-buttons">
            <a href="/resume.pdf" download className="btn btn-primary">
              Download Resume
            </a>
            <a href="#contact" className="btn btn-secondary">
              Contact Me
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero