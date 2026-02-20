import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Section from "./components/Section/Section";
import SongsSection from "./components/SongsSection/SongsSection";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />

      {/* Top Albums */}
      <Section
        title="Top Albums"
        api="https://qtify-backend.labs.crio.do/albums/top"
        type="album"
      />

      {/* New Albums */}
      <Section
        title="New Albums"
        api="https://qtify-backend.labs.crio.do/albums/new"
        type="album"
      />

      {/* Songs Section */}
      <SongsSection />
    </div>
  );
}

export default App;