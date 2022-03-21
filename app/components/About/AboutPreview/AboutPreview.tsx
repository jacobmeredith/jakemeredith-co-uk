import * as React from "react";

import { Link } from "remix";

export const AboutPreview = () => {
  return (
    <section className="container flex flex-col px-8 py-16 mx-auto md:flex-row md:py-16 md:px-0">
      <div className="flex flex-col justify-center w-full p-8 bg-gray-900 rounded-lg md:w-3/5">
        <h2 className="mb-6 text-3xl leading-relaxed text-gray-200">
          A little bit about me...
        </h2>
        <p className="mb-3 leading-relaxed text-white">
          I am a software engineer from the north west of England and I have
          been building and maintaining web applications for the last 7 years.
        </p>
        <p className="mb-3 leading-relaxed text-white">
          Throughout my career I have worked in a number of different industries
          ranging from financial services to retail. I have learnt a lot of
          different things from a lot of experienced engineers.
        </p>
        <p className="mb-3 leading-relaxed text-white">
          This website is going to be a place I can write about what I am
          learning to help me grow as an engineer.
        </p>
        <Link
          className="self-start px-3 py-2 mt-6 text-black bg-white rounded-md"
          to={`/about`}
        >
          View about
        </Link>
      </div>
      <div className="mt-8 ml-0 overflow-hidden rounded-md md:mt-0 md:ml-8">
        <img src="https://picsum.photos/500" alt="About" className="" />
      </div>
    </section>
  );
};
