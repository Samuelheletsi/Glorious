'use client';
import { useState, useEffect } from 'react';
import scriptureData from '@/data/scripture.json';

type Direction = 'horizontal' | 'vertical' | 'diagonal';

type SolutionWord = {
  word: string;
  row: number;
  col: number;
  direction: Direction;
};

// Full solution (must match scripture.json grid)
const solution: SolutionWord[] = [
  { word: 'ANOINTING', row: 0, col: 0, direction: 'horizontal' },
  { word: 'BIBLE', row: 1, col: 1, direction: 'horizontal' },
  { word: 'CROSS', row: 2, col: 0, direction: 'horizontal' },
  { word: 'CROWN', row: 3, col: 2, direction: 'horizontal' },
  { word: 'FAITH', row: 2, col: 8, direction: 'horizontal' },
  { word: 'GLORY', row: 3, col: 9, direction: 'horizontal' },
  { word: 'GOSPEL', row: 4, col: 0, direction: 'horizontal' },
  { word: 'GRACE', row: 5, col: 2, direction: 'horizontal' },
  { word: 'SPIRIT', row: 5, col: 7, direction: 'horizontal' },
  { word: 'TRUTH', row: 6, col: 0, direction: 'horizontal' },
  { word: 'HEALING', row: 7, col: 0, direction: 'horizontal' },
  { word: 'HOLY', row: 4, col: 11, direction: 'horizontal' },
  { word: 'HOPE', row: 8, col: 0, direction: 'horizontal' },
  { word: 'JESUS', row: 6, col: 8, direction: 'horizontal' },
  { word: 'JOY', row: 26, col: 0, direction: 'horizontal' },
  { word: 'KINGDOM', row: 10, col: 0, direction: 'horizontal' },
  { word: 'LIGHT', row: 11, col: 0, direction: 'horizontal' },
  { word: 'LOVE', row: 12, col: 2, direction: 'horizontal' },
  { word: 'MIRACLE', row: 13, col: 0, direction: 'horizontal' },
  { word: 'VICTORY', row: 10, col: 2, direction: 'horizontal' },
  { word: 'WORD', row: 14, col: 1, direction: 'horizontal' },
  { word: 'PEACE', row: 15, col: 0, direction: 'horizontal' },
  { word: 'POWER', row: 16, col: 1, direction: 'horizontal' },
  { word: 'PRAISE', row: 17, col: 2, direction: 'horizontal' },
  { word: 'PRAYER', row: 9, col: 0, direction: 'horizontal' },
  { word: 'PURPOSE', row: 19, col: 0, direction: 'horizontal' },
  { word: 'RENEW', row: 20, col: 0, direction: 'horizontal' },
  { word: 'REVIVAL', row: 21, col: 0, direction: 'horizontal' },
  { word: 'RHAPSODY', row: 22, col: 0, direction: 'horizontal' },
  { word: 'SALVATION', row: 23, col: 0, direction: 'horizontal' },
  { word: 'WORSHIP', row: 24, col: 0, direction: 'horizontal' },
  { word: 'SEED', row: 25, col: 0, direction: 'horizontal' },
];

