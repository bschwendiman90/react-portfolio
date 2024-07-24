// src/components/Portfolio.js
import{ useState } from 'react';
import SliderItem from './sliderItem';

import weatherImage from '../assets/images/5-day-weather-forecast.png';
import noteTakerImage from '../assets/images/note-taker-app.png';
import jateImage from '../assets/images/pwa-text-editor.png';
import pennyPackerImage from '../assets/images/penny-packer.png';
import techBlogImage from '../assets/images/cms-tech-blog.png';
import nationalParkExplorerImage from '../assets/images/national-park-explorer.png';

const Portfolio = () => {
  const [activeIndex, setActiveIndex] = useState(3);

  const handleImageClick = (index) => {
    setActiveIndex(index);
  };

  const projects = [
    {
      image: weatherImage,
      title: 'Weather Dashboard',
      altText: 'Weather Dashboard',
      deployedLink: 'https://bschwendiman90.github.io/5-day-weather-forcast/',
      githubLink: 'https://github.com/bschwendiman90/personal-portfolio-web-development',
    },
    {
      image: noteTakerImage,
      title: 'Note Taker',
      altText: 'Note Taker',
      deployedLink: 'https://note-taker-app-biic.onrender.com/notes',
      githubLink: 'https://github.com/bschwendiman90/5-day-weather-forcast',
    },
    {
      image: jateImage,
      title: 'J.A.T.E Text Editor',
      altText: 'J.A.T.E Text Editor',
      deployedLink: 'https://pwa-text-editor-tt1g.onrender.com/',
      githubLink: 'https://github.com/bschwendiman90/PWA-text-editor',
    },
    {
      image: pennyPackerImage,
      title: 'PennyPacker',
      altText: 'PennyPacker',
      deployedLink: 'https://pennypacker.onrender.com/',
      githubLink: 'https://github.com/bschwendiman90/pennypacker',
    },
    {
      image: nationalParkExplorerImage,
      title: 'National Park Explorer',
      altText: 'National Park Explorer',
      deployedLink: 'https://sean-k-madigan.github.io/NationalParkExplorer/',
      githubLink: 'https://github.com/Sean-K-Madigan/NationalParkExplorer',
    },
    {
      image: techBlogImage,
      title: 'The Tech Blog',
      altText: 'The Tech Blog',
      deployedLink: 'https://cms-tech-blog-xgm4.onrender.com/',
      githubLink: 'https://github.com/bschwendiman90/cms-tech-blog',
    }
  ];

  return (
    <section className="slider-container">
      <div className="slider-images">
        {projects.map((project, index) => (
          <SliderItem
            key={index}
            image={project.image}
            title={project.title}
            altText={project.altText}
            deployedLink={project.deployedLink}
            githubLink={project.githubLink}
            isActive={activeIndex === index}
            onClick={() => handleImageClick(index)}
          />
        ))}
      </div>
    </section>
  );
};

export default Portfolio;



