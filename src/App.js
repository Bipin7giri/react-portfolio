import './App.css';
import { useState } from 'react';
import AboutMe from './Components/AboutMe';
import Resume from './Components/Resume';
import Project from './Components/Project';
import Stack from './Components/Stack';
import Contact from './Components/Contact';
import { Routes, Route, Link } from 'react-router-dom';
import myimage from './assets/pp.jpg';
function App() {
  return (
    <div>
      <div className='bg-homeBg   min-h-screen bg-no-repeat bg-center bg-cover bg-fixed md:pb-16 w-full'>
        <div className='section-bg'></div>
        {/* <!-- end section-bg --> */}

        <div className='container grid grid-cols-12 md:gap-10 justify-between lg:mt-[220px]'>
          {/* <!-- sidber personal info --> */}
          <div className='col-span-12 lg:col-span-4  lg:block h-screen lg:sticky top-44'>
            <div className='w-full mb-6 lg:mb-0 mx-auto lg:relative bg-white text-center  px-6 rounded-[20px] lg:mt-[-40px] mt-[180px] md:mt-[220px] '>
              {/* <!-- profile image --> */}
              <img
                src={myimage}
                className='w-[240px] absolute left-[50%] transform -translate-x-[50%] h-[240px] drop-shadow-xl mx-auto rounded-[20px] -mt-[140px]'
                alt='about avatar'
              />
              <div className='pt-[100px] pb-8'>
                <h1 className='mt-6 mb-1 text-[26px] font-semibold '>
                  {' '}
                  Bipin Giri
                </h1>
                <h3 className='mb-4 text-[#7B7B7B] inline-block px-5 py-1.5 rounded-lg '>
                  JavaScript Developer
                </h3>
                <div className='flex justify-center space-x-3'>
                  {/* <!-- linkedin icon and link --> */}
                  <a
                    href='https://www.linkedin.com/in/bipin-giri-7aa860154/'
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    <span className='socialbtn text-[#0072b1]'>
                      <i className='fa-brands fa-linkedin-in'></i>
                    </span>
                  </a>
                  {/* <!-- facebook icon and link --> */}
                  <a
                    href='https://www.facebook.com/'
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    <span className='socialbtn text-[#1773EA]'>
                      <i className='fa-brands fa-facebook-f'></i>
                    </span>
                  </a>
                  {/* <!-- twitter icon and link --> */}
                  <a
                    href='https://twitter.com/'
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    <span className='socialbtn text-[#1C9CEA]'>
                      <i className='fa-brands fa-twitter'></i>
                    </span>
                  </a>
                </div>

                <div className='p-7 rounded-2xl mt-7 bg-[#F3F6F6] '>
                  <div className='flex border-b border-[#E3E3E3] pb-2.5'>
                    <span className='socialbtn bg-white  text-[#E93B81] shadow-md'>
                      <i className='fa-solid fa-mobile-screen-button p-4'></i>
                      {/* <i class="fa-solid fa-phone"></i> */}
                    </span>
                    <div className='text-left ml-2.5'>
                      <p className='text-xs text-[#44566C] '>Phone</p>
                      <p className=''>+977 9847050632</p>
                    </div>
                  </div>
                  <div className='flex border-b border-[#E3E3E3]  py-2.5'>
                    <span className='socialbtn bg-white text-[#6AB5B9] shadow-md'>
                      <i className='fa-solid fa-envelope-open-text p-4'></i>
                    </span>
                    <div className='text-left ml-2.5'>
                      <p className='text-xs text-[#44566C] '> Email </p>
                      <p className=''>bipingiri27@gmail.com</p>
                    </div>
                  </div>
                  <div className='flex border-b border-[#E3E3E3]  py-2.5'>
                    <span className='socialbtn bg-white text-[#FD7590] shadow-md'>
                      <i className='fa-solid fa-location-dot p-4'></i>
                    </span>
                    <div className='text-left ml-2.5'>
                      <p className='text-xs text-[#44566C] '> Location </p>
                      <p className=''>Kathmandu Nepal</p>
                    </div>
                  </div>
                </div>

                {/* <!-- dowanload button --> */}
                {/* <button className="bg-red-400 text-yellow-50 flex">
                  <img
                    className="mr-3"
                    src="https://bostamihtml.ibthemespro.com/images/icons/dowanload.png"
                    alt="icon"
                  />
                  <p>Download CV</p>
                </button> */}
              </div>
            </div>
          </div>
          {/* <!-- sidber info end --> */}

          <div className='col-span-12 lg:col-span-8 lg:mt-[-200px]'>
            <header className='lg:w-[760px] h-[100px]  lg:block p-[30px] ml-auto mb-10 rounded-[16px]  bg-[#eef5fa]'>
              <nav className=' lg:block'>
                <nav className=' lg:block'>
                  <ul className='flex sm:justify-between lg:justify-around lg:gap-8'>
                    <li>
                      <Link
                        className='menu-item lg:p-2 rounded-md  active:bg-red-400  lg:hover:bg-red-400'
                        to={'/react-portfolio/'}
                      >
                        <span className='text-xl mb-1'>
                          <i className='fa-regular fa-user'></i>
                        </span>
                        About
                      </Link>
                    </li>
                    <li>
                      {' '}
                      <Link
                        to='/resume'
                        className='menu-item lg:p-2 rounded-md lg:hover:bg-red-400'
                      >
                        <span className='text-xl mb-1'>
                          <i className='fa-regular fa-file-lines'></i>
                        </span>{' '}
                        Resume{' '}
                      </Link>
                    </li>
                    <li>
                      {' '}
                      <Link
                        to='/project'
                        className='menu-item lg:p-2 rounded-md   lg:hover:bg-red-400'
                      >
                        <span className='text-xl mb-1'>
                          <i className='fas fa-briefcase'></i>
                        </span>{' '}
                        Project
                      </Link>
                    </li>
                    <li>
                      <Link
                        to='/stack'
                        className='menu-item lg:p-2 rounded-md  lg:hover:bg-red-400'
                      >
                        <span className='text-xl mb-1'>
                          <i className='fa-brands fa-blogger'></i>
                          {/* <i class="bi bi-layers-fill"></i> */}
                        </span>
                        Stack
                      </Link>
                    </li>
                    <li>
                      <Link
                        to='/contact'
                        className='menu-item lg:p-2 rounded-md  lg:hover:bg-red-400'
                      >
                        <span className='text-xl mb-1'>
                          <i className='fa-solid fa-address-book'></i>
                        </span>
                        Contact
                      </Link>
                    </li>
                  </ul>
                </nav>
              </nav>
            </header>

            <Routes>
              <Route
                path='/react-portfolio/'
                element={<AboutMe />}
              ></Route>
              <Route
                path='/resume'
                element={<Resume />}
              ></Route>
              <Route
                path='/project'
                element={<Project />}
              ></Route>
              <Route
                path='/stack'
                element={<Stack />}
              ></Route>
              <Route
                path='/contact'
                element={<Contact />}
              ></Route>
            </Routes>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