export default function ScriptureChallenge() {
  const [selected, setSelected] = useState<boolean[][]>(
    scriptureData.grid.map((row) => row.map(() => false))
  );
  const [foundWords, setFoundWords] = useState<string[]>([]);
  const [feedback, setFeedback] = useState<string>('');

  // Toggle selected cells
  const toggleCell = (rowIdx: number, colIdx: number) => {
    if (!scriptureData.grid[rowIdx][colIdx]) return;
    setSelected((prev) =>
      prev.map((row, i) =>
        row.map((val, j) => (i === rowIdx && j === colIdx ? !val : val))
      )
    );
  };

  // Check if selected cells match any solution word
  const checkSolution = () => {
    let anyNew = false;

    solution.forEach(({ word, row, col, direction }) => {
      let correct = true;

      for (let i = 0; i < word.length; i++) {
        let r = row;
        let c = col;

        if (direction === 'horizontal') c += i;
        if (direction === 'vertical') r += i;
        if (direction === 'diagonal') {
          r += i;
          c += i;
        }

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
        setFoundWords((prev) => [...prev, word]);
        anyNew = true;
      }
    });

    setFeedback(anyNew ? '✅ Correct!' : '');
  };

 useEffect(() => {
  const checkSolution = () => {
    let anyNew = false;
    solution.forEach(({ word, row, col, direction }) => {
      let correct = true;
      for (let i = 0; i < word.length; i++) {
        let r = row;
        let c = col;
        if (direction === 'horizontal') c += i;
        if (direction === 'vertical') r += i;
        if (direction === 'diagonal') { r += i; c += i; }
        if (r >= selected.length || c >= selected[0].length || !selected[r][c]) {
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

  checkSolution();
}, [selected, foundWords]);


  const resetGame = () => {
    setSelected(scriptureData.grid.map((row) => row.map(() => false)));
    setFoundWords([]);
    setFeedback('');
  };

  const allFound = foundWords.length === solution.length;

  return (
    <section style={{ padding: '3rem 1rem', backgroundColor: '#fff' }}>
      {/* Title */}
      <h2
        style={{
          fontSize: '2rem',
          fontWeight: 'bold',
          textAlign: 'center',
          color: '#6b21a8',
          marginBottom: '0.5rem',
        }}
      >
        {scriptureData.title}
      </h2>
      <p
        style={{
          textAlign: 'center',
          color: '#6b7280',
          marginBottom: '1.5rem',
        }}
      >
        {scriptureData.subtitle}
      </p>

      {/* Progress */}
      <div style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
        <span style={{ fontWeight: 600, fontSize: '1.125rem', color: '#9333ea' }}>
          Progress: {foundWords.length}/{solution.length}
        </span>
      </div>

      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '1.5rem',
          alignItems: 'center',
        }}
      >
        {/* Puzzle Grid */}
        <div style={{ overflowX: 'auto' }}>
          {scriptureData.grid.map((row, i) => (
            <div key={i} style={{ display: 'flex', gap: '4px', justifyContent: 'center' }}>
              {row.map((cell, j) => {
                const isFound = foundWords.some((word) =>
                  solution.some((s) =>
                    s.word === word
                      ? [...Array(s.word.length).keys()].some((k) => {
                          let r = s.row;
                          let c = s.col;
                          if (s.direction === 'horizontal') c += k;
                          if (s.direction === 'vertical') r += k;
                          if (s.direction === 'diagonal') {
                            r += k;
                            c += k;
                          }
                          return i === r && j === c;
                        })
                      : false
                  )
                );

                return (
                  <div
                    key={j}
                    onClick={() => toggleCell(i, j)}
                    style={{
                      width: '2.5rem',
                      height: '2.5rem',
                      border: '1px solid #9333ea',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontWeight: 'bold',
                      cursor: cell ? 'pointer' : 'default',
                      backgroundColor: !cell
                        ? '#f3f4f6'
                        : isFound
                        ? '#86efac'
                        : selected[i][j]
                        ? '#ddd6fe'
                        : '#fff',
                      color: isFound ? '#166534' : selected[i][j] ? '#4c1d95' : '#000',
                      transition: 'all 0.3s ease',
                    }}
                  >
                    {cell}
                  </div>
                );
              })}
            </div>
          ))}
        </div>

        {/* Clues */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(100px, 1fr))',
            gap: '0.5rem',
            maxHeight: '400px',
            overflowY: 'auto',
            width: '100%',
          }}
        >
          {scriptureData.clues.map((clue, i) => (
            <p
              key={i}
              style={{
                color: foundWords.includes(clue.toUpperCase()) ? '#15803d' : '#6b21a8',
                textDecoration: foundWords.includes(clue.toUpperCase()) ? 'line-through' : 'none',
                backgroundColor: '#faf5ff',
                padding: '0.5rem',
                borderRadius: '0.375rem',
                fontSize: '0.875rem',
                fontWeight: 500,
              }}
            >
              {clue}
            </p>
          ))}
        </div>
      </div>

      {/* Feedback */}
      {feedback && (
        <p
          style={{
            textAlign: 'center',
            marginTop: '1rem',
            fontWeight: 600,
            fontSize: '1.125rem',
            color: '#15803d',
          }}
        >
          {feedback}
        </p>
      )}

      {/* Restart */}
      <div style={{ textAlign: 'center', marginTop: '1.5rem' }}>
        <button
          onClick={resetGame}
          style={{
            padding: '0.5rem 1.5rem',
            backgroundColor: '#9333ea',
            color: '#fff',
            borderRadius: '0.5rem',
            border: 'none',
            cursor: 'pointer',
            fontWeight: '600',
            transition: 'background 0.3s',
          }}
          onMouseOver={(e) =>
            (e.currentTarget.style.backgroundColor = '#7e22ce')
          }
          onMouseOut={(e) =>
            (e.currentTarget.style.backgroundColor = '#9333ea')
          }
        >
          Restart Game
        </button>
      </div>

      {/* Victory */}
      {allFound && (
        <p
          style={{
            textAlign: 'center',
            marginTop: '1.5rem',
            fontSize: '1.5rem',
            fontWeight: 'bold',
            color: '#16a34a',
          }}
        >
          🎉 Congratulations! You found all the words!
        </p>
      )}
    </section>
  );
}
