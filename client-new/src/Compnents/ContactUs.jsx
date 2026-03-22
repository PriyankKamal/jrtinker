import React from 'react'
import HeadingSectionOverlay from './HeadingSectionOverlay'
import { Helmet } from 'react-helmet-async'

const ContactUs = () => {
  const heading = "Contact us"
  return (
    <>
    <Helmet>
      <title>Contact us</title>
    </Helmet>
      <section className='w-full pt-32 pb-20 sm:pt-40 sm:pb-28'>
        <HeadingSectionOverlay heading={heading} />

        <section className="py-10 px-4 sm:px-6 bg-white text-center md:text-left flex flex-col-reverse md:flex-row items-center justify-between gap-12 max-w-7xl mx-auto">
          
          {/* Left Content */}
          <div className="w-full md:w-1/2 space-y-6">
            <div className='flex items-center justify-center md:justify-start gap-3'>
              <p className="text-xl font-extrabold text-red-400 mulish">Contact Us</p>
              <img src="/images/asset 53.svg" alt="asset2" className="w-6 h-6 sm:w-8 sm:h-8" />
            </div>
            
            <h2 className="text-3xl sm:text-4xl lg:text-5xl leading-snug text-[#33467b] font-medium salsa">
              Feel Free To Contact Us <br className="hidden md:block" />
              For More Info
            </h2>

            <p className="text-base sm:text-lg text-gray-500 mb-4 max-w-md mx-auto md:mx-0">
              Got a question? Don’t hesitate — we’d love to hear from you!
            </p>

            <div className="space-y-6 text-left text-gray-700 text-sm sm:text-base">
              <div className="flex items-start gap-4">
                <span className="text-yellow-500 text-xl sm:text-2xl">📍</span>
                <div>
                  <p className='text-lg sm:text-xl salsa text-gray-500'>Address</p>
                  <p className='text-xl sm:text-2xl text-[#33467b] salsa'>55 Main Street, New York</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <span className="text-red-400 text-xl sm:text-2xl">📧</span>
                <div>
                  <p className='text-lg sm:text-xl salsa text-gray-500'>Email</p>
                  <p className='text-xl sm:text-2xl text-[#33467b] salsa'>support@gmail.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <span className="text-blue-500 text-xl sm:text-2xl">📞</span>
                <div>
                  <p className='text-lg sm:text-xl salsa text-gray-500'>Hotline</p>
                  <p className='text-xl sm:text-2xl text-[#33467b] salsa'>+012 (345) 678</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Illustration */}
          <div className="w-full md:w-1/2 flex justify-center">
            <img
              src="/images/asset 12.png"
              alt="Kids learning illustration"
              className="max-w-full h-auto"
            />
          </div>
        </section>
      </section>
    </>
  )
}

export default ContactUs
