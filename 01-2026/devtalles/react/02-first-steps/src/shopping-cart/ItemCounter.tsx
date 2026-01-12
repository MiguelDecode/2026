import { useState } from "react";

// import "./ItemCounter.css";
import styles from "./ItemCounter.module.css";

interface ItemCounterProps {
  name: string;
  quantity?: number;
}

export const ItemCounter = (props: ItemCounterProps) => {
  const { name, quantity = 0 } = props;

  const [count, setCount] = useState(quantity);

  const handleAdd = () => {
    setCount(count + 1);
  };

  const handleSubstract = () => {
    if (count <= 0) return;
    setCount(count - 1);
  };

  return (
    <section className={styles["item-row"]}>
      <span
        className={styles["item-text"]}
        style={{ color: count === 0 ? "red" : "black" }}
      >
        {name}
      </span>
      <button onClick={handleAdd}>+1</button>
      <span style={{ color: count === 0 ? "red" : "black" }}>{count}</span>
      <button onClick={handleSubstract}>-1</button>
    </section>
  );
};
