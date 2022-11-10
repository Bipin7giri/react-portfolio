import React from 'react';

const Resume = () => {
  return (
    <div className='lg:rounded-2xl  bg-[#eef5fa]'>
      <div className='container sm:px-5 md:px-10 lg:px-14'>
        <div className='py-12 px-4 md:px-0'>
          {/* <!-- resume page title --> */}
          <h2 class='font-mono text-6xl text-red-400'>Resume</h2>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-x-6 gap-y-6 mt-[30px]'>
            {/* <!-- eductation start --> */}
            <div>
              <div className='flex items-center space-x-2 mb-4'>
                <i className='fa-solid text-6xl text-[#F95054] fa-graduation-cap'></i>
                <h4 className='text-5xl font-medium'> Education </h4>
              </div>
              <div className='bg-[#fff4f4]  py-4 pl-5 pr-3 space-y-2 mb-6 rounded-lg'>
                <span className='text-tiny text-gray-lite'>2019-present</span>
                <h3 className='text-xl'>Bachelor of Computer Application</h3>
                <p className=''>
                  kathford college of engineering and management
                </p>
              </div>
            </div>
            {/* <!-- eductation end --> */}

            {/* <!-- experiment start --> */}
            <div>
              <div className='flex items-center space-x-2 mb-4'>
                <i className='fa-solid text-6xl text-[#F95054] fa-briefcase'></i>
                <h4 className='text-5xl light:text-white font-medium'>
                  Experience
                </h4>
              </div>
              <div className='py-4 pl-5 pr-3 space-y-2 mb-6 text-white rounded-lg bg-[#7591a6] light:bg-transparent light:border-[#212425] light:border-2'>
                <span className='text-tiny text-gray-lite light:text-[#b7b7b7]'>
                  2017-2021
                </span>
                <h3 className='text-xl light:text-white'>
                  MERN stack developer (INTERN)
                </h3>

                <p className='light:text-[#b7b7b7]'>Neputer Tech Pvt Ltd</p>
              </div>
            </div>
            {/* <!-- experiment start --> */}
          </div>
        </div>
      </div>

      {/* <!-- working section start --> */}
      <div className='container bg-color-810 light:bg-[#0D0D0D] py-12 px-2 sm:px-5 md:px-10 lg:px-20'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
          <div className='col-span-1'>
            <h4 className='text-5xl light:text-white font-medium mb-6'>
              Working Skills
            </h4>
            <div className='mb-5'>
              <div className='flex justify-between mb-1'>
                <span className=' font-semibold text-[#526377] light:text-[#A6A6A6]'>
                  MERN stack
                </span>
                <span className=' font-semibold text-[#526377] light:text-[#A6A6A6'>
                  80 %
                </span>
              </div>
              <div className='w-full bg-[#edf2f2] rounded-full h-1 light:bg-[#1c1c1c]'>
                <div
                  className='bg-[#FF6464] h-1 rounded-full'
                  style={{ width: 320 }}
                ></div>
              </div>
            </div>

            <div className='mb-5'>
              <div className='flex justify-between mb-1'>
                <span className=' font-semibold text-[#526377] light:text-[#A6A6A6]'>
                  SQL
                </span>
                <span className=' font-semibold text-[#526377] light:text-[#A6A6A6'>
                  60%
                </span>
              </div>
              <div className='w-full bg-[#edf2f2] rounded-full h-1 light:bg-[#1c1c1c]'>
                <div
                  className='bg-[#9272d4] h-1 rounded-full'
                  style={{ width: 266 }}
                ></div>
              </div>
            </div>
            <div className='mb-5'>
              <div className='flex justify-between mb-1'>
                <span className=' font-semibold text-[#526377] light:text-[#A6A6A6]'>
                  PHP
                </span>
                <span className=' font-semibold text-[#526377] light:text-[#A6A6A6'>
                  50%
                </span>
              </div>
              <div className='w-full bg-[#edf2f2] rounded-full h-1 light:bg-[#1c1c1c]'>
                <div
                  className='bg-[#9272d4] h-1 rounded-full'
                  style={{ width: 140 }}
                ></div>
              </div>
            </div>

            <div className='mb-5'>
              <div className='flex justify-between mb-1'>
                <span className=' font-semibold text-[#526377] light:text-[#A6A6A6]'>
                  Mobile App
                </span>
                <span className=' font-semibold text-[#526377] light:text-[#A6A6A6'>
                  40%
                </span>
              </div>
              <div className='w-full bg-[#edf2f2] rounded-full h-1 light:bg-[#1c1c1c]'>
                <div
                  className='bg-[#9272d4] h-1 rounded-full'
                  style={{ width: 120 }}
                ></div>
              </div>
            </div>

            <div className='mb-5'>
              <div className='flex justify-between mb-1'>
                <span className=' font-semibold text-[#526377] light:text-[#A6A6A6]'>
                  GIT
                </span>
                <span className=' font-semibold text-[#526377] light:text-[#A6A6A6'>
                  60%
                </span>
              </div>
              <div className='w-full bg-[#edf2f2] rounded-full h-1 light:bg-[#1c1c1c]'>
                <div
                  className='bg-[#5185d4] h-1 rounded-full'
                  style={{ width: 290 }}
                ></div>
              </div>
            </div>

            <div className='mb-5'>
              <div className='flex justify-between mb-1'>
                <span className=' font-semibold text-[#526377] light:text-[#A6A6A6]'>
                  JavaScript
                </span>
                <span className=' font-semibold text-[#526377] light:text-[#A6A6A6'>
                  90%
                </span>
              </div>
              <div className='w-full bg-[#edf2f2] rounded-full h-1 light:bg-[#1c1c1c]'>
                <div
                  className='bg-[#ca56f2] h-1 rounded-full'
                  style={{ width: 340 }}
                ></div>
              </div>
            </div>
          </div>

          <div className='col-span-1'>
            <h4 className='text-5xl light:text-white font-medium mb-8'>
              {' '}
              Knowledges{' '}
            </h4>
            <div className='flex gap-y-3 gap-x-4 flex-wrap'>
              <button className='resume-btn p-2 rounded-md text-[#f3fafd] bg-[#c66a42]'>
                React
              </button>
              <button className='resume-btn p-2 rounded-md text-[#f3fafd] bg-[#5fd23c]'>
                Next
              </button>
              <button className='resume-btn p-2 rounded-md text-[#f3fafd] bg-[#3e3cca]'>
                MongoDB
              </button>
              <button className='resume-btn p-2 rounded-md text-[#f3fafd] bg-[#d1315b]'>
                MySQL
              </button>
              <button className='resume-btn p-2 rounded-md text-[#f3fafd] bg-[#25bddf]'>
                Node
              </button>
              <button className='resume-btn p-2 rounded-md text-[#f3fafd] bg-[#d33bb2]'>
                Express
              </button>
              <button className='resume-btn p-2 rounded-md text-[#f3fafd] bg-[#d33bb2]'>
                GIT
              </button>
              <button className='resume-btn p-2 rounded-md text-[#f3fafd] bg-[#d33bb2]'>
                PHP
              </button>
              <button className='resume-btn p-2 rounded-md text-[#f3fafd] bg-[#d33bb2]'>
                Laravel
              </button>{' '}
              <button className='resume-btn p-2 rounded-md text-[#f3fafd] bg-[#d33bb2]'>
                REDUX
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- working section end --> */}

      {/* <!-- footer start --> */}
      <footer
        className='overflow-hidden rounded-b-2xl'
        style={{ background: 'transparent' }}
      >
        <p className='text-center py-6 text-gray-lite light:text-color-910'>
          {' '}
          © 2022 All Rights Reserved by{' '}
          <a
            className='hover:text-[#FA5252] duration-300 transition'
            href='https://themeforest.net/user/ib-themes'
            target='_blank'
            rel='noopener noreferrer'
          >
            ib-themes
          </a>
          .{' '}
        </p>
      </footer>
      {/* <!-- footer end --> */}
    </div>
  );
};

export default Resume;
