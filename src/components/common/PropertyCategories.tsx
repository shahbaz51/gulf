import {
  FaHome,
  FaBuilding,
  FaWarehouse,
  FaCity,
  FaStore,
} from "react-icons/fa";

const categories = [
  { icon: <FaHome className="mr-2 text-[20px]" />, label: "For Sale" },
  { icon: <FaWarehouse className="mr-2 text-[20px]" />, label: "Villas" },
  { icon: <FaBuilding className="mr-2 text-[20px]" />, label: "Apartments" },
  { icon: <FaCity className="mr-2 text-[20px]" />, label: "Houses" },
  { icon: <FaBuilding className="mr-2 text-[20px]" />, label: "Condos" },
  { icon: <FaStore className="mr-2 text-[20px]" />, label: "Retail" },
];

const PropertyCategories = () => {
  return (
    <div className="flex justify-center items-center space-x-4 w-full text-center">
      {categories.map((category, index) => (
        <div
          key={index}
          className="control_tax_sh flex items-center p-[10px] px-[35px] m-[3px] mb-[20px] bg-[#f2f8fe] rounded-[3px] text-[#222] text-[15px] font-medium hover:bg-secondary hover:text-white cursor-pointer"
        >
          {category.icon}
          {category.label}
        </div>
      ))}
    </div>
  );
};

export default PropertyCategories;
