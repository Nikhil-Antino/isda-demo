function HorizonCard({ title, description, Icon, badge }) {
  return (
    <div className="rounded-xl px-4 md:px-6 p-6 grid grid-cols-12 items-center bg-white border border-[#E5E7EB] w-full md:w-2/5">
      <div className="hidden md:block col-span-2">
        <Icon size={56} className="text-quaternary" />
      </div>

      <div className="md:hidden col-span-2">
        <Icon size={36} className="text-quaternary" />
      </div>

      <div className="flex flex-col gap-y-2 items-start col-span-10">
        <div className="flex items-center gap-x-4">
          <h3 className="text-base md:text-xl font-semibold">{title}</h3>

          <span className="px-3 py-1 rounded-xl bg-quaternary text-xs text-white font-medium text-center">
            {badge}
          </span>
        </div>
        <p className="text-sm md:text-base text-gray-600">{description}</p>
      </div>
    </div>
  );
}

export default HorizonCard;
