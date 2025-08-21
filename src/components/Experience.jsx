function Experience() {
  const experiences = [
    {
      company: "Amazon",
      position: "Back Office",
      description: "Handled back office operations and data management tasks"
    },
    {
      company: "Connect India E-Commerce Pvt. Ltd.",
      position: "Data Management",
      description: "Managed e-commerce data and Excel operations"
    }
  ]

  return (
    <section id="experience" className="bg-white">
      <div className="container">
        <h2>Work Experience</h2>
        <div className="experience-container">
          {experiences.map((exp, index) => (
            <div key={index} className="experience-card">
              <div className="experience-header">
                <div>
                  <h3>{exp.company}</h3>
                  <p className="position">{exp.position}</p>
                </div>
                <div className="experience-number">
                  {index + 1}
                </div>
              </div>
              <p>{exp.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience