function HorizonCard({ title, description, Icon, badge }) {
  return (
    <div className="rounded-xl pl-4 pr-0 py-4 md:pl-6 md:pr-0 md:pl-6 md:py-6 grid grid-cols-12 items-center bg-white border-2 border-[#E5E7EB] w-full lg:w-3/5 xl:w-2/5 relative">
      <div className="hidden md:block col-span-2">
        <Icon size={56} className="text-quaternary" />
      </div>

      <div className="md:hidden col-span-2">
        <Icon size={36} className="text-quaternary" />
      </div>

      <div className="flex flex-col gap-y-2 items-start col-span-10">
        <div className="flex items-center gap-x-4 justify-between w-full">
          <h4 className="text-base md:text-xl font-semibold">{title}</h4>

          <span className="px-3 py-1 bg-quaternary text-xs text-white font-medium text-center relative rounded-s-xl">
            {badge}
          </span>
        </div>
        <p className="text-sm md:text-base text-gray-600 pr-4">{description}</p>
      </div>
    </div>
  );
}

export default HorizonCard;
