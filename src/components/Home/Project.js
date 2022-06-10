import React from 'react';
import ProjectCard from './ProjectCard';
import details from '../ProjectDetails/ProjectDetails';
const Project = () => {
    return (
        <div className='my-14 px-4'>
            <h1 className='text-center text-3xl'><span className='title relative'>My Projects</span></h1>
            <div className='grid grid-cols-3 mt-14 gap-5'>
                {
                    details.map(project => <ProjectCard
                        project={project}
                    />)
                }
            </div>
        </div>
    );
};

export default Project;