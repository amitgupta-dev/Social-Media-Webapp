import React from 'react'

const About = () => {
    return (
        <section title="about" className=" my-5 flex flex-col gap-5 w-full max-w-[1050px] mx-auto">
            <section title="overview" className='text-xl font-bold bg-gray-100 px-5 py-4 rounded-lg'>
                <h2>Overview</h2>
                <div className='text-[17px] font-medium opacity-80'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis veritatis totam nostrum aspernatur repellat voluptatem distinctio illo nesciunt iusto tempora, molestias fuga aliquam, ducimus esse ipsa animi autem error consequatur.
                </div>
            </section>

            <section title="work & education" className='text-xl font-bold bg-gray-100  px-5 py-4 rounded-lg'>
                <h2>Work & Education</h2>
                <div className='my-4 leading-5'>
                    <p className='text-[17px] font-semibold'>Work</p>
                    <p className='text-[17px] font-medium opacity-80'>Employ at AWS</p>
                </div>
                <div className='my-4 leading-5'>
                    <p className='text-[17px] font-semibold'>University</p>
                    <p className='text-[17px] font-medium opacity-80'> ICFAI University Jharkhand</p>
                </div>
                <div className='my-4 leading-5'>
                    <p className='text-[17px] font-semibold'>High School</p>
                    <p className='text-[17px] font-medium opacity-80'>DAV Korea, Chandankiyari, Bokaro</p>
                </div>
            </section>

            <section title="places lived" className='text-xl font-bold bg-gray-100  px-5 py-4 rounded-lg'>
                <h2>Places lived</h2>
                <div className='my-4 leading-5'>
                    <p className='text-[17px] font-semibold'>Ranchi</p>
                    <p className='text-[17px] font-medium opacity-80'>Current city/town</p>
                </div>
                <div className='my-4 leading-5'>
                    <p className='text-[17px] font-semibold'>Dhanbad</p>
                    <p className='text-[17px] font-medium opacity-80'>Mar 2020 - May 2021</p>
                </div>
                <div className='my-4 leading-5'>
                    <p className='text-[17px] font-semibold'>Bokaro</p>
                    <p className='text-[17px] font-medium opacity-80'>Sept 2001 - Mar 2020</p>
                </div>
            </section>

            <section title="contact info" className='text-xl font-bold bg-gray-100  px-5 py-4 rounded-lg'>
                <h2>Contact info</h2>
                <div className='my-4 leading-5'>
                    <p className='text-[17px] font-semibold'>Phone</p>
                    <p className='text-[17px] font-medium opacity-80'>+91 9905835684</p>
                </div>
                <div className='my-4 leading-5'>
                    <p className='text-[17px] font-semibold'>E-mail</p>
                    <p className='text-[17px] font-medium opacity-80'>mramitgupta.occult@gmail.com</p>
                </div>
            </section>

            <section title="family & relationships" className='text-xl font-bold bg-gray-100  px-5 py-4 rounded-lg'>
                <h2>Family & Relationships</h2>
                <div className='my-4 leading-5'>
                    <p className='text-[17px] font-semibold'>Relationship</p>
                    <p className='text-[17px] font-medium opacity-80'>Single</p>
                </div>
                <div className='my-4 leading-5'>
                    <p className='text-[17px] font-semibold'>Family type</p>
                    <p className='text-[17px] font-medium opacity-80'>Nuclear</p>
                </div>
            </section>

            <section title="details" className='text-xl font-bold bg-gray-100  px-5 py-4 rounded-lg'>
                <h2>Details</h2>
                <div className='my-4 leading-5'>
                    <p className='text-[17px] font-semibold'>Other Names</p>
                    <p className='text-[17px] font-medium opacity-80'>Mr Occult</p>
                </div>
                <div className='my-4 leading-5'>
                    <p className='text-[17px] font-semibold'>Quotes</p>
                    <p className='text-[17px] font-medium opacity-80'>"Be Yourself"</p>
                </div>
            </section>
        </section>
    )
}

export default About