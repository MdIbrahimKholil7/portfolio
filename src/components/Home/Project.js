import React from 'react';
import ProjectCard from './ProjectCard';
import details from '../ProjectDetails/ProjectDesc';
const Project = () => {
    return (
        <div className='my-14 px-4'>
            <h1 className='text-center mb-24 lg:text-3xl xl:text-4xl text-2xl'><span className='title relative '>My Projects</span></h1>
            <div className='grid md:grid-cols-2 lg:grid-cols-3 mt-14 gap-5 justify-items-center'>
                {
                    details.slice(0,3).map(project => <ProjectCard
                        key={project.id}
                        project={project}
                    />)
                }
            </div>
        </div>
    );
};

export default Project;