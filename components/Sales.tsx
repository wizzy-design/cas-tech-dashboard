import Image from "next/image";
import chart from "../public/icons/sales/Data.svg";
import TitleSubTitle from "./TitleSubTitle";

const Sales = () => {
  return (
    <section className="bg-white md:w-1/2 rounded-[15px] p-4">
      <TitleSubTitle
        title="Sales overview"
        sub=" in 2021"
        greensub="(+5) more "
      />

      {/* Chart Image */}
      <div className="py-5">
        <Image src={chart} alt="Chart image"/>
      </div>
    </section>
  );
};

export default Sales;
