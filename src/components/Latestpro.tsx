import Heading from "./common/Heading";
import Card from "./common/Card";
import PropertyCategories from "./common/PropertyCategories";
import Loadmorebtn from "./common/Loadmorebtn";

const arr = [{}, {}, {}];
export default function Latestpro() {
  return (
    <>
      <div className="w-full min-h-screen bg-[#f2f2f2]">
        <div className="pt-16 pb-3">
          <div className="">
            <Heading
              title="Latest Properties"
              subtitle="These are the latest properties in the Sales category. You can create the list using the “latest listing shortcode” and show items by specific categories."
            />
          </div>
          <div className="pt-10">
            <PropertyCategories />
          </div>
          <div className="px-10 py-5">
            <div className="flex gap-3 flex-wrap justify-center">
              {arr.map((_, i) => (
                <Card key={i} />
              ))}
            </div>
          </div>
        </div>
        <Loadmorebtn />
      </div>
    </>
  );
}
