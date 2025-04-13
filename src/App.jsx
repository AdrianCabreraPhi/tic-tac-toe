import { useState } from "react";
import "./App.css";
import RecuadroTablero from "./components/recuadroTablero";
import { useWindowSize } from "react-use";
import Confetti from "react-confetti";

function App() {
  const baseStylePlayers = "text-white text-7xl p-4 rounded";
  const { width, height } = useWindowSize();
  const players = {
    x: "x",
    o: "O",
  };
  const [turn, setTurn] = useState(players.x);
  const [tablero, setTablero] = useState(Array(9).fill(null));
  const [winner, setWinner] = useState(null);
  const [empate, setEmpate] = useState(false);
  const combosToWinGame = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  const newGame = () => {
    setTablero(Array(9).fill(null));
    setWinner(null);
    setTurn(players.x);
    setEmpate(false);
  };

  const checkEmpate = (board) => {
    return !board.includes(null);
  };

  const changeTurn = (index) => {
    let newTablero = [...tablero];
    // si el usuario hace click en una casilla ocupada por el otro jugador
    if (newTablero[index] != null) return;

    newTablero[index] = turn;
    setTablero(newTablero);

    //bucle para ir viendo todas las combinaciones ganadoras posibles
    for (let index = 0; index < combosToWinGame.length; index++) {
      const combo = combosToWinGame[index];
      // mira si hay ganador
      if (
        newTablero[combo[0]] == turn &&
        newTablero[combo[1]] == turn &&
        newTablero[combo[2]] == turn
      ) {
        //setea el ganador
        setWinner(turn);
        return;
      }
    }

    if (checkEmpate(newTablero)) {
      setEmpate(true);
      return;
    }

    //cambio de turno
    let newTurn = turn == players.x ? players.o : players.x;
    setTurn(newTurn);
  };

  return (
    <>
      <div className="  h-screen w-screen flex  gap-10   flex-col items-center justify-center bg-neutral-900">
        <div className="grid grid-cols-3  gap-10">
          {tablero.map(function (data, index) {
            return (
              <>
                <RecuadroTablero
                  changeTurn={() => changeTurn(index)}
                  key={index}
                  turn ={turn}
                  value={data}
                />
              </>
            );
          })}
        </div>
        {winner != null && (
          <>
            <Confetti width={width} height={height} />
            <section className="container-winner text-xl md:text-4xl border border-dashed text-gray-500 rounded p-4 ">
              <h1>
                Ha ganado el jugador:
                <span className="bg-gray-700 text-white p-2 rounded">
                  {winner}
                </span>{" "}
              </h1>
            </section>
          </>
        )}
        {empate && (
          <section className="container-empate text-4xl border border-dashed text-gray-500 rounded p-4">
            <h1>
              <span className=" text-white p-2 rounded">Empate</span>{" "}
            </h1>
          </section>
        )}

        {(winner || empate) && (
          <button
            onClick={newGame}
            className="text-black cursor-pointer rounded p-2 bg-amber-300"
          >
            New Game
          </button>
        )}

        {!winner && (
          <div className="flex items-center  gap-5  justify-center flex-col">
            <h1 className="text-center text-white">Players</h1>
            <div className="flex flex-row items-center justify-around  gap-20">
              <div
                className={`${baseStylePlayers} ${
                  turn == players.x ? "bg-gray-700" : ""
                }`}
              >
                {players.x}
              </div>
              <div
                className={`${baseStylePlayers} ${
                  turn == players.o ? "bg-gray-700" : ""
                }`}
              >
                {players.o}
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default App;
