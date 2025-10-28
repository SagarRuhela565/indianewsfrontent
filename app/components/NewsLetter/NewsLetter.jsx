const NewsLetter = () => {
  return (
    <div className=" container mt-12 lg:mt-16 xl:mt-20">
      <div className="bg-surface rounded-[1.25rem] p-10  sm:p-14 flex flex-col lg:flex-row items-center justify-between space-y-8 lg:space-y-0 lg:space-x-10">
        
        {/* Left Side: Text Content */}
        <div className="lg:w-1/2 lg:flex-shrink-0 text-center lg:text-left lg:col-span-5">
          <p className="text-[18px] tracking-[0.25em] text-shadow-text-muted uppercase  mb-2">GET FIRST UPDATE</p>
          <h2 className=" text-[24px] sm:text-[28px] lg:text-[30px] lg:text-[38px]  font-medium text-text leading-tight f-poppins">
            Get the news in front line by{" "}
            <span className="text-primary">subscribe</span> 
            <span className="inline-block align-middle ml-1">✍️</span> 
            our latest updates
          </h2>
        </div>
        
        {/* Right Side: Subscribe Form */}
        <div className="w-full lg:w-1/2 flex space-x-0 lg:col-span-5 news-letter-form">
          <form className="flex w-full space-x-2">
            {/* Email Input */}
            <input 
              type="email" 
              placeholder="Your email" 
              aria-label="Your email"
              required
              className="flex-grow min-w-0 p-4 border border-edge  focus:outline-none focus:ring-2 ring-[--color-ring] text-text bg-white"
            />
            
            {/* Submit Button */}
            <button 
              type="submit" 
              className="btn btn-primary lg:flex-shrink-0 px-6 py-4  text-base font-semibold cursor-pointer"
              // Note: btn-primary uses your --color-primary for the background
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default NewsLetter;