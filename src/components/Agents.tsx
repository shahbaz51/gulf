import Agentcard from "./common/Agentcard";
import Heading from "./common/Heading";

export default function Agents() {
  return (
    <>
      <div className="w-full min-h-screen">
          <div className="pt-20 pb-10">
            <div>
                <Heading title="Real Estate Agents" subtitle="With the “list agents shortcode” you can show your agents in any page, alognside with their contact details and link to their agent profile."/>
            </div>
            <Agentcard/>
          </div>
        </div> 
    </>
  )
}
