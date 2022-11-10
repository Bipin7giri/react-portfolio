import React from 'react';

const AboutMe = () => {
  return (
    <div>
      <div class='lg:rounded-2xl max-h-[500px] bg-[#eef5fa]'>
        <div class='pt-12 md:py-12 px-2 sm:px-5 md:px-10 lg:px-14'>
          {/* <!-- about page title --> */}
          <h2 class='font-mono text-6xl text-red-400'>About Me</h2>
          {/* <!-- personal info for mobile devices start --> */}

          {/* <!-- personal info for mobile devices end --> */}

          <div class='lg:grid grid-cols-12 md:gap-10 pt-4 md:pt-[30px] items-center'>
            <div class='col-span-12 space-y-2.5'>
              <div class='lg:mr-16 py-10'>
                <p class='text-[#44566c] leading-7'>
                  {' '}
                  I'm MERN stack Developer from Ktm, Nepal, working in web
                  development. I enjoy turning complex problems into simple,
                </p>
                <p class='text-[#44566c] leading-7 py-5 mt-6'>
                  Web developer with excellent problem-solving skills and
                  ability to perform well in team. Passionate about coding
                </p>
              </div>
              <div></div>
            </div>
          </div>
        </div>

        {/* <!-- footer start --> */}

        {/* <!-- footer section end --> */}
      </div>
    </div>
  );
};

export default AboutMe;
