import LeftPane from "./LeftBar/LeftPane";
import RightPane from "./RightPane";

const MainComp = () => {
  return (
    <div className="flex-1 bg-slate-600 ">
      <section className="flex-1 flex flex-row   h-full bg-spotifylightblack ">
        <LeftPane />

        <RightPane />
      </section>
    </div>
  );
};

export default MainComp;
