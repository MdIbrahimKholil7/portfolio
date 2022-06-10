import React from 'react';

const Skill = () => {
    return (
        <div className='px-4  mb-20'>
            <h1 className='text-center mb-24 lg:text-3xl xl:text-4xl text-2xl'><span className='title relative '>My Skill</span></h1>
            <div class="container grid lg:grid-cols-2 md:gap-7">
                <div>
                    <span className='mb-2 uppercase text-[16px] block'>Html</span>
                    <div class="bar mb-3 html expert" data-skill=""></div>
                    <span className='mb-2 uppercase text-[16px] block'>Css3</span>
                    <div class="bar mb-3 css advanced" data-skill=""></div>
                    <span className='mb-2 uppercase text-[16px] block'>Bootstrap5</span>
                    <div class="bar mb-3 bootstrap" data-skill=""></div>
                    <span className='mb-2 uppercase text-[16px] block'>Tailwind Css</span>
                    <div class="bar mb-3 tailwind" data-skill=" "></div>
                    <span className='mb-2 uppercase text-[16px] block'>Javascript</span>
                    <div class="bar mb-3  javascript" data-skill=""></div>
                </div>
                <div>
                    <span className='mb-2 uppercase text-[16px] block'>React Js</span>
                    <div class="bar mb-3 react basic" data-skill=" "></div>
                    <span className='mb-2 uppercase text-[16px] block'>Node Js</span>
                    <div class="bar mb-3 node basic" data-skill=" "></div>
                    <span className='mb-2 uppercase text-[16px] block'>Express Js</span>
                    <div class="bar mb-3 express basic" data-skill=""></div>
                    <span className='mb-2 uppercase text-[16px] block'>MongoDb</span>
                    <div class="bar mb-3 back basic" data-skill=""></div>
                </div>
            </div>
        </div>
    );
};

export default Skill;