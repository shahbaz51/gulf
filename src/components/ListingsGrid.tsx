import Heading from "./common/Heading";

const Data = [
  {
    img: "/i1.webp",
    title: "Apartment",
    listings: "17 Listings",
  },
  {
    img: "/i2.webp",
    title: "Condos",
    listings: "12 Listings",
  },
  {
    img: "/i3.webp",
    title: "Duplexes",
    listings: "7 Listings",
  },
  {
    img: "/i4.webp",
    title: "Houses",
    listings: "11 Listings",
  },
  {
    img: "/i5.webp",
    title: "Offices",
    listings: "14 Listings",
  },
  {
    img: "/i6.webp",
    title: "Villas",
    listings: "4 Listings",
  },
];

const ListingsGrid = () => {
  return (
    <>
      <div className="w-full  pt-16 pb-10">
        <div className="pt-3 pb-10">
          <Heading
            title="Properties by Category"
            subtitle="Highlight the best of your properties by using the List Category shortcode. You can list specific properties categories, types, cities, areas."
          />
        </div>
        <div className="max-w-7xl mx-auto px-20 py-6 min-h-screen">
          <div className="grid grid-cols-4 gap-3">
            {Data.map((item, index) => (
              <div
                key={index}
                className={`relative rounded-[5px] ${
                  item.title === "Apartment" || item.title === "Villas"
                    ? "col-span-2"
                    : "col-span-1"
                } border border-gray-300 bg-gray-200 h-80`}
              >
                <img
                  src={item.img}
                  alt={item.title}
                  className="object-cover w-full h-full"
                />
                <div className="absolute top-0 left-0 w-full h-full bg-black/10">
                  <div className="absolute top-4 left-4 text-white font-bold">
                    {item.title}
                  </div>
                  <div className="absolute bottom-4 left-4 text-white">
                    {item.listings}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default ListingsGrid;
