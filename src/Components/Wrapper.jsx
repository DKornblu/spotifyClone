import LeftPane from "./LeftBar/LeftPane";
import RightPane from "./RightPane";

const MainComp = () => {
  return (
    <section className="flex-1 flex flex-row   h-full bg-spotifylightblack ">
      <LeftPane />

      <RightPane />
    </section>
  );
};

export default MainComp;
