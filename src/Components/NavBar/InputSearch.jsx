import { FaSearch } from "react-icons/fa"; // Assuming you are using react-icons library

export default function InputSearch() {
  return (
    <div className="rounded-full">
      <div className="relative  focus:ring-2 focus:ring-inset focus:ring-white text-white">
        <div className="absolute inset-y-0 left-0 flex  items-center pl-4">
          <FaSearch />
        </div>
        <input
          type="text"
          name="searchSong"
          className="block w-[350px] rounded-full border-0 py-3 pl-10 pr-20 placeholder:text-gray-400  bg-spotifylightblack sm:text-sm sm:leading-6"
          placeholder="What do you want to listen to?"
        />
      </div>
    </div>
  );
}
