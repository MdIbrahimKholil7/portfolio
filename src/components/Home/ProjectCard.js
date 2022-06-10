import React, { useEffect, useState } from 'react';

const ProjectCard = ({ project }) => {
    const [fullDesc, setFullDesc] = useState('')
    const [showLess, setShowLess] = useState('')
    const [open, setOpen] = useState(false)
    const { desc, img, technology } = project || {}
    useEffect(() => {
        const more = desc.length > 70 ? desc.slice(0, 69) : desc
        setFullDesc(more)
        setShowLess(more)
    }, [desc])
    console.log(fullDesc)

    const handleMore = () => {
        setFullDesc(desc)
        setOpen(true)
    }
    const handleLess = () => {
        setFullDesc(showLess)
        setOpen(false)
    }


    return (
        /*   <div className=' bg-red-400 h-auto'>
              <img className='' src={img} alt="" />
              <div className='p-2'>
                  <p                
                  >{fullDesc}</p>
                  {
                      open?<button onClick={handleLess}>Show Less</button>:<button onClick={handleMore}>Show More</button>
                  }
                  <p><strong>Technology:</strong>{technology}</p>
              </div>
          </div> */

        <div class="card max-w-lg bg-base-100 shadow-xl">
            <figure><img className='h-[230px]' src={img} alt="Shoes" /></figure>
            <div class="card-body p-2 text-left justify-start items-start text-[14px]">
                <span
                >{fullDesc}</span>
                {
                    open ? <button onClick={handleLess}>Show Less</button> : <button onClick={handleMore}>Show More</button>
                }
                <p><strong>Technology:</strong>{technology}</p>
            </div>
        </div>
    );
};

export default ProjectCard;