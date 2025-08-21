function About() {
  return (
    <section id="about" className="bg-white">
      <div className="container">
        <h2>About Me</h2>
        <div className="about-grid">
          <div className="info-card">
            <h3>Personal Information</h3>
            <p><strong>Father's Name:</strong> Jhutharam Choudhary</p>
            <p><strong>Mother's Name:</strong> Kaushalya Devi</p>
            <p><strong>Date of Birth:</strong> 05 July 1999</p>
            <p><strong>Languages:</strong> Hindi, Basic English</p>
          </div>
          <div className="info-card">
            <h3>Key Strengths</h3>
            <ul className="strengths-list">
              <li>
                <span className="bullet"></span>
                Good communication skills
              </li>
              <li>
                <span className="bullet"></span>
                Team player
              </li>
              <li>
                <span className="bullet"></span>
                Polite and well-behaved personality
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About