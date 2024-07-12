import Image from "next/image";

import TitleSubTitle from "./TitleSubTitle";

interface StatStickerProps {
  titleSubClassName?: string;
  subClassName?: string;
  title: any;
  sub: any;
  icon?: any;
  titleIcon?: string;
  green?: string;
  red?: string;
}

const StatSticker: React.FC<StatStickerProps> = ({
  title,
  sub,
  icon,
  titleIcon,
  green,
  red,
  titleSubClassName,
  subClassName,
}) => {
  return (
    <section className="bg-white flex justify-between px-3 py-2 w-[12rem] rounded-[15px] shadow-sm lg:w-[15rem]">
      <TitleSubTitle
        title={title}
        sub={sub}
        icon={titleIcon}
        green={green}
        red={red}
        className={titleSubClassName}
        subClassName={subClassName}
      />

      {/* Icon */}
      <div className="flex items-center justify-center px-2.5 py-2 bg-[#4FD1C5] rounded-[12px]">
        <Image src={icon} alt="Icon for sticker" />
      </div>
    </section>
  );
};

export default StatSticker;
