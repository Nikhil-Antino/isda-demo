function HorizonCard({ title, description, Icon, badge }) {
  return (
    <div className="rounded-xl p-6 grid grid-cols-12 items-center bg-white border border-[#E5E7EB] w-full md:w-2/5">
      <Icon size={56} className="col-span-3 xl:col-span-2 text-quaternary" />
      <div className="flex flex-col gap-y-2 items-start col-span-9 xl:col-span-10">
        <div className="flex items-center gap-x-4">
          <h3 className="text-lg md:text-xl font-semibold">{title}</h3>

          <span className="px-3 py-1 rounded-xl bg-quaternary text-xs text-white font-medium">
            {badge}
          </span>
        </div>
        <p className="text-base text-gray-600">{description}</p>
      </div>
    </div>
  );
}

export default HorizonCard;
