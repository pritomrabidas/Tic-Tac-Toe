import { useState } from "react";
import Box from "./Component/Box";

function App() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(true);

  const HandleClick = (index) => {
    if (squares[index] || calculatWinner(squares)) return;
    const newSquares = squares.slice();
    newSquares[index] = isXNext ? "X" : "O";
    setSquares(newSquares);
    setIsXNext(!isXNext);
    console.log(newSquares);
  };
  function calculatWinner(squares) {
    const Lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (const [a, b, c] of Lines) {
      if (
        squares[a] &&
        squares[a] === squares[b] &&
        squares[a] === squares[c]
      ) {
        return squares;
      }
    }
    return null;
  }
  const winner = calculatWinner(squares);
  const status = winner
    ? `Winner Is : ${squares}`
    : `Next player : ${isXNext ? "X" : "O"}`;
  return (
    <section className="bg-gradient-to-l from-gray-400  to-sky-700 via-70% h-screen w-full">
      <div className="container m-auto justify-center relative top-[15%]">
        <h1 className="text-center text-3xl text-[#ffffffc7] font-nunitoFont font-semibold pb-8">
          Tic Tac Toe
        </h1>
        <div className="rounded-lg bg-gradient-to-r from-gray-400  to-sky-700 via-70% border-white w-fit justify-center mx-auto p-10">
          <div className="w-[500px] grid grid-cols-3 gap-11">
            {squares.map((square, index) => (
              <Box
                key={index}
                value={square}
                onClick={() => HandleClick(index)}
              />
            ))}
          </div>
        </div>
        <h1 className="text-center text-3xl text-[#ffffffc7] font-nunitoFont font-semibold pt-8">
          {status}
        </h1>
      </div>
    </section>
  );
}

export default App;
