import React from "react";

import {
  sampleSong,
  sampleAlbum,
  sampleArtist,
  samplePlaylist,
} from "../Data/SampleData";
import SearchResults from "../Components/SearchResults";

const SearchPage = ({ searchInput }) => {
  console.log(searchInput);

  return (
    <>
      <section className="flex flex-1 flex-col h-full overflow-y-scroll bg-spotifyblack ">
        <SearchResults />
      </section>
    </>
  );
};

export default SearchPage;
