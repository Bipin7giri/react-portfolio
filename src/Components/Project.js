import React from 'react';
import eshop from '../assets/e-shop.png';
import ecommerce from '../assets/ecommerce.png';
import socialmedia from '../assets/socialmedia.png';
import youtube from '../assets/youtube.png';
import chatapp from '../assets/chatapp.png';

const Project = () => {
  return (
    <div>
      <div class='lg:rounded-2xl  bg-[#eef5fa]'>
        <div class='pt-12 md:py-12 px-2 sm:px-5 md:px-10 lg:px-14'>
          {/* <!-- about page title --> */}
          <h2 class='font-mono text-6xl text-red-400'>Project</h2>

          <div class='grid grid-cols-1 lg:grid-cols-2 gap-20 py-5'>
            <div class='mx-auto group w-full shadow-2xl max-w-md pb-8 rounded-b-2xl transform duration-500 hover:-translate-y-2 cursor-pointer'>
              <div
                class='content bg-cover bg-center h-64 rounded-2xl'
                style={{
                  backgroundImage: `url(${socialmedia})`,
                }}
              ></div>

              <div class='mt-14 px-4'>
                <h2 class='mt-4  text-xl font-medium text-gray-400'>
                  Social media clone
                </h2>
                <p class='mt-2 text-2xl text-gray-700'>
                  MERN stack is used for this project, various stack are used
                  i.e redux, jwt, yup & formik,
                </p>
              </div>
            </div>
            <div class='mx-auto group w-full shadow-2xl max-w-md pb-8 rounded-b-2xl transform duration-500 hover:-translate-y-2 cursor-pointer'>
              <div
                class='content bg-cover bg-center h-64 rounded-2xl'
                style={{
                  backgroundImage: `url(${ecommerce})`,
                }}
              ></div>

              <div class='mt-14 px-4'>
                <h2 class='mt-4  text-xl font-medium text-gray-400'>
                  Ecommerce with mySql
                </h2>
                <p class='mt-2 text-2xl text-gray-700'>
                  React and Node is used with mySql database for this project,
                  various payment integration is done
                </p>
              </div>
            </div>

            <div class='mx-auto group w-full shadow-2xl max-w-md pb-8 rounded-b-2xl transform duration-500 hover:-translate-y-2 cursor-pointer'>
              <div
                class='content bg-cover bg-center h-64 rounded-2xl'
                style={{
                  backgroundImage: `url(${ecommerce})`,
                }}
              ></div>

              <div class='mt-14 px-4'>
                <h2 class='mt-4  text-xl font-medium text-gray-400'>
                  Ecommerce with mySql
                </h2>
                <p class='mt-2 text-2xl text-gray-700'>
                  React and Node is used with mySql database for this project,
                  various payment integration is done
                </p>
              </div>
            </div>
            <div class='mx-auto group w-full shadow-2xl max-w-md pb-8 rounded-b-2xl transform duration-500 hover:-translate-y-2 cursor-pointer'>
              <div
                class='content bg-cover bg-center h-64 rounded-2xl'
                style={{
                  backgroundImage: `url(${youtube})`,
                }}
              ></div>

              <div class='mt-14 px-4'>
                <h2 class='mt-4  text-xl font-medium text-gray-400'>
                  React Youtube Clone with api
                </h2>
                <p class='mt-2 text-2xl text-gray-700'>Api integration</p>
              </div>
            </div>
            <div class='mx-auto group w-full shadow-2xl max-w-md pb-8 rounded-b-2xl transform duration-500 hover:-translate-y-2 cursor-pointer'>
              <div
                class='content bg-cover bg-center h-64 rounded-2xl'
                style={{
                  backgroundImage: `url(${chatapp})`,
                }}
              ></div>

              <div class='mt-14 px-4'>
                <h2 class='mt-4  text-xl font-medium text-gray-400'>
                  Chatapp Clone with React Redux
                </h2>
                <p class='mt-2 text-2xl text-gray-700'>React-redux</p>
              </div>
            </div>
            <div class='mx-auto group w-full shadow-2xl max-w-md pb-8 rounded-b-2xl transform duration-500 hover:-translate-y-2 cursor-pointer'>
              <div
                class='content bg-cover bg-center h-64 rounded-2xl'
                style={{
                  backgroundImage: `url(${eshop})`,
                }}
              ></div>

              <div class='mt-14 px-4'>
                <h2 class='mt-4  text-xl font-medium text-gray-400'>
                  Webpage design
                </h2>
                <p class='mt-2 text-2xl text-gray-700'>
                  Bootstrap, html, css, javascript
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
