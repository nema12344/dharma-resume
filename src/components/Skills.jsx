function Skills() {
  const skills = [
    { name: "Microsoft Excel", level: 90 },
    { name: "VLOOKUP Formula", level: 85 },
    { name: "Data Management", level: 80 },
    { name: "Computer Operations", level: 75 }
  ]

  return (
    <section id="skills" className="bg-gray">
      <div className="container">
        <h2>Technical Skills</h2>
        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div key={index} className="skill-card">
              <div className="skill-header">
                <span className="skill-name">{skill.name}</span>
                <span className="skill-percentage">{skill.level}%</span>
              </div>
              <div className="progress-bar">
                <div 
                  className="progress-fill"
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills