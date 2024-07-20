import {useState} from "react";

import weatherImage from "../assets/images/5-day-weather-forecast.png";
import noteTakerImage from "../assets/images/note-taker-app.png";
import jateImage from "../assets/images/pwa-text-editor.png";
import pennyPackerImage from "../assets/images/penny-packer.png";
import techBlogImage from "../assets/images/cms-tech-blog.png";
import nationalParkExplorerImage from "../assets/images/national-park-explorer.png";

const Portfolio = () => {

    const [activeIndex, setActiveIndex] = useState(3); // Initial active image index

    const handleImageClick = (index) => {
      setActiveIndex(index);
    };

  return (
    
    <section className="slider-container">
      <div className="slider-images">
      <div
          className={`slider-img ${activeIndex === 0 ? 'active' : ''}`}
          onClick={() => handleImageClick(0)}
        >
          <img src={weatherImage} alt="Weather Dashboard" />
          <h1 className="imgH1">Weather Dashboard</h1>
          <div className="details">
          <h3>
            Weather Dashboard  
            </h3>
            <a href="https://bschwendiman90.github.io/5-day-weather-forcast/">
              Deployed
            </a>
            <a href="https://github.com/bschwendiman90/personal-portfolio-web-development">
              GitHub
            </a>
          </div>
        </div>
     

        <div
          className={`slider-img ${activeIndex === 1 ? 'active' : ''}`}
          onClick={() => handleImageClick(1)}
        >
        <img src={noteTakerImage} alt="Note Taker" />
        <h1 className="imgH1">Note Taker</h1>
        <div className="details">
        <h3>
            Note Taker  
            </h3>
          <a href="https://note-taker-app-biic.onrender.com/notes">Deployed</a>
          <a href="https://github.com/bschwendiman90/5-day-weather-forcast">
            GitHub
          </a>
        </div>
      </div>

      <div
          className={`slider-img ${activeIndex === 2 ? 'active' : ''}`}
          onClick={() => handleImageClick(2)}
        >
        <img src={jateImage} alt="J.A.T.E Text editor" />
        <h1 className="imgH1">J.A.T.E Text Editor</h1>
        <div className="details">
            <h3>
            J.A.T.E Text Editor  
            </h3>
          <a href="https://pwa-text-editor-tt1g.onrender.com/">Deployed</a>
          <a href="https://github.com/bschwendiman90/PWA-text-editor">GitHub</a>
        </div>
      </div>

      <div
          className={`slider-img ${activeIndex === 3 ? 'active' : ''}`}
          onClick={() => handleImageClick(3)}
        >
        <img src={pennyPackerImage} alt="PennyPacker" />
        <h1 className="imgH1">PennyPacker</h1>
        <div className="details">
        <h3>
            PennyPacker  
            </h3>
          <a href="https://pennypacker.onrender.com/">Deployed</a>
          <a href="https://github.com/bschwendiman90/pennypacker">GitHub</a>
        </div>
      </div>

      <div
          className={`slider-img ${activeIndex === 4 ? 'active' : ''}`}
          onClick={() => handleImageClick(4)}
        >
        <img src={nationalParkExplorerImage} alt="National Park Explorer" />
        <h1 className="imgH1">National Park Explorer</h1>
        <div className="details">
        <h3>
            National Park Explorer  
            </h3>
          <a href="https://sean-k-madigan.github.io/NationalParkExplorer/">
            Deployed
          </a>
          <a href="https://github.com/Sean-K-Madigan/NationalParkExplorer">
            GitHub
          </a>
        </div>
      </div>

      <div
          className={`slider-img ${activeIndex === 5 ? 'active' : ''}`}
          onClick={() => handleImageClick(5)}
        >
        <img src={techBlogImage} alt="The Tech Blog" />
        <h1 className="imgH1">The Tech Blog</h1>
        <div className="details">
        <h3>
            The Tech Blog  
            </h3>
          <a href="https://cms-tech-blog-xgm4.onrender.com/">Deployed</a>
          <a href="https://github.com/bschwendiman90/cms-tech-blog">GitHub</a>
        </div>
      </div>
    </div>
    </section>
    
    

  );
};

export default Portfolio;


