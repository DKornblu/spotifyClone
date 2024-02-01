import React from "react";

import {
  sampleSong,
  sampleAlbum,
  sampleArtist,
  samplePlaylist,
} from "../Data/SampleData";
import SearchResults from "../Components/SearchResults";

const SearchPage = () => {
  return (
    <>
      <section className="flex flex-1 flex-col h-full overflow-y-scroll bg-spotifyblack border border-green-600">
        <SearchResults />
      </section>
    </>
  );
};

export default SearchPage;
