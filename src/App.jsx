import Card from "./Card.jsx";

const cards = [
  { id: 1, name: "Dragão de Cobalto", type: "Criatura", attack: 7, defense: 5,fav: false},
  { id: 2, name: "Guardiã das Marés", type: "Criatura", attack: 4, defense: 8,fav: false },
  { id: 3, name: "Raio Carmesim", type: "Feitiço", attack: 6, defense: 0,fav: 0 },
  { id: 4, name: "Muralha de Granito", type: "Estrutura", attack: 0, defense: 10,fav: false },
  { id: 5, name: "Lobo das Cinzas", type: "Criatura", attack: 5, defense: 3,fav: false }
];

function App() {
  return (
    <main>
      <h1>A minha coleção</h1>
      <Card cards={cards}/>
    </main>
  );
}

export default App;
