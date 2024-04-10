import { useState } from "react";
import s from "./page.module.css";
import { fruits as fruitsData } from "../sampleData.mjs";

function FruitItem({ i, fruit, isHide, setHide }) {
  console.log(fruit)
  const { name, color, price } = fruit;
  return (
    <li className={s.itemListItem} key={name + i}>
      <span>{name}</span>
      <span>{color}</span>
      {isHide ? null : <span>{price}</span>}
      <button type="button" onClick={() => setHide(!isHide)}>
        🥷
      </button>
    </li>
  );
}

export default function Page() {
  const [fruits, setFruits] = useState(fruitsData);
  const [isHide, setHide] = useState(false);
  const handleDelete = (idx) => {
    setFruits(fruits.filter((f, i) => i !== idx));
  };

  return (
    <div className={s.appContainer}>
      <div></div>
      <ul className={s.itemListWrapper}>
        {fruits.map((f, i) => (
          <FruitItem
            key={f.name + i}
            i={i}
            fruit={f}
            isHide={isHide}
            setHide={setHide}
            handleDelete={handleDelete}
          />
        ))}
      </ul>
    </div>
  );
}