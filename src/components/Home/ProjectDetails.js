import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import details from '../ProjectDetails/ProjectDesc'
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCards } from "swiper";
import "swiper/css";
import "swiper/css/effect-cards";
const ProjectDetails = () => {
    const { id } = useParams()
    const [filterProject, setFilterProject] = useState({})
    useEffect(() => {
        const project = details.find(elem => elem.id === +id)
        setFilterProject(project)
    }, [id])
    console.log(filterProject)
    return (
        <div className='mt-14 overflow-x-hidden'>
            <div className='md:w-[500px] xl:w-[650px] w-[300px] mx-auto mt-14 h-[400px]'>
                <>
                    <Swiper
                        effect={"cards"}
                        grabCursor={true}
                        modules={[EffectCards]}
                        className="mySwiper"
                    >

                        {
                            filterProject?.images?.map(elem => <SwiperSlide><img className='h-[400px] object-cover w-full' src={elem} alt="" /></SwiperSlide>)
                        }
                    </Swiper>

                </>
            </div>
            <div className='px-4 md:w-[70%] w-full mx-auto py-14 '>
                <h1 className='text-4xl my-3 text-center'>{filterProject.name}</h1>
                <p className=' '>
                    {filterProject.desc}
                </p>
                <p className='mt-3 mb-5'><strong>Technology:</strong>{filterProject.technology}</p>
                <a href={filterProject.liveLink} target='_blank' rel="noreferrer" className='btn btn-primary mr-9 '>Live Site</a>
                <a href={filterProject.github} target='_blank' rel="noreferrer" className='btn btn-primary '>Github</a>
            </div>
        </div>
    );
};

export default ProjectDetails;