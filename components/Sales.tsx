import Image from "next/image";
import chart from "../public/icons/sales/Data.svg";
import TitleSubTitle from "./TitleSubTitle";

const Sales = () => {
  return (
    <section className="bg-white lg:w-2/3 rounded-[15px] p-4 lg:h-[324px] lg:ml-4 shadow-sm flex flex-col justify-between">
      <TitleSubTitle
        title="Sales overview"
        sub=" in 2021"
        greensub="(+5) more "
      />

      {/* Chart Image */}
      <div className="">
        <Image src={chart} alt="Chart image" className=""/>
      </div>
    </section>
  );
};

export default Sales;
