import TitleSubTitle from "./TitleSubTitle";
import Image from "next/image";

import blackArrow from "../public/icons/purity/blackArrow.svg";
import whiteArrow from "../public/icons/purity/whiteArrow.svg";
import chakra from "../public/icons/purity/chakra.svg";

const Blogs = () => {
  return (
    <section className="flex flex-col md:gap-x-4 items-center md:grid md:grid-cols-2 md:grid-rows-1 lg:flex lg:flex-row">
      {/* Purity UI Dashboard */}
      <div className="bg-white shadow-sm p-4 lg:flex lg:justify-between rounded-[15px] md:place-items-start md:justify-items-start lg:w-[31rem] min-h-[224px] col-span-1 row-span-2">
        <div className="lg:flex lg:flex-col lg:justify-between">
          <div>
            <TitleSubTitle
              title="Purity UI Dashboard"
              sub="Built by developers"
              className="flex-col-reverse"
            />
            <p className="text-[#A0AEC0] text-[12px] pt-1 md:w-[60%] lg:w-[80%]">
              From colors, cards, typography to complex elements, you will find
              the full documentation.
            </p>
          </div>

          <button className="flex items-center text-[#2D3748] text-xs font-bold gap-1 pt-4 pb-4 lg:pb-4">
            Read more <Image src={blackArrow} alt="Black arrow for read more" />
          </button>
        </div>

        {/* Chakra Image */}
        <div className="flex items-center">
          <Image
            src={chakra}
            alt="Chakra Image"
            width={360}
            height={255.5}
            className="rounded-[15px]"
          />
        </div>
      </div>

      {/* Work With Rockets */}
      <div className="bg-contain md:bg-cover bg-no-repeat bg-center bg-[url('../public/icons/purity/workers.svg')] px-10 py-16 bg-transparent flex flex-col h-full justify-between md:w-[22rem]  lg:w-[32rem] text-white">
        <div className="flex flex-col gap-y-1">
          {/* Title */}
          <div className="flex items-center">
            <h2 className="text-white font-bold text-[14px]">
              Work with the Rockets
            </h2>
          </div>

          {/* Subtitle */}
          <p className="text-white flex text-xs gap-.5 font-bold">
            Wealth creation is an evolutionarily recent positive-sum game. It is
            all about who take the opportunity first.
          </p>
        </div>

        <button className="flex items-center text-white text-xs font-bold gap-1 pt-4">
          Read more <Image src={whiteArrow} alt="Black arrow for read more" />
        </button>
      </div>
    </section>
  );
};

export default Blogs;
