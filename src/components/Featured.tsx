import Featurecard from "./common/Featurecard";
import Heading from "./common/Heading";

const arr = [{}, {}, {}, {}];

export default function Featured() {
  return (
    <>
      <div className="w-full min-h-screen bg-[#f2f2f2]">
        <div className="pt-24 pb-10">
          <div className="pb-10">
            <Heading
              title="Featured Properties"
              subtitle="Here are two listings displayed with the featured property shortcode, which you can use when you have some special properties to present."
            />
          </div>
          <div className="px-20 py-6 grid grid-cols-2 gap-1">
            {arr.map((_, i) => (
              <div className="mb-4">
                <Featurecard key={i} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
