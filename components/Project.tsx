import mem2 from "../public/icons/projects/2members.svg";
import mem5 from "../public/icons/projects/5members.svg";

import Image from "next/image";

interface ProjectProps {
  icon: any;
  title: string;
  budget: string;
  members: number;
  completion: number;
}

const Project: React.FC<ProjectProps> = ({
  icon,
  title,
  budget,
  members,
  completion,
}) => {
  return (
    <div className="grid grid-cols-3 grid-rows-2 items-center gap-y-4 border-b-solid border-b-[1px] border-b-[#E2E8F0] py-4">
      {/* Project Card */}
      <h2 className="flex font-bold items-center col-span-2 gap-x-3 text-[#2D3748]">
        <Image src={icon} alt={icon + "icon"} /> {title}
      </h2>

      {/* Budget */}
      <p className="text-[#2D3748] font-bold flex justify-end">{budget}</p>

      {/* Progress */}
      <div className="col-span-2">
        <p className="text-[#4FD1C5] font-bold">{completion}%</p>

        {/* Progress bar */}
        <div className="bg-[#E2E8F0] relative w-[125px] h-[4px] rounded-[3px]">
          <span
            className={`w-[${completion}%] block h-[4px] bg-[#4FD1C5] rounded-[3px]`}
          ></span>
        </div>
      </div>

      {/* Members */}
      <div className="flex justify-end">
        <Image src={members == 2 ? mem2 : mem5} alt="people icons" />
      </div>
    </div>
  );
};

export default Project;
