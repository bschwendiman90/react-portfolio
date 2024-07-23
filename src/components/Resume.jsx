const Resume = () => {
    const frontEndProficiencies = [
      'HTML',
      'CSS',
      'JavaScript',
      'jQuery',
      'Responsive Design',
      'React',
    ];
  
    const backEndProficiencies = [
      'Node.js',
      'Express',
      'MySQL',
      'MongoDB',
      'GraphQL',
      'REST APIs',
      'Mongoose'
    ];
  
    return (
      <section className="resume-section">
        <h2>Resume</h2>
        <a
          href="../../public/Resume.pdf" // Replace with the actual path to your resume
          download = "resume.pdf"
          className="resume-link"
        >
          Download my <span className="resume-text">resume</span>
        </a>
        <div className="proficiencies">
          <h3>Front-end Proficiencies</h3>
          <ul>
            {frontEndProficiencies.map((proficiency, index) => (
              <li key={index}>{proficiency}</li>
            ))}
          </ul>
          <h3>Back-end Proficiencies</h3>
          <ul>
            {backEndProficiencies.map((proficiency, index) => (
              <li key={index}>{proficiency}</li>
            ))}
          </ul>
        </div>
      </section>
    );
  };
  
  export default Resume;