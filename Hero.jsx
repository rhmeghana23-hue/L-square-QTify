import headphone from "../assets/headphone.png";
import styles from "./Hero.module.css";

function Hero() {
  return (
    <div className={styles.hero}>
      <div>
        <h1>100 Thousand Songs, ad-free</h1>
        <p>Over thousands podcast episodes</p>
      </div>
      <img src={headphone} alt="Headphone" />
    </div>
  );
}

export default Hero;