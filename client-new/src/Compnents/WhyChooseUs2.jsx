import React from "react";

const WhyChooseUs2 = () => {
  return (
    <section className="w-full">
      <div className="container mx-auto flex flex-col md:flex-row items-center gap-8 md:gap-20 px-4 md:px-8">
        <div className="w-full md:w-1/2">
          <img
            src="/images/home-3.webp"
            className="w-full h-auto object-cover rounded-md "
            alt="service-img"
            loading="lazy"
          />
        </div>

        <div className="w-full md:w-1/2 py-8 md:py-16">
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <p className="text-xl font-extrabold text-red-500 uppercase tracking-wider mulish">
                Why Choose Us
              </p>
              <img src="/images/asset 53.svg" alt="asset2" className="h-6 w-auto" loading="lazy"/>
            </div>
            <h2 className="text-2xl md:text-4xl text-[#33467b] leading-tight font-semibold salsa">
              Where Curiosity Meets Creativity
            </h2>
            <p className="text-base text-gray-600 leading-relaxed md:w-4/5">
              We believe learning should feel like playtime—with a purpose! Our
              STEM platform is bursting with interactive games, challenges, and
              discoveries designed to spark joy and inspire imagination. Kids
              don’t just follow instructions—they think, tinker, and create their
              own solutions. From mini inventors to future coders, we’re here to
              nurture every spark of brilliance. Because when learning is this
              fun, the possibilities are endless!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs2;