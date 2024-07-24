

const SliderItem = ({ image, title, altText, deployedLink, githubLink, isActive, onClick }) => {
  return (
    <div
      className={`slider-img ${isActive ? 'active' : ''}`}
      onClick={onClick}
      style={{ position: 'relative' }}
    >
      <img src={image} alt={altText} />
      <h1 className="imgH1">{title}</h1>
      <div className="details">
        <h3>{title}</h3>
        <a href={deployedLink}>Deployed</a>
        <a href={githubLink}>GitHub</a>
      </div>
    </div>
  );
};

export default SliderItem;
