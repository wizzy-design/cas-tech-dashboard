import TitleSubTitle from "./TitleSubTitle";
import check from "../public/icons/projects/check.svg";
import options from "../public/icons/projects/options.svg";
import adobe from "../public/icons/projects/adobe.svg";
import mountain from "../public/icons/projects/mountain.svg";
import spotify from "../public/icons/projects/spotify.svg";
import jira from "../public/icons/projects/jira.svg";
import invision from "../public/icons/projects/invision.svg";

import Image from "next/image";
import Project from "./Project";

const Projects = () => {
  return (
    <section className="shadow-sm rounded-lg px-6 py-6">
      {/* Nav */}
      <div className="flex justify-between">
        <TitleSubTitle
          title="Projects"
          sub={"30 done this month"}
          icon={check}
        />

        {/* Options Icon */}
        <Image src={options} alt="Options button" />
      </div>

      {/* List/Grid Projects */}
      <div className="py-6">
        {/* Table heading */}
        <div className="hidden lg:grid lg:grid-cols-5 lg:grid-row-6 lg:py-4">
          <span className="col-span-2 text-xs font-bold text-[#A0AEC0]">
            COMPANIES
          </span>
          <span className="text-xs font-bold text-[#A0AEC0]">MEMBERS</span>
          <span className="text-xs font-bold text-[#A0AEC0]">BUDGET</span>
          <span className="text-xs font-bold text-[#A0AEC0]">COMPLETION</span>
        </div>

        <Project
          title="Chakra Soft UI Version"
          budget="$14,000"
          completion={60}
          icon={adobe}
          members={5}
        />
        <Project
          title="Add Progress Track"
          budget="$3,000"
          completion={10}
          icon={mountain}
          members={2}
        />
        <Project
          title="Fix Platform Errors"
          budget="Not set"
          completion={100}
          icon={adobe}
          members={5}
        />
        <Project
          title="Launch our Mobile App"
          budget="$32,000"
          completion={100}
          icon={spotify}
          members={5}
        />
        <Project
          title="Add the New Pricing Page"
          budget="$400"
          completion={25}
          icon={jira}
          members={5}
        />
        <Project
          title="Redesign New Online Shop"
          budget="$7,600"
          completion={40}
          icon={invision}
          members={2}
        />
      </div>
    </section>
  );
};

export default Projects;
