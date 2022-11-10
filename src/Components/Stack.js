import React from 'react';

const Stack = () => {
  return (
    <div>
      <div class='lg:rounded-2xl  bg-[#eef5fa]'>
        <div class='pt-12 md:py-12 px-2 sm:px-5 md:px-10 lg:px-14'>
          {/* <!-- about page title --> */}
          <h2 class='font-mono p-4 text-3xl lg:text-6xl text-red-400'>
            Stack That i have used
          </h2>
          {/* <!-- personal info for mobile devices start --> */}
          <div className='grid grid-cols-2 lg:grid-cols-3 gap-10'>
            <section class='p-4  rounded-xl bg-[#d1e1ec]'>
              <img
                class='w-[100%]'
                src='https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png'
                alt=''
              />
            </section>
            <section class='p-4  rounded-xl bg-[#d1e1ec]'>
              <img
                class='w-[100%]'
                src='https://raw.githubusercontent.com/reduxjs/redux/master/logo/logo.png'
                alt=''
              />
            </section>
            <section class='p-4  rounded-xl bg-[#d1e1ec]'>
              <img
                class='w-[100%]'
                src='https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/1280px-Node.js_logo.svg.png'
                alt=''
              />
            </section>
            <section class='p-4  rounded-xl bg-[#d1e1ec]'>
              <img
                class='w-[100%]'
                src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png'
                alt=''
              />
            </section>
            <section class='p-4  rounded-xl bg-[#d1e1ec]'>
              <img
                class='w-[100%]'
                src='https://download.logo.wine/logo/MySQL/MySQL-Logo.wine.png'
                alt=''
              />
            </section>
            <section class='p-4  rounded-xl bg-[#d1e1ec]'>
              <img
                class='w-[100%]'
                src='https://gocode.colorado.gov/wp-content/uploads/2020/11/MongoDB-logo.gif'
                alt=''
              />
            </section>
            <section class='p-4  rounded-xl bg-[#d1e1ec]'>
              <img
                class='w-[100%]'
                src='https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/PHP-logo.svg/2560px-PHP-logo.svg.png'
                alt=''
              />
            </section>
            <section class='p-8  bg-[#d1e1ec]'>
              <img
                class='w-[100%]'
                src='https://seeklogo.com/images/L/laravel-framework-logo-C10176EC8C-seeklogo.com.png'
                alt=''
              />
            </section>
          </div>
          {/* <!-- personal info for mobile devices end --> */}
        </div>
      </div>
    </div>
  );
};

export default Stack;
