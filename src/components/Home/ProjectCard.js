import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
const ProjectCard = ({ project }) => {

    const { description, img, technology,id,liveLink } = project || {}
    const navigate=useNavigate()

    return (

        <div class="card max-w-sm bg-base-100 shadow-xl relative h-[400px]">
            <img className='h-[230px] object-cover ' src={img} alt="Shoes" />
            <div class="card-body text-gray-400 p-2 text-left justify-start items-start text-[14px]">
                <span
                    className=''
                >{description}</span>
              
                <p><strong>Technology:</strong>{technology}</p>
            </div>
            <div className='details'>
                <button onClick={()=>navigate(`projectDetails/${id}`)} className='btn btn-primary mr-3'>Details</button>
                <a href={liveLink} target='_blank' rel="noreferrer" className='btn btn-primary'>Live Site</a>
            </div>
        </div>
    );
};

export default ProjectCard;