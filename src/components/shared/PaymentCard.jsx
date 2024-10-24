import React from "react";

function PaymentCard() {
  return (
    <div className="gradient-border-light flex flex-col items-center gap-y-10 rounded-xl p-6">
      <div className="flex flex-col items-center gap-y-[4px]">
        <h3 className="font-satoshi-bold text-[20px] leading-[30px] text-primary">
          {title}
        </h3>
        <p className="text-center font-satoshi-regular text-[16px] leading-6 text-gray-600">
          {description}{" "}
          {highlight && (
            <span className="font-satoshi-bold font-bold  text-primary">
              {highlight}
            </span>
          )}
        </p>
      </div>

      <div className="flex flex-col items-center gap-y-[8px]">
        <h4 className="font-satoshi-bold text-[36px] leading-none text-primary">
          Rs. {price.toLocaleString()}
          {isEMI ? "/mo" : ""}
        </h4>
        <p className="font-satoshi-medium text-[14px] leading-[20px] text-[#A3A3A3]">
          {note}
        </p>
      </div>

      {/* <div className="mt-auto grid w-full gap-y-[16px]">
      <Secondary label={'Enroll Now'} linkCTA href={CTALink} />

      {isEMI ? (
        <Modal
          open={<HierarchyPrimary label={secondaryCTA} customStyle={'justify-self-center'} />}
        >
          <EMIPlans />
        </Modal>
      ) : (
        <HierarchyPrimary
          label={secondaryCTA}
          customStyle={'justify-self-center'}
          onClick={!isEMI && openWidget}
        />
      )}
    </div> */}
    </div>
  );
}

export default PaymentCard;
