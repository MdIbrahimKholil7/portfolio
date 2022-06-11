import React, { useEffect, useState } from 'react';

const ProjectCard = ({ project }) => {
    const [fullDesc, setFullDesc] = useState('')
    const [showLess, setShowLess] = useState('')
    const [open, setOpen] = useState(false)
    const { description, img, technology } = project || {}
   /*  useEffect(() => {
        const more = desc.length > 70 ? desc.slice(0, 100) + ' ...' : desc
        setFullDesc(more)
        setShowLess(more)
    }, [desc]) */

/*     const handleMore = () => {
        setFullDesc(desc)
        setOpen(true)
    }
    const handleLess = () => {
        setFullDesc(showLess)
        setOpen(false)
    } */


    return (

        <div class="card max-w-sm bg-base-100 shadow-xl relative">
            <img className='h-[230px] object-cover ' src={img} alt="Shoes" />
            <div class="card-body text-gray-400 p-2 text-left justify-start items-start text-[14px]">
                <span
                    className=''
                >{description}</span>
               {/*  {
                    open ? <button onClick={handleLess}>Show Less</button> : <button onClick={handleMore}>Show More</button>
                } */}
                <p><strong>Technology:</strong>{technology}</p>
            </div>
            <div className='details'>
                <button className='btn btn-primary mr-3'>Details</button>
                <button className='btn btn-primary'>Live Site</button>
            </div>
        </div>
    );
};

export default ProjectCard;