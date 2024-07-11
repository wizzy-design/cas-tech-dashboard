import Image from "next/image";

interface OrderProps {
  icon: any;
  title: string;
  date: string;
}

const Order: React.FC<OrderProps> = ({ icon, title, date }) => {
  return (
    <div className="">
      {/* Icon and Line */}
      <div className="flex gap-x-4">
        <Image src={icon} alt={icon} />
        <h2 className="font-bold text-[#2D3748] text-[14px]">{title}</h2>
      </div>

      {/* Title and date */}
      <div className="flex pl-2 pt-1">
        <div className="flex justify-center w-[2px] bg-[#E2E8F0] h-[37px] rounded-md"></div>
        <p className="text-xs text-[#A0AEC0] font-bold pl-6 pt-0.5">{date}</p>
      </div>
    </div>
  );
};

export default Order;
