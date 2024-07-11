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
import docs from "../public/icons/dash-nav/documentation.svg";

import Image from "next/image";
import NavOptionsCards from "@/components/NavOptionsCards";

const NavOptions = () => {
  return (
    <section className="w-[15rem]">
      {/* Heading */}
      <h2 className="flex items-center gap-2 font-bold text-[#2D3748] px-3">
        <Image src={logo} alt="Logo" /> PURITY UI DASHBOARD
      </h2>

      {/* Linear gradient line */}
      <Image src={linear} alt="Line" className="mt-6 mb-3" />

      <NavOptionsCards title="Dashboard" icon={home} first={true} />
      <NavOptionsCards title="Tables" icon={chart} />
      <NavOptionsCards title="Billing" icon={card} />
      <NavOptionsCards title="RTL" icon={spanner} />

      <h2 className="text-[#2D3748] font-bold text-sm px-3">ACCOUNT PAGES</h2>
      <NavOptionsCards title="Profile" icon={profile} />
      <NavOptionsCards title="Sign In" icon={document} />
      <NavOptionsCards title="Sign Up" icon={rocket} />

      {/* Dashboard */}
      <div className="bg-[url('../public/icons/dash-nav/documentation.svg')] bg-cover">
        <div>
          <h2>Need help?</h2>
          <p>Please check our docs</p>
        </div>

        <button>DOCUMENTATION</button>
      </div>
    </section>
  );
};

export default NavOptions;
