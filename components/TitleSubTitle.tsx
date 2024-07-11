import Image from "next/image";
import { twMerge } from "tailwind-merge";

interface TitleSubTitle {
  className?: string;
  title: any;
  sub: any;
  icon?: string;
}

const TitleSubTitle: React.FC<TitleSubTitle> = ({ className, title, sub, icon }) => {
  return (
    <div className={twMerge(`flex flex-col gap-y-1`, className)}>
      {/* Title */}
      <h2 className="text-[#2D3748] font-bold">{title}</h2>

      {/* Subtitle */}
      <p className="text-[#A0AEC0] flex text-xs gap-.5 font-bold"><Image src={icon!} alt={icon!} className="w-3"/> {sub}</p>
    </div>
  );
};

export default TitleSubTitle;
