// sampleData.js

// Sample Song Object
export const sampleSong = {
  id: "1",
  title: "Sample Song",
  artist: "Sample Artist",
  album: "Sample Album",
  duration: "3:30", // or use seconds for a more precise duration
  genre: "Pop",
  releaseYear: 2022,
  imageUrl: "https://example.com/sample-song-image.jpg",
  audioUrl: "https://example.com/sample-song-audio.mp3",
};

// Sample Album Object
export const sampleAlbum = {
  id: "101",
  title: "Sample Album",
  artist: "Sample Artist",
  releaseYear: 2022,
  genre: "Pop",
  imageUrl: "https://example.com/sample-album-image.jpg",
  songs: [sampleSong],
};

// Sample Artist Object
export const sampleArtist = {
  id: "1001",
  name: "Sample Artist",
  genre: "Pop",
  imageUrl: "https://example.com/sample-artist-image.jpg",
  albums: [sampleAlbum],
};

// Sample Playlist Object
export const samplePlaylist = [
  {
    id: "10001",
    title: "Sample Playlist 1",
    description: "A collection of great songs",
    imageUrl:
      "https://images.theconversation.com/files/512871/original/file-20230301-26-ryosag.jpg?ixlib=rb-1.1.0&rect=97%2C79%2C5799%2C5817&q=45&auto=format&w=926&fit=clip",
    songs: [sampleSong],
  },
  {
    id: "10002",
    title: "Sample Playlist 2",
    description: "Another awesome playlist",
    imageUrl:
      "https://hips.hearstapps.com/hmg-prod/images/7-64ecb1c909b78.png?crop=0.502xw:1.00xh;0.498xw,0&resize=1200:*",
    songs: [sampleSong],
  },
  {
    id: "10003",
    title: "Sample Playlist 3",
    description: "More great tunes to enjoy",
    imageUrl: "https://cdn.musebycl.io/2020-07/michaeljackson_thriller.jpg",
    songs: [sampleSong],
  },
  {
    id: "10004",
    title: "Sample Playlist 4",
    description: "Playlist for different moods",
    imageUrl:
      "https://www.udiscovermusic.com/wp-content/uploads/2015/10/The-Beatles-Abbey-Road-Album-cover-web-optimised-820-1024x1024.jpg",
    songs: [sampleSong],
  },
];
