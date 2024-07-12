import graph from "../public/icons/users/Graph.svg";
import cart from "../public/icons/users/cart.svg";
import rocket from "../public/icons/users/rocket.svg";
import wallet from "../public/icons/users/wallet.svg";
import spanner from "../public/icons/users/spanner.svg";
import TitleSubTitle from "./TitleSubTitle";

import Image from "next/image";

const ActiveUsers = () => {
  return (
    <section className="bg-white p-4 pb-6 rounded-[15px] shadow-sm">
      {/* Graph */}
      <Image src={graph} alt="Graph" className="mb-4" />

      <TitleSubTitle
        title="Active Users"
        sub="than last week"
        greensub="(+23) "
      />

      <div className="grid grid-cols-2 gap-y-5  lg:gap-y-0 lg:flex lg:gap-x-8 pt-6">
        {[
          { title: "Users", icon: wallet, progress: 60, num: "32,984" },
          { title: "Clicks", icon: rocket, progress: 95, num: "2,42m" },
          { title: "Sales", icon: cart, progress: 40, num: "2,400$" },
          { title: "Items", icon: spanner, progress: 60, num: "320" },
        ].map((item) => (
          <div key={item.title}>
            {/* Subtitle and Icon */}
            <div className="flex items-center gap-2">
              <div className="bg-[#4FD1C5] p-2 rounded-[6px]">
                <Image src={item.icon} alt={item.title} />
              </div>
              <h2 className="font-bold text-[#A0AEC0] text-xs">{item.title}</h2>
            </div>

            {/* Number and Progress bar */}
            <div>
              <h2 className="text-[#2D3748] font-bold text-lg py-1">
                {item.num}
              </h2>

              {/* Progress bar */}
              <div className="bg-[#E2E8F0] relative w-[125px] h-[4px] rounded-[3px]">
                <span
                  className={`w-[${item.progress}%] block h-[4px] bg-[#4FD1C5] rounded-[3px]`}
                ></span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ActiveUsers;
