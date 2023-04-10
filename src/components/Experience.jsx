import React from 'react'
import WorkImg from '../assets/sticky.jpg';
import projImg from '../assets/Artmagic.jpg';
import taskImg from '../assets/task-o-maina.jpg';
import betterImg from '../assets/betterbuy.jpg';
import eduImg from '../assets/education..jpg';

const Experience = () => {
  return (
    <div name='work' className='w-full md:h-screen text-gray-300 bg-[#34282C]'>
      <div className='max-w-[1000px] mx-auto p-2 flex flex-col justify-center w-full h-full'>
        <div className='pb-4'>
          <p className='text-4xl font-bold inline border-b-4 text-[#B6B6B4] border-[#31906E]'>
            Projects
          </p>
          <p className='py-6 text-2xl'>My recent project</p>
        </div>

{/* Container */}
        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>

            {/* Grid Item */}
          <div
            style={{ backgroundImage: `url(${WorkImg})` }}
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
          >
            
            {/* Hover Effects */}
            <div className='opacity-0 group-hover:opacity-100'>
              <div className='pt-8 text-center'>
                <a href="https://pratyushggoyal.github.io/fitnessfreak/">
                  <button className='opacity-6 text-center rounded-lg px-4 py-3 m-2 bg-[#0C090A] text-[#BCC6CC] font-bold text-lg'>
                    Demo
                  </button>
                </a>
                <a href="https://github.com/pratyushggoyal/fitnessfreak.git">
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-[#0C090A] text-[#BCC6CC] font-bold text-lg'>
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          
          <div
            style={{ backgroundImage: `url(${projImg})` }}
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
          >
            {/* Hover Effects */}
            <div className='opacity-0 group-hover:opacity-100'>
              
              <div className='pt-8 text-center'>
                <a href='/'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-[#0C090A] text-[#BCC6CC] font-bold text-lg'>
                    Demo
                  </button>
                </a>
                <a href="https://github.com/pratyushggoyal/Juetcate">
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-[#0C090A] text-[#BCC6CC] font-bold text-lg'>
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
            {/* Grid Item */}
          <div
            style={{ backgroundImage: `url(${taskImg })` }}
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
          >
            {/* Hover Effects */}
            <div className='opacity-0 group-hover:opacity-100'>
             
              <div className='pt-8 text-center'>
                <a href="https://pratyushggoyal.github.io/Music-Player/">
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-[#0C090A] text-[#BCC6CC] font-bold text-lg'>
                    Demo
                  </button>
                </a>
                <a href="https://github.com/pratyushggoyal/Music-Player">
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-[#0C090A] text-[#BCC6CC] font-bold text-lg'>
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${betterImg})` }}
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
          >
            {/* Hover Effects */}
            <div className='opacity-0 group-hover:opacity-100'>
              
              <div className='pt-8 text-center'>
                <a href='/'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-[#0C090A] text-[#BCC6CC] font-bold text-lg'>
                    Demo
                  </button>
                </a>
                <a href="https://github.com/pratyushggoyal/Web-scrapping">
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-[#0C090A] text-[#BCC6CC] font-bold text-lg'>
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
            {/* Grid Item */}
          <div
            style={{ backgroundImage: `url(${eduImg})` }}
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
          >
            {/* Hover Effects */}
            <div className='opacity-0 group-hover:opacity-100'>
              
              <div className='pt-8 text-center'>
                <a href='/'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-[#0C090A] text-[#BCC6CC] font-bold text-lg'>
                    Demo
                  </button>
                </a>
                <a href='/'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-[#0C090A] text-[#BCC6CC] font-bold text-lg'>
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience