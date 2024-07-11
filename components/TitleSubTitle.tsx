import Image from "next/image";
import { twMerge } from "tailwind-merge";

interface TitleSubTitle {
  className?: string;
  title: any;
  sub: any;
  icon?: string;
  green?: string;
  red?: string;
}

const TitleSubTitle: React.FC<TitleSubTitle> = ({
  className,
  title,
  sub,
  icon,
  green,
  red,
}) => {
  return (
    <div className={twMerge(`flex flex-col gap-y-1`, className)}>
      {/* Title */}
      <h2 className="text-[#2D3748] font-bold text-lg">{title}</h2>

      {/* Subtitle */}
      <p className="text-[#A0AEC0] flex text-xs gap-.5 font-bold">
        {icon ? <Image src={icon!} alt={icon!} className="w-3" /> : " "}
        <span className="text-[#48BB78] pr-0.5">{green}</span>
        <span className="text-[#E53E3E]">{red}</span>
        {sub}
      </p>
    </div>
  );
};

export default TitleSubTitle;
