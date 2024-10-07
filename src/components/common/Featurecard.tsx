import { LiaBedSolid } from "react-icons/lia";
import { GiBathtub } from "react-icons/gi";
import { SlSizeFullscreen } from "react-icons/sl";
import { CiShare2 } from "react-icons/ci";
import { IoIosHeartEmpty } from "react-icons/io";
import { IoMdHeart } from "react-icons/io";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";

import Slider from "react-slick"; // Importing React Slick
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { LiaAngleLeftSolid, LiaAngleRightSolid } from "react-icons/lia"; // Importing custom icons for arrows

import { useState } from "react"; // Import useState

// Function to truncate text
const truncateText = (text: String, maxLength: number) => {
  return text.length > maxLength ? text.slice(0, maxLength) + "..." : text;
};

export default function featurecard() {
  const [isFavorite, setIsFavorite] = useState(false); // State to track heart fill
  const description =
    "This property is mostly wooded and sits high on a hilltop overlooking the Mohawk River Valley.";

  const handleHeartClick = () => {
    setIsFavorite(!isFavorite); // Toggle the heart state
  };
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };
  return (
    <>
      <div className="grid grid-cols-[40%_60%]  w-[560px]  rounded-[1px] overflow-hidden">
        <div className="relative">
          <Slider {...settings}>
            {/* Slider Images */}
            <div className="relative w-[251px] h-[328px]">
              <img
                src="/pic.png"
                alt="img"
                className="w-full h-full object-cover "
              />
              <div className="absolute inset-0 bg-black opacity-20"></div>
            </div>
            <div className="relative w-[251px] h-[328px]">
              <img
                src="/pic.png"
                alt="img"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black opacity-20"></div>
            </div>
            <div className="relative w-[251px] h-[328px]">
              <img
                src="/pic.png"
                alt="img"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black opacity-20"></div>
            </div>
          </Slider>

          {/* Overlay for Features and Location */}
          <div className="flex justify-between absolute top-4  right-3 z-10">
            <button className="bg-black text-white py-1 px-3 rounded text-xs">
              Active
            </button>
          </div>

          <div className="flex justify-between absolute bottom-2 left-3 right-18 z-10">
            <img
              src={"/3.webp"}
              alt=""
              className="h-12 w-12 mr-3 mb-2   rounded-full"
            />
          </div>
        </div>

        <div className="p-4 bg-white w-[307px] h-[328px] px-[30px]">
          <h4 className="w-full text-[18px] text-[#222] font-medium hover:text-[#0073e1] hover:transition-[.5s] mt-[15px]">
            Luxury House in Greenville
          </h4>
          <p className=" font-medium text-[#0073e1] text-[17px] ">$ 14,000</p>
          <p className="w-full text-[14px] text-[#5c727d] my-[15px]">
            {truncateText(description, 70)}
          </p>
         

          <div className=" flex justify-between bg-white">
                 <div className="flex space-x-3 text-gray-800">
              <HoverCard>
                <HoverCardTrigger>
                  <span>
                    <CiShare2 className="text-sm text-[#cdcdcd] border border-[#eef3f6] h-[27px] w-[27px] p-[5px] cursor-pointer" />
                  </span>
                </HoverCardTrigger>
                <HoverCardContent className="bg-gradient-to-r from-gray-800 to-black text-white text-[8px] font-medium px-2 py-1 rounded-md shadow-md transition-transform duration-300 hover:scale-105 hover:shadow-lg hover:bg-opacity-80 flex items-center justify-center mr-5">
                  Share
                </HoverCardContent>
              </HoverCard>

              <HoverCard>
                <HoverCardTrigger>
                  <span onClick={handleHeartClick}>
                    {isFavorite ? (
                      <IoMdHeart
                        size={30}
                        className={`text-sm border border-[#eef3f6] h-[27px] w-[27px] p-[5px] cursor-pointer transition-colors duration-100 fill-[#0073e1]`}
                      />
                    ) : (
                      <IoIosHeartEmpty
                        size={30}
                        className="text-sm border border-[#eef3f6] h-[27px] w-[27px] p-[5px] cursor-pointer transition-colors duration-100"
                      />
                    )}
                  </span>
                </HoverCardTrigger>
                <HoverCardContent className="bg-gradient-to-r from-gray-800 to-black text-white text-[8px] font-medium px-2 py-1 rounded-md shadow-md transition-transform duration-300 hover:scale-105 hover:shadow-lg hover:bg-opacity-80 flex items-center justify-center">
                  Add to Favorite
                </HoverCardContent>
              </HoverCard>
            </div>
            
          </div>
          <div className="flex space-x-6  border-t border-gray-100 mt-28 pt-1">
            <span className="flex items-center opacity-70">
              <LiaBedSolid />
              <p className="ml-2">3</p>
            </span>
            <span className="flex items-center opacity-70">
              <GiBathtub />
              <p className="ml-2">6</p>
            </span>
            <span className="flex items-center opacity-70">
              <SlSizeFullscreen className="text-[13px]" />
              <p className="ml-2 text-[14px]">200 ft²</p>
            </span>
          </div>
        </div>
      </div>
    </>
  );
}

// Custom Next Arrow
const NextArrow = (props: any) => {
  const { onClick } = props;
  return (
    <button
      className="text-[#FFFFFF] absolute top-1/2 right-1.5 transform -translate-y-1/2 z-10"
      onClick={onClick}
    >
      <LiaAngleRightSolid size={25} />
    </button>
  );
};

// Custom Prev Arrow
const PrevArrow = (props: any) => {
  const { onClick } = props;
  return (
    <button
      className="text-[#FFFFFF] absolute top-1/2 left-1.5 transform -translate-y-1/2 z-10"
      onClick={onClick}
    >
      <LiaAngleLeftSolid size={25} />
    </button>
  );
};
