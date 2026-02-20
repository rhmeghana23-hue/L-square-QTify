import { Chip } from "@mui/material";
import styles from "./Card.module.css";

function Card({ image, title, count, type }) {
  return (
    <div className={styles.card}>
      <div className={styles.imageContainer}>
        <img src={image} alt={title} />
        <Chip
          label={`${count} ${type === "song" ? "Likes" : "Follows"}`}
          className={styles.chip}
        />
      </div>
      <div className={styles.bottom}>
        <p>{title}</p>
      </div>
    </div>
  );
}

export default Card;