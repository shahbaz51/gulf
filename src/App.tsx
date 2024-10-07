import Agents from "./components/Agents";
import Featured from "./components/Featured";
import Latestpro from "./components/Latestpro";
import ListingsGrid from "./components/ListingsGrid";

export default function App() {
  return (
    <div className="">
      <Latestpro />
      <ListingsGrid />
      <Featured/>
      <Agents/>
    </div>
  );
}
