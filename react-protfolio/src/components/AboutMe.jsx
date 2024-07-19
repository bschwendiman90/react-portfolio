import headShotImg from '../assets/images/head-shot.png';

const AboutMe = () => {
        return (
            <section>
        <img src={headShotImg} alt='headshot' />
        <h2>About Me</h2>
        <p>
            I am a full stack web developer with a background in education. I have a passion for learning and creating. I am excited to be a part of the future of technology.
        </p>
    </section>
        )
    
};

export default AboutMe;