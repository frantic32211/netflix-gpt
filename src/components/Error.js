import React from "react";

const Error = () => {
  return (
    <div className="absolute h-screen w-screen bg-zinc-900">
      <div className="text-center mt-24">
        <h1 className="mb-4 text-6xl font-semibold text-[#e50914]">404</h1>
        <h1 className="mb-4 text-6xl font-semibold text-[#e50914]">
          Page Not Found !!
        </h1>
        <p className="py-10 text-xl text-white">
          Oops! Looks like you're lost.
        </p>
        <div className="animate-bounce">
          <svg
            className="mx-auto h-16 w-16 text-[#e50914]"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
            ></path>
          </svg>
        </div>
        <p className="mt-4 text-neutral-500 text-lg">
          Let's get you back - &nbsp;
          <a
            href="/"
            className="text-white font-bold cursor-pointer hover:underline"
          >
            Home
          </a>
        </p>
      </div>
    </div>
  );
};

export default Error;
