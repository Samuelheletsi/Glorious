'use client';
import { useState, useEffect } from 'react';
import scriptureData from '@/data/scripture.json';

type SolutionWord = {
  word: string;
  row: number;
  col: number;
  direction: 'horizontal' | 'vertical' | 'diagonal';
};

const solution: SolutionWord[] = [
  { word: 'ANOINTING', row: 0, col: 0, direction: 'horizontal' },
  { word: 'BIBLE', row: 1, col: 0, direction: 'horizontal' },
  { word: 'CROSS', row: 2, col: 0, direction: 'horizontal' },
  { word: 'CROWN', row: 3, col: 0, direction: 'horizontal' },
  { word: 'FAITH', row: 4, col: 0, direction: 'horizontal' },
  { word: 'GLORY', row: 0, col: 2, direction: 'vertical' },
  { word: 'GOSPEL', row: 1, col: 3, direction: 'vertical' },
  { word: 'GRACE', row: 0, col: 5, direction: 'vertical' },
  { word: 'SPIRIT', row: 0, col: 7, direction: 'horizontal' },
  { word: 'TRUTH', row: 2, col: 6, direction: 'vertical' },
  { word: 'HEALING', row: 5, col: 0, direction: 'horizontal' },
  { word: 'HOLY', row: 6, col: 2, direction: 'vertical' },
  { word: 'HOPE', row: 7, col: 4, direction: 'horizontal' },
  { word: 'JESUS', row: 8, col: 0, direction: 'horizontal' },
  { word: 'JOY', row: 9, col: 2, direction: 'horizontal' },
  { word: 'KINGDOM', row: 10, col: 0, direction: 'horizontal' },
  { word: 'LIGHT', row: 11, col: 1, direction: 'horizontal' },
  { word: 'LOVE', row: 12, col: 3, direction: 'horizontal' },
  { word: 'MIRACLE', row: 13, col: 0, direction: 'horizontal' },
  { word: 'VICTORY', row: 14, col: 2, direction: 'horizontal' },
  { word: 'WORD', row: 15, col: 0, direction: 'horizontal' },
  { word: 'PEACE', row: 16, col: 0, direction: 'horizontal' },
  { word: 'POWER', row: 17, col: 1, direction: 'horizontal' },
  { word: 'PRAISE', row: 18, col: 0, direction: 'horizontal' },
  { word: 'PRAYER', row: 19, col: 0, direction: 'horizontal' },
  { word: 'PURPOSE', row: 20, col: 0, direction: 'horizontal' },
  { word: 'RENEW', row: 21, col: 0, direction: 'horizontal' },
  { word: 'REVIVAL', row: 22, col: 0, direction: 'horizontal' },
  { word: 'RHAPSODY', row: 23, col: 0, direction: 'horizontal' },
  { word: 'SALVATION', row: 24, col: 0, direction: 'horizontal' },
  { word: 'WORSHIP', row: 25, col: 0, direction: 'horizontal' },
  { word: 'SEED', row: 26, col: 0, direction: 'horizontal' },
];

export default function ScriptureChallenge() {
  const [selected, setSelected] = useState<boolean[][]>(
    scriptureData.grid.map(row => row.map(() => false))
  );
  const [foundWords, setFoundWords] = useState<string[]>([]);
  const [feedback, setFeedback] = useState<string>('');

  const toggleCell = (rowIdx: number, colIdx: number) => {
    if (!scriptureData.grid[rowIdx][colIdx]) return;

    setSelected(prev =>
      prev.map((row, i) =>
        row.map((val, j) => (i === rowIdx && j === colIdx ? !val : val))
      )
    );
  };

  const checkSolution = () => {
    let anyNew = false;

    solution.forEach(({ word, row, col, direction }) => {
      let correct = true;
      for (let i = 0; i < word.length; i++) {
        const r = direction === 'horizontal' ? row : row + i;
        const c = direction === 'horizontal' ? col + i : col;

        if (
          r >= selected.length ||
          c >= selected[0].length ||
          !selected[r][c]
        ) {
          correct = false;
          break;
        }
      }
      if (correct && !foundWords.includes(word)) {
        setFoundWords(prev => [...prev, word]);
        anyNew = true;
      }
    });

    setFeedback(anyNew ? 'Correct!' : '');
  };

  useEffect(() => {
    checkSolution();
  }, [selected]);

  const resetGame = () => {
    setSelected(scriptureData.grid.map(row => row.map(() => false)));
    setFoundWords([]);
    setFeedback('');
  };

  const allFound = foundWords.length === solution.length;

  return (
    <section className="px-4 py-12 md:py-20 bg-white dark:bg-[#0b1a33]">
      <h2 className="text-4xl font-bold text-center text-purple-700 dark:text-yellow-400 mb-4">
        {scriptureData.title}
      </h2>
      <p className="text-gray-500 dark:text-gray-300 text-center mb-6">
        {scriptureData.subtitle}
      </p>

      <div className="text-center mb-6">
        <span className="font-semibold text-lg text-purple-600 dark:text-yellow-300">
          Progress: {foundWords.length}/{solution.length}
        </span>
      </div>

      <div className="flex flex-col md:flex-row gap-6 justify-center items-start">
        {/* Grid */}
        <div className="flex-1 overflow-auto select-none">
          {scriptureData.grid.map((row, i) => (
            <div key={i} className="flex gap-1 justify-center">
              {row.map((cell, j) => {
                const isFound = foundWords.some(word =>
                  solution.some(
                    s =>
                      s.word === word &&
                      [...Array(s.word.length).keys()].some(k => {
                        const r =
                          s.direction === 'horizontal' ? s.row : s.row + k;
                        const c =
                          s.direction === 'horizontal' ? s.col + k : s.col;
                        return i === r && j === c;
                      })
                  )
                );
                return (
                  <div
                    key={j}
                    onClick={() => toggleCell(i, j)}
                    className={`w-10 h-10 md:w-12 md:h-12 border border-purple-400 flex items-center justify-center font-bold cursor-pointer
                      ${cell === '' ? 'bg-gray-100 cursor-default' : ''}
                      ${selected[i][j] && !isFound ? 'bg-purple-200 text-purple-900' : ''}
                      ${isFound ? 'bg-green-300 text-green-900 font-bold' : ''}
                      transition`}
                  >
                    {cell}
                  </div>
                );
              })}
            </div>
          ))}
        </div>

        {/* Clues */}
        <div className="flex-1 grid grid-cols-2 md:grid-cols-3 gap-2 max-h-[400px] overflow-y-auto">
          {scriptureData.clues.map((clue, i) => (
            <p
              key={i}
              className={`text-purple-700 dark:text-yellow-400 bg-purple-50 dark:bg-[#1a1a2e] p-2 rounded shadow-sm hover:bg-purple-100 transition
                ${foundWords.includes(clue.toUpperCase()) ? 'line-through text-green-700' : ''}`}
            >
              {clue}
            </p>
          ))}
        </div>
      </div>

      {/* Feedback */}
      {feedback && (
        <p className="text-center mt-4 font-semibold text-lg text-green-700 dark:text-green-400">
          {feedback}
        </p>
      )}

      {/* Reset / Win Message */}
      <div className="text-center mt-6">
        <button
          onClick={resetGame}
          className="px-6 py-2 bg-purple-600 text-white rounded-lg shadow hover:bg-purple-700 transition"
        >
          Restart Game
        </button>
      </div>

      {allFound && (
        <p className="text-center mt-6 text-2xl font-bold text-green-600">
          🎉 Congratulations! You found all the words!
        </p>
      )}
    </section>
  );
}
