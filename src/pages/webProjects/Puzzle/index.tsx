import { useState, useEffect } from "react";

export default function PuzzleGame() {
  const [tiles, setTiles] = useState<number[]>([]);
  const [size] = useState<number>(3); // 4x4 grid

  // Initialize the puzzle
  useEffect(() => {
    const initialTiles = Array.from(
      { length: size * size - 1 },
      (_, i) => i + 1
    );
    initialTiles.push(0); // Empty tile
    setTiles(initialTiles);
  }, [size]);

  const shuffleTiles = () => {
    const shuffledTiles = [...tiles];
    for (let i = shuffledTiles.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledTiles[i], shuffledTiles[j]] = [
        shuffledTiles[j],
        shuffledTiles[i],
      ];
    }
    setTiles(shuffledTiles);
  };

  const moveTile = (index: number) => {
    const emptyIndex = tiles.indexOf(0);
    const canMove = [
      emptyIndex - 1,
      emptyIndex + 1,
      emptyIndex - size,
      emptyIndex + size,
    ].includes(index);

    if (canMove) {
      const newTiles = [...tiles];
      [newTiles[index], newTiles[emptyIndex]] = [
        newTiles[emptyIndex],
        newTiles[index],
      ];
      setTiles(newTiles);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="mb-4 text-2xl font-bold">15 Puzzle Game</h1>
      <button
        onClick={shuffleTiles}
        className="mb-4 rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-700"
      >
        Shuffle
      </button>
      <div className={`grid grid-cols-3 gap-2`}>
        {tiles.map((tile, index) => (
          <div
            key={index}
            onClick={() => moveTile(index)}
            className={`w-16 h-16 flex items-center justify-center bg-blue-300 rounded cursor-pointer ${
              tile === 0 ? "bg-gray-200" : ""
            }`}
          >
            {tile !== 0 && <span className="text-lg font-bold">{tile}</span>}
          </div>
        ))}
      </div>
    </div>
  );
}

{
  /* grid-cols-4 */
}
