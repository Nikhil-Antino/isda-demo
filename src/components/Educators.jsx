import { FaLinkedinIn } from "react-icons/fa";
import Badge from "./shared/Badge";
import SliderComponent from "./shared/CustomSlider";
import Link from "next/link";
import Image from "next/image";
import { educatorsData } from "@/utils/constant";

const Educators = () => {
  return (
    <div
      id="educators"
      className="px-4 pt-10 pb-16 md:gap-y-12 md:pt-24 md:pb-30"
    >
      <div className="md:max-w-[1360px] mx-auto flex flex-col items-center gap-y-10">
        <div className="flex flex-col gap-y-2 items-center overflow-hidden">
          <Badge customStyle={"flex items-center gap-x-1 mb-4"}>
            Educators
          </Badge>

          <h2 className="text-xl md:text-3xl font-semibold text-center">
            Who will you{" "}
            <span className="text-primary bg-[url('/images/underline.svg')] bg-contain bg-center">
              learn from?
            </span>
          </h2>
          <p className="text-sm md:text-lg text-gray-600 text-center">
            Get taught by educators from top educational institutions and
            companies
          </p>
        </div>

        <div className="w-full">
          <SliderComponent
            swiperOptions={{
              breakpoints: {
                320: {
                  slidesPerView: 1,
                  slidesPerGroup: 1,
                },
                1024: {
                  slidesPerView: 3,
                  spaceBetween: 32,
                  slidesPerGroup: 3,
                },
              },
            }}
            buttonStyle={{
              size: 24,
              buttonClass: "col-span-6 rounded-full",
              leftButton: "place-self-end",
              rightButton: "place-self-start",
            }}
          >
            {educatorsData.map((educator, index) => (
              <EducatorsCard key={index} {...educator} />
            ))}
          </SliderComponent>
        </div>
      </div>
    </div>
  );
};

export default Educators;

function EducatorsCard({
  name,
  profession,
  description,
  quote,
  profileUrl,
  profile,
}) {
  return (
    <div className="flex flex-col items-center gap-y-4 rounded-xl py-6 px-4 overflow-hidden bg-grayshade border border-[#E5E7EB] h-full">
      <div className="w-56 h-56 rounded-full bg-red-100 col-span-3 md:col-span-2 overflow-hidden relative">
        {profile === null ? (
          <div className="bg-red-300 w-full h-full flex items-center justify-center">
            <p className="text-white text-7xl font-white">
              {name?.slice(0, 1)}
            </p>
          </div>
        ) : (
          <Image src={profile} objectFit="cover" layout="fill" alt="student" />
        )}
      </div>

      <div className="flex flex-col gap-y-6">
        <div className="grid grid-cols-12">
          <div className="flex flex-col gap-y-1 col-span-11">
            <h3 className="text-xl font-semibold">{name}</h3>
            <p className="text-sm font-medium text-gray-600">{profession}</p>
          </div>

          <Link passHref href={profileUrl} legacyBehavior target="_blank">
            <FaLinkedinIn size={24} className="text-primary cursor-pointer" />
          </Link>
        </div>

        <p className="text-base font-medium text-gray-600">{description}</p>

        <p className="text-gray-700 italic text-right">{quote}</p>
      </div>
    </div>
  );
}
