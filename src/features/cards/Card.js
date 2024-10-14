import React, { useState } from "react";
import { useSelector } from "react-redux";
import { cardsSelector } from "./cardsSlice";

export default function Card({ id }) {
  const card = useSelector(cardsSelector(id));
  const [flipped, setFlipped] = useState(false);

  return (
    <li>
      <button className="card" onClick={(e) => setFlipped(!flipped)}>
        {card && flipped ? card.back : card.front}
      </button>
    </li>
  );
}
