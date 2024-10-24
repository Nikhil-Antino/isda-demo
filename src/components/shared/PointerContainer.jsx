import cn from "classnames";

const PointerContainer = ({
  title,
  description,
  children,
  step,
  end,
  hideJourney = false,
}) => (
  <div className="grid h-full grid-cols-[auto_1fr] gap-x-2 md:min-h-[30vh] md:gap-x-3">
    {!hideJourney && (
      <div className="relative col-auto flex flex-col items-center w-10 md:w-12">
        <div className="relative z-10 flex h-10 w-10 items-center justify-center rounded-full bg-quaternary text-center text-white md:h-12 md:w-12">
          <p className="font-semibold text-xl">{step}</p>
        </div>

        <div className="primary-timeline h-[98%] w-0.5" />

        {end && <div className="h-4 w-4 rounded-full bg-quaternary" />}
      </div>
    )}
    <div
      className={cn("flex flex-col gap-y-2 md:mt-2", {
        "col-span-1": end,
        "col-span-1": !end,
      })}
    >
      {title && (
        <h3
          className={cn("text-xl md:text-2xl font-semibold", {
            "pb-6": !description,
          })}
        >
          {title}
        </h3>
      )}
      {description && <p className="pb-6 leading-5">{description}</p>}
      {children}
    </div>
  </div>
);

export default PointerContainer;
