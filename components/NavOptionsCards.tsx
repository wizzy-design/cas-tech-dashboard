import Image from "next/image";

interface NavOptionsCardsProps {
  icon: any;
  title: string;
  first?: boolean;
}

const NavOptionsCards: React.FC<NavOptionsCardsProps> = ({ icon, title, first }) => {
  return (
    <div className={`${first ? "bg-white shadow-md rounded-[15px] py-3" : " "} px-3 flex items-center gap-x-4 my-5`}>
      {/* Icon */}
      <div className={`${first ? "bg-[#4FD1C5]": "bg-white"} rounded-[12px] p-2 shadow-md`}>
        <Image src={icon} alt="Icon" className="w-[15px]" />
      </div>

      {/* Title */}
      <p className={`${first ? "text-[#2D3748]" : ""} font-bold text-[#A0AEC0] text-sm`}>{title}</p>
    </div>
  );
};

export default NavOptionsCards;
