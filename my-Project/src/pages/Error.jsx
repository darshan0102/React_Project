import React from 'react'

const Error = () => {
  return (
    <div className="flex flex-col justify-center items-center mt-24 px-4 sm:px-6 md:px-8">
      <h1 className="text-black w-full text-center text-[80px] sm:text-[100px] md:text-[120px] lg:text-[160px] font-extrabold">404</h1>
      <div className="font-semibold text-black text-xl sm:text-2xl md:text-3xl mt-4 text-center">
        The page you're looking for doesn't exist or <br />
        probably moved somewhere
      </div>
      <p className="mt-4 text-[#808080] text-sm sm:text-base">
        Please go back to the homepage or check out our offers
      </p>
      <a href="https://www.google.com">
        <button className="bg-[#0068C8] text-gray-50 mt-4 uppercase py-2 w-40 sm:w-48 md:w-52 rounded hover:bg-white hover:border font-semibold hover:border-[#0068C8] hover:text-[#0068C8] transition duration-300">
          Back to homepage
        </button>
      </a>
    </div>
  )
}

export default Error
