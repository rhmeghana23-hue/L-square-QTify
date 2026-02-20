import { useEffect, useState } from "react";
import axios from "axios";
import Card from "../Card/Card";
import Carousel from "../Carousel/Carousel";
import styles from "./Section.module.css";

function Section({ title, api, type, showToggle = true }) {
  const [data, setData] = useState([]);
  const [collapsed, setCollapsed] = useState(true);

  useEffect(() => {
    axios.get(api).then((res) => setData(res.data));
  }, [api]);

  return (
    <div className={styles.section}>
      <div className={styles.header}>
        <h2>{title}</h2>

        {showToggle && (
          <button onClick={() => setCollapsed(!collapsed)}>
            {collapsed ? "Show All" : "Collapse"}
          </button>
        )}
      </div>

      {collapsed ? (
        <Carousel data={data} type={type} />
      ) : (
        <div className={styles.grid}>
          {data.map((item) => (
            <Card
              key={item.id}
              image={item.image}
              title={item.title}
              count={item.follows || item.likes}
              type={type}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default Section;