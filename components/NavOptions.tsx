import logo from "../public/icons/dash-nav/logo.svg";
import spanner from "../public/icons/dash-nav/spanner.svg";
import home from "../public/icons/dash-nav/home.svg";
import chart from "../public/icons/dash-nav/chart.svg";
import card from "../public/icons/dash-nav/card.svg";
import document from "../public/icons/dash-nav/document.svg";
import profile from "../public/icons/dash-nav/profile.svg";
import question from "../public/icons/dash-nav/question.svg";
import linear from "../public/icons/dash-nav/linear.svg";
import rocket from "../public/icons/dash-nav/rocket.svg";

import Image from "next/image";
import NavOptionsCard from "@/components/NavOptionsCard";
import { twMerge } from "tailwind-merge";
import React from "react";

interface NavOptionsProps {
  className?: string;
}

const NavOptions: React.FC<NavOptionsProps> = ({ className }) => {
  return (
    <section className={twMerge(`w-[15rem]  lg:block`, className)}>
      {/* Heading */}
      <h2 className="flex items-center gap-2 font-bold text-[#2D3748] px-3">
        <Image src={logo} alt="Logo" /> PURITY UI DASHBOARD
      </h2>

      {/* Linear gradient line */}
      <Image src={linear} alt="Line" className="mt-6 mb-3" />

      <div>
        <NavOptionsCard title="Dashboard" icon={home} first={true} />
        <NavOptionsCard title="Tables" icon={chart} />
        <NavOptionsCard title="Billing" icon={card} />
        <NavOptionsCard title="RTL" icon={spanner} />

        <h2 className="text-[#2D3748] font-bold text-sm px-3">ACCOUNT PAGES</h2>
        <NavOptionsCard title="Profile" icon={profile} />
        <NavOptionsCard title="Sign In" icon={document} />
        <NavOptionsCard title="Sign Up" icon={rocket} />
      </div>

      {/* Documentation Card*/}
      <div className="bg-[url('../public/icons/dash-nav/documentation.svg')] bg-cover p-4 h-[12rem] rounded-[15px]">
        {/* Icon */}
        <div className="bg-white rounded-[12px] p-2 w-10 mb-6">
          <Image src={question} alt="Question Mark" />
        </div>

        <div className="text-white mb-3">
          <h2 className="font-bold">Need help?</h2>
          <p className="text-sm">Please check our docs</p>
        </div>

        <div className="flex justify-center">
          <button className="w-full bg-white font-bold text-[#2D3748] text-sm p-2 rounded-[15px]">
            DOCUMENTATION
          </button>
        </div>
      </div>
    </section>
  );
};

export default NavOptions;
