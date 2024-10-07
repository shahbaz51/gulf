type HeadingTypes = {
  title: String;
  subtitle: String;
};

const Heading = ({ title, subtitle }: HeadingTypes) => {
  return (
    <>
      <div className="w-full mx-auto text-center ">
        <h1 className="text-[32px]  text-textprimary font-medium mb-3">{title}</h1>
        <p className="font-normal leading-[1.5em] w-[56%] mx-auto text-textSeconday">
          {subtitle}
        </p>
        
      </div>
    </>
  );
};

export default Heading;
