import { useState } from "react";

function Card({ cards }) {
  const [filter, setFilter] = useState("Todas");
  const [search, setSearch] = useState("");
  const [, forceUpdate] = useState(0);
  const randomNumber = 0;
  const visible = cards.filter((card) =>
    (filter === "Todas" || card.type === filter || card.id === filter || card.fav === filter)
    && card.name.toLowerCase().includes(search.toLowerCase()));

  return (
    <>
      <button onClick={() => {
        cards.sort((a, b) => a.id - b.id);
        setFilter("Todas");
        forceUpdate(n => n + 1);
      }}>
        Todos
      </button>

      <button onClick={
        (card) => setFilter
        ((Math.floor(Math.random() * cards.length)) + 1)
        }>
        Gambling
      </button>

      <button onClick={() => {
        setFilter("Criatura");
        cards.sort((a, b) => a.id - b.id);
        forceUpdate(n => n + 1);
        }}>
        Só criaturas
      </button>

      <button onClick={() =>{
        setFilter(true);
        cards.sort((a, b) => a.id - b.id);
        forceUpdate(n => n + 1);
        }}>
        Favoritos
      </button>

      <button onClick={() => {
        cards.sort((a, b) => a.attack - b.attack);
        forceUpdate(n => n + 1);
      }}>
        Sort
      </button>

      <input
        value={search}
        onChange={(e) => {
          setSearch(e.target.value);
        }}
      />

      <h2>Total de Cartas:{visible.length}</h2>
      {visible.map((card) => (
        <li key={card.id}>
          <h3>{card.name}</h3>
          <button
            onClick={() => {
              card.fav = !card.fav;
              forceUpdate(n => n + 1);
            }}
            style={{
              backgroundColor: card.fav ? "red" : "grey",
            }}
          ></button>
          <p>Tipo: {card.type}|
            {card.attack >= 6 ?
              <strong>Ataque: {card.attack}</strong> :
              <>Ataque:{card.attack}</>}|
            Defesa: {card.defense}
          </p>
        </li>
      ))}
    </>
  );
}
export default Card