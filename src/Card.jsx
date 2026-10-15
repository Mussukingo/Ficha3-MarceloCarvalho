import { useState } from "react";

function Card({ cards }) {
  const [filter, setFilter] = useState("Todas");
  const visible = cards.filter((card) => filter === "Todas" || card.type === filter);
  const [search, setSearch] = useState("");

  return (
    <>
      <button onClick={(card) => setFilter("Todas")}>
        Todos
      </button>

      <button onClick={() => setFilter("Criatura")}>
        Só criaturas
      </button>

      <input
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <h2>Total de Cartas:{cards.length}</h2>
      {visible.map((card) => (
        <li key={card.id}>
          <h3>{card.name}</h3>
          <p>Tipo: {card.type}|
            {card.attack >= 6 ? <strong>Ataque: {card.attack}</strong> : <>Ataque:{card.attack}</>}|
            Defesa: {card.defense}
          </p>
        </li>
      ))}
    </>
  );
}
export default Card