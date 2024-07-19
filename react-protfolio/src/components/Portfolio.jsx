import React from 'react';

const projects = [
    { title: 'Project 1', imgSrc: '/path/to/image1.jpg', appLink: 'http://deployed-app1.com', repoLink: 'http://github.com/repo1', description: 'This is a description of project 1' },
    { title: 'Project 1', imgSrc: '/path/to/image1.jpg', appLink: 'http://deployed-app1.com', repoLink: 'http://github.com/repo1', description: 'This is a description of project 1' },
    { title: 'Project 1', imgSrc: '/path/to/image1.jpg', appLink: 'http://deployed-app1.com', repoLink: 'http://github.com/repo1', description: 'This is a description of project 1' },
    { title: 'Project 1', imgSrc: '/path/to/image1.jpg', appLink: 'http://deployed-app1.com', repoLink: 'http://github.com/repo1', description: 'This is a description of project 1' },
    { title: 'Project 1', imgSrc: '/path/to/image1.jpg', appLink: 'http://deployed-app1.com', repoLink: 'http://github.com/repo1', description: 'This is a description of project 1' },
    { title: 'Project 1', imgSrc: '/path/to/image1.jpg', appLink: 'http://deployed-app1.com', repoLink: 'http://github.com/repo1', description: 'This is a description of project 1' },
    ];

    const Portfolio = () => {
        return (
        <section>
            <h2>Portfolio</h2>
            <div className='projects'>
                {projects.map((project, index) => (
                    <div key={index} className='project'>
                        <img src={project.imgSrc} alt={project.title} />
                        <h3>{project.title}</h3>
                        <p>{project.description}</p>
                        <a href={project.appLink}>Deployed</a>
                        <a href={project.repoLink}>GitHub</a>
                    </div>
                ))}
            </div>

        </section>
        )
    };

    export default Portfolio;