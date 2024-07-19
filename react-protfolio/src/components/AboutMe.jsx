import headShotImg from "../assets/images/head-shot.png";

const AboutMe = () => {
  return (
    <div className="section">
      <div className="container">
        <div className="content-section">
          <div className="title">
            <h2>About Me</h2>
          </div>
          <div className="content">
            <h3>
              A passion for Coding and Family
            </h3>
            <p>
            I’m Ben Schwendiman, based in Provo, Utah, where I live with my
              wonderful family—my wife Elicia and our son Kirk. My faith in God
              plays a central role in guiding my life and decisions. Over the
              years, I’ve had the opportunity to own and manage several small
              businesses, including a blacksmith school and a brewed soda
              company. Through these experiences, I've discovered a deep passion
              for coding, and I'm excited to pursue it full-time as I continue
              to explore and grow in this field.
            </p>
          </div>
        </div>
        <div className="image-section">
            <img src={headShotImg} alt="Ben Schwendiman" />
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
