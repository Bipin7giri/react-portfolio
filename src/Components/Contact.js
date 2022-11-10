import React, { useState } from 'react';

const Contact = () => {
  const [details, setDetails] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [error, setError] = useState({
    errorName: '',
    errorEmail: '',
    errorMessage: '',
  });
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(details),
  };
  const [result, setResult] = useState('');
  const addToDb = () => {
    if (details.name === '') {
      setError({ ...error, errorName: 'Enter Your Name' });
    } else if (details.email === '') {
      setError({ ...error, errorEmail: 'Enter your email' });
    } else if (details.message === '') {
      setError({ ...error, errorMessage: 'Enter your message' });
    } else {
      window.location.reload(false);
    }
  };
  return (
    <div>
      <div class='lg:rounded-2xl  bg-[#eef5fa]'>
        <div class='pt-12 md:py-12 px-2 sm:px-5 md:px-10 lg:px-14'>
          {/* <!-- about page title --> */}
          <h2 class='font-mono text-6xl text-red-400'>Contact Me</h2>
          {/* <!-- personal info for mobile devices start --> */}

          {/* <!-- personal info for mobile devices end --> */}

          <div>
            <div class='mx-4 md:mx-[60px] p-4 md:p-16  bg-color-810 rounded-xl mb-[30px] md:mb-[60px]'>
              <form>
                <div
                  class='returnmessage'
                  data-success='Your message has been received, We will contact you soon.'
                ></div>
                <div class='empty_notice'>
                  <span>Please Fill Required Fields</span>
                </div>
                <h4
                  className='text-4xl p-5 text-green-500 text-transform: uppercase
                 '
                >
                  {result}
                </h4>

                {/* <!-- name input  --> */}
                <div class='relative z-0 w-full mt-[40px] mb-8 group'>
                  <h4 style={{ color: 'red' }}>{error.errorName}</h4>
                  <input
                    onKeyUp={(e) => {
                      setDetails({ ...details, name: e.target.value });
                      console.log(details);
                    }}
                    type='text'
                    id='name'
                    name='name'
                    class='block autofill:bg-transparent py-2.5 px-0 w-full text-sm text-gray-lite bg-transparent border-0 border-b-[2px] border-[#B5B5B5] appearance-none focus:outline-none focus:ring-0 focus:border-[#FF6464] peer'
                    placeholder=' '
                    required=''
                  />
                  <label
                    for='name'
                    class='peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#FF6464]  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-8'
                  >
                    Name *
                  </label>
                </div>

                {/* <!-- email input  --> */}
                <div class='relative z-0 w-full mb-8 group'>
                  <h4 style={{ color: 'red' }}>{error.errorEmail}</h4>

                  <input
                    onKeyUp={(e) =>
                      setDetails({ ...details, email: e.target.value })
                    }
                    type='email'
                    name='email'
                    class='block autofill:text-red-900 needed py-2.5 px-0 w-full text-sm text-gray-lite bg-transparent border-0 border-b-[2px] border-[#B5B5B5] appearance-none  focus:outline-none focus:ring-0 focus:border-[#5185D4] peer'
                    placeholder=' '
                    id='email'
                    required=''
                  />
                  <label
                    for='email'
                    class='peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#5185D4]  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-8'
                  >
                    Email *
                  </label>
                </div>

                {/* <!-- message input  --> */}
                <div class='relative z-0 w-full mb-8 group'>
                  <h4 style={{ color: 'red' }}>{error.errorMessage}</h4>

                  <input
                    onKeyUp={(e) =>
                      setDetails({ ...details, message: e.target.value })
                    }
                    type='text'
                    name='message'
                    class='block py-2.5 px-0 w-full text-sm text-gray-lite bg-transparent border-0 border-b-[2px] border-[#B5B5B5] appearance-none focus:outline-none focus:ring-0 focus:border-[#CA56F2] peer'
                    placeholder=' '
                    id='message'
                    required=''
                  />
                  <label
                    for='message'
                    class='peer-focus:font-medium absolute text-sm text-gray-500 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#CA56F2]  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-8'
                  >
                    Message *
                  </label>
                </div>

                {/* <!-- submit buttons --> */}
                <input
                  onClick={() => {
                    addToDb();
                  }}
                  type='button'
                  class='px-6 py-2 rounded-lg border-[2px] mt-3 border-color-910 font-semibold cursor-pointer hover:bg-gradient-to-r from-[#FA5252] to-[#DD2476] hover:text-white transition-colors duration-300 ease-in-out hover:border-transparent'
                  value='Submit'
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
