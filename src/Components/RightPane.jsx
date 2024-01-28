import RecommendedList from "./RecommendedList";
import NavbarElement from "./NavBar/NavbarElement";

const RightPane = () => {
  return (
    <section className="flex flex-col h-full  m-2 ">
      <NavbarElement />
      <div className="flex h-full ">
        <RecommendedList />
      </div>
    </section>
  );
};

export default RightPane;
