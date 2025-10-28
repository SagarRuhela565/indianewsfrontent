const SectionHeader = ({ title, url }) => {
    return (
        <div className="flex justify-between items-end mb-10 sec-head">
            <h2 className="text-[36px] md:text-[40px] 2xl:text-[55px] font-medium leading-tight f-poppins text-gray-900">
                {title}
            </h2>
            {url &&

                <a href={url} className="text-lg text-primary hover:text-primary/90 font-medium flex items-center group">
                    See all
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className="w-5 h-5 ml-1 transition-transform group-hover:translate-x-0.5"
                    >
                        <path
                            fillRule="evenodd"
                            d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.295a.75.75 0 111.04-1.09l5.5 5.25a.75.75 0 010 1.09l-5.5 5.25a.75.75 0 11-1.04-1.09l4.158-3.955H3.75A.75.75 0 013 10z"
                            clipRule="evenodd"
                        />
                    </svg>
                </a>
            }
        </div>
    );
};

export default SectionHeader;