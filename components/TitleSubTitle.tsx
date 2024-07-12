import Image from "next/image";
import { twMerge } from "tailwind-merge";

interface TitleSubTitle {
  className?: string;
  subClassName?: string;
  title: any;
  sub: any;
  icon?: string;
  green?: string;
  greensub?: string;
  red?: string;
}

const TitleSubTitle: React.FC<TitleSubTitle> = ({
  className,
  title,
  sub,
  icon,
  green,
  greensub,
  red,
  subClassName,
}) => {
  return (
    <div className={twMerge(`flex flex-col gap-y-1`, className)}>
      {/* Title */}
      <div className={twMerge(`flex items-center`, subClassName)}>
        <h2 className="text-[#2D3748] font-bold text-[14px]">{title}</h2>
        <span className="text-[#48BB78] text-xs font-bold">{green}</span>
        <span className="text-[#E53E3E] text-xs font-bold">{red}</span>
      </div>

      {/* Subtitle */}
      <p className="text-[#A0AEC0] flex text-xs gap-.5 font-bold">
        {icon ? <Image src={icon!} alt={icon!} className="w-3" /> : ""}
        <span className="text-[#48BB78] pr-0.5">{greensub}</span>
        {sub}
      </p>
    </div>
  );
};

export default TitleSubTitle;
