
const PageMainBox = () => {
    return <>
        <section className="container mt-12">
            <div className="rounded-[1.25rem]  bg-surface px-6 py-10 sm:px-10 sm:py-14 mx-auto">

                <div className="mx-auto max-w-250">
                    {/* eyebrow */}
                    <p className="text-center text-[18px] tracking-[0.25em] text-shadow-text-muted uppercase">
                        Welcome to Buletin
                    </p>

                    {/* headline */}
                    <h1 className="mt-2 mt-sm-4 text-center font-medium leading-relaxed
                       text-[24px] sm:text-[28px] md:text-[30px] lg:text-[38px] f-poppins ">
                        <span className="text-text">
                            Craft narratives <span role="img" aria-label="writing hand">✍️</span> that ignite
                        </span>{" "}
                        <span className="text-primary">inspiration</span>{" "}
                        <span role="img" aria-label="light bulb">💡</span>
                        <span className="text-text">,</span>{" "}
                        <span className="text-primary">knowledge</span>{" "}
                        <span role="img" aria-label="red book">📕</span>
                        <span className="text-text">, and</span>{" "}
                        <span className="text-primary">entertainment</span>{" "}
                        <span role="img" aria-label="clapper board">🎬</span>
                    </h1>
                </div>
            </div>
        </section>
    </>;
}

export default PageMainBox;
