import RecommendedList from "./RecommendedList";
import NavbarElement from "./NavBar/NavbarElement";

const RightPane = () => {
  return (
    <section className="flex flex-col  mx-2 bg-black">
      <NavbarElement />
      <div className="flex h-full rounded-lg ">
        <RecommendedList />
      </div>
    </section>
  );
};

export default RightPane;
