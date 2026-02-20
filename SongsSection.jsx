import { useEffect, useState } from "react";
import axios from "axios";
import { Tabs, Tab } from "@mui/material";
import Carousel from "../Carousel/Carousel";

function SongsSection() {
  const [songs, setSongs] = useState([]);
  const [genres, setGenres] = useState([]);
  const [selected, setSelected] = useState("all");

  useEffect(() => {
    axios.get("https://qtify-backend.labs.crio.do/songs")
      .then(res => setSongs(res.data));

    axios.get("https://qtify-backend.labs.crio.do/genres")
      .then(res => setGenres(res.data.data));
  }, []);

  const filteredSongs =
    selected === "all"
      ? songs
      : songs.filter(song => song.genre.key === selected);

  return (
    <div>
      <h2>Songs</h2>

      <Tabs value={selected} onChange={(e, val) => setSelected(val)}>
        <Tab label="All" value="all" />
        {genres.map((genre) => (
          <Tab
            key={genre.key}
            label={genre.label}
            value={genre.key}
          />
        ))}
      </Tabs>

      <Carousel data={filteredSongs} type="song" />
    </div>
  );
}

export default SongsSection;