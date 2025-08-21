function Education() {
  const education = [
    { qualification: "10th (Secondary)", board: "BSER", percentage: "65.67%" },
    { qualification: "12th (Senior Sec.)", board: "BSER", percentage: "77.60%" },
    { qualification: "Graduation (B.Sc. Maths)", board: "University of Rajasthan", percentage: "58.00%" },
    { qualification: "RSCIT Certificate", board: "Vardhman Mahaveer Open University, Kota", percentage: "64.00%" }
  ]

  return (
    <section id="education" className="bg-gray">
      <div className="container">
        <h2>Educational Qualification</h2>
        <div className="table-container">
          <table>
            <thead>
              <tr>
                <th>Qualification</th>
                <th>Board/University</th>
                <th>Percentage</th>
              </tr>
            </thead>
            <tbody>
              {education.map((edu, index) => (
                <tr key={index}>
                  <td><strong>{edu.qualification}</strong></td>
                  <td>{edu.board}</td>
                  <td>{edu.percentage}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
}

export default Education