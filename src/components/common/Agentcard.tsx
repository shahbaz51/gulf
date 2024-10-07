
export default function AgentCard() {
  const description =
    "Whether it is working with a first time homebuyer, a luxury home listing or a seasoned investor.";
  const maxLength = 85;

  return (
    <div className="mt-10 ml-24 relative">
      <div className="w-[360px] h-[420px] border border-red-600 shadow-md">
        <div className="relative">
          <img
            src="/agent1.webp"
            alt="img"
            className="w-[345px] mx-auto my-auto object-cover mt-[7px] rounded-[4px]"
          />
          <p className="absolute left-4 bottom-2.5 text-[12px] rounded bg-[rgba(105,193,125,0.85)] text-white px-4 py-1 mt-1 leading-3 z-10">
            4 listings
          </p>
        </div>
        <h4 className="pl-5 mt-5 text-[20px] font-medium text-[#222]">
          Lilly Bicharm
        </h4>
        <div className="pl-5 my-[10px] leading-[1.65em] text-[#aab0b4]">
          Realtor
        </div>
        <div className="m-[10px 20px] text-sm text-[#aab0b4] px-4">
          {description.length > maxLength
            ? `${description.substring(0, maxLength)}...`
            : description}
        </div>

        {/* Right aligned envelope and phone icons */}
       
      </div>
    </div>
  );
}
