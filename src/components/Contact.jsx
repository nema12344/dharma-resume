function Contact() {
  return (
    <section id="contact" className="bg-white">
      <div className="container">
        <h2>Contact Me</h2>
        <div className="contact-grid">
          <div className="contact-card">
            <h3>Get In Touch</h3>
            <div className="contact-item">
              <div className="contact-icon">📧</div>
              <div className="contact-info">
                <h4>Email</h4>
                <p>Radheradhe9772@gmail.com</p>
              </div>
            </div>
            <div className="contact-item">
              <div className="contact-icon">📱</div>
              <div className="contact-info">
                <h4>Phone</h4>
                <p>+91 97728 52233</p>
              </div>
            </div>
            <div className="contact-item">
              <div className="contact-icon">📍</div>
              <div className="contact-info">
                <h4>Location</h4>
                <p>Rajasthan, India</p>
              </div>
            </div>
          </div>
          <div className="contact-card">
            <h3>Download Resume</h3>
            <p>Get my complete biodata and resume in PDF format.</p>
            <br />
            <a href="/resume.pdf" download className="btn btn-primary">
              Download PDF Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact