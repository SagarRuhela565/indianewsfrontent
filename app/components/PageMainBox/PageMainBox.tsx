import React from "react";

type Page = {
  acf?: {
    banner_heading?: string;
    banner_heading_2?: string;
  };
};

interface PageMainBoxProps {
  page?: Page;
}

const PageMainBox: React.FC<PageMainBoxProps> = ({ page }) => {
  const bannerHeading = page?.acf?.banner_heading ?? "";
  const bannerHeading2 = page?.acf?.banner_heading_2 ?? "";

  return (
    <>
      <section className="container mt-12">
        <div className="rounded-[1.25rem] bg-surface px-6 py-10 sm:px-10 sm:py-14 mx-auto">
          <div className="mx-auto max-w-250">
            <h1
              className="text-center text-[18px] tracking-[0.25em] text-shadow-text-muted uppercase f-poppins"
              dangerouslySetInnerHTML={{ __html: bannerHeading }}
            />
            <h2
              className="mt-2 mt-sm-4 text-center font-medium leading-relaxed text-[24px] sm:text-[28px] md:text-[30px] lg:text-[38px] f-poppins"
              dangerouslySetInnerHTML={{ __html: bannerHeading2 }}
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default PageMainBox;
