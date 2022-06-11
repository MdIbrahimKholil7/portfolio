import React from 'react';
import ProjectCard from './ProjectCard';
import details from '../ProjectDetails/ProjectDesc';
import { Zoom } from 'react-reveal';
const Project = () => {
    return (
        <Zoom>
            <div

                className='my-14 px-4'>
                <h1 className='text-center mb-24 lg:text-3xl xl:text-4xl text-2xl'><span className='title relative '>My Projects</span></h1>
                <div className='grid md:grid-cols-2 lg:grid-cols-3 mt-14 gap-5 justify-items-center'>
                    {
                        details.map(project => <ProjectCard
                            key={project.id}
                            project={project}
                        />)
                    }
                </div>
            </div>
        </Zoom>
    );
};

export default Project;