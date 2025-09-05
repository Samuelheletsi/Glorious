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

const solution: SolutionWord[] = [
  { word: 'ANOINTING', row: 0, col: 0, direction: 'horizontal' },
  { word: 'BIBLE', row: 1, col: 1, direction: 'horizontal' },
  { word: 'CROSS', row: 2, col: 0, direction: 'horizontal' },
  { word: 'CROWN', row: 3, col: 2, direction: 'horizontal' },
  { word: 'FAITH', row: 2, col: 7, direction: 'horizontal' },
  { word: 'GLORY', row: 3, col: 8, direction: 'horizontal' },
  { word: 'GOSPEL', row: 4, col: 0, direction: 'horizontal' },
  { word: 'GRACE', row: 5, col: 2, direction: 'horizontal' },
  { word: 'SPIRIT', row: 5, col: 8, direction: 'horizontal' },
  { word: 'TRUTH', row: 6, col: 0, direction: 'horizontal' },
  { word: 'HEALING', row: 7, col: 0, direction: 'horizontal' },
  { word: 'HOLY', row: 4, col: 11, direction: 'horizontal' },
  { word: 'HOPE', row: 8, col: 0, direction: 'horizontal' },
  { word: 'JESUS', row: 6, col: 7, direction: 'horizontal' },
  { word: 'JOY', row: 26, col: 0, direction: 'horizontal' },
  { word: 'KINGDOM', row: 10, col: 0, direction: 'horizontal' },
  { word: 'LIGHT', row: 11, col: 0, direction: 'horizontal' },
  { word: 'LOVE', row: 12, col: 1, direction: 'horizontal' },
  { word: 'MIRACLE', row: 13, col: 0, direction: 'horizontal' },
  { word: 'VICTORY', row: 20, col: 14, direction: 'vertical' },
  { word: 'WORD', row: 14, col: 1, direction: 'horizontal' },
  { word: 'PEACE', row: 15, col: 0, direction: 'horizontal' },
  { word: 'POWER', row: 16, col: 1, direction: 'horizontal' },
  { word: 'PRAISE', row: 17, col: 1, direction: 'horizontal' },
  { word: 'PRAYER', row: 18, col: 0, direction: 'horizontal' },
  { word: 'PURPOSE', row: 19, col: 0, direction: 'horizontal' },
  { word: 'RENEW', row: 20, col: 0, direction: 'horizontal' },
  { word: 'REVIVAL', row: 21, col: 0, direction: 'horizontal' },
  { word: 'RHAPSODY', row: 22, col: 0, direction: 'horizontal' },
  { word: 'SALVATION', row: 23, col: 0, direction: 'horizontal' },
  { word: 'WORSHIP', row: 24, col: 0, direction: 'horizontal' },
  { word: 'SEED', row: 25, col: 0, direction: 'horizontal' }
];


export default function ScriptureChallenge() {
  const [selected, setSelected] = useState<boolean[][]>(
    scriptureData.grid.map((row) => row.map(() => false))
  );
  const [foundWords, setFoundWords] = useState<string[]>([]);
  const [feedback, setFeedback] = useState<string>('');
  const [isDragging, setIsDragging] = useState(false);

  const toggleCell = (rowIdx: number, colIdx: number) => {
    setSelected((prev) =>
      prev.map((row, i) =>
        row.map((val, j) => (i === rowIdx && j === colIdx ? true : val))
      )
    );
  };

  // Handle drag start
  const handleMouseDown = (rowIdx: number, colIdx: number) => {
    setIsDragging(true);
    toggleCell(rowIdx, colIdx);
  };

  const handleMouseEnter = (rowIdx: number, colIdx: number) => {
    if (isDragging) toggleCell(rowIdx, colIdx);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  // Check for found words whenever selection changes
  useEffect(() => {
    const newFound: string[] = [];
    solution.forEach(({ word, row, col, direction }) => {
      const isWordFound = word.split('').every((letter, idx) => {
        let r = row, c = col;
        if (direction === 'horizontal') c += idx;
        if (direction === 'vertical') r += idx;
        if (direction === 'diagonal') { r += idx; c += idx; }
        return selected[r]?.[c] && scriptureData.grid[r][c].toUpperCase() === letter.toUpperCase();
      });
      if (isWordFound && !foundWords.includes(word.toUpperCase())) {
        newFound.push(word.toUpperCase());
      }
    });

    if (newFound.length) {
      setFoundWords((prev) => [...prev, ...newFound]);
      setFeedback('✅ Correct!');
    } else {
      setFeedback('');
    }
  }, [selected, foundWords]);

  const resetGame = () => {
    setSelected(scriptureData.grid.map((row) => row.map(() => false)));
    setFoundWords([]);
    setFeedback('');
  };

  const allFound = foundWords.length === solution.length;

  return (
    <section 
      style={{ padding: '2rem 1rem', backgroundColor: 'white' }}
      onMouseUp={handleMouseUp}
    >
      <h2 style={{ textAlign: 'center', color: '#6B21A8', fontWeight: 'bold', fontSize: '2rem', marginBottom: '0.5rem' }}>
        {scriptureData.title}
      </h2>
      <p style={{ textAlign: 'center', color: '#6B21A8', marginBottom: '1.5rem', fontSize: '0.9rem', fontWeight: '600' }}>
        {scriptureData.subtitle}
      </p>

      <div style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
        <span style={{ fontWeight: '600', color: '#6B21A8', fontSize: '1rem' }}>
          Progress: {foundWords.length}/{solution.length}
        </span>
      </div>

      {/* Grid */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
        {scriptureData.grid.map((row, i) => (
          <div key={i} style={{ display: 'flex', gap: '4px', justifyContent: 'center' }}>
            {row.map((cell, j) => {
              const isFound = solution.some((s) => {
                if (!foundWords.includes(s.word.toUpperCase())) return false;
                return [...Array(s.word.length).keys()].some((k) => {
                  let r = s.row, c = s.col;
                  if (s.direction === 'horizontal') c += k;
                  if (s.direction === 'vertical') r += k;
                  if (s.direction === 'diagonal') { r += k; c += k; }
                  return i === r && j === c;
                });
              });

              return (
                <div
                  key={j}
                  onMouseDown={() => handleMouseDown(i, j)}
                  onMouseEnter={() => handleMouseEnter(i, j)}
                  style={{
                    width: '2rem',
                    height: '2rem',
                    border: '1px solid #6B21A8',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontWeight: 'bold',
                    cursor: 'pointer',
                    fontSize: '0.9rem',
                    backgroundColor: !cell ? '#F3F4F6' : isFound ? '#BBF7D0' : selected[i][j] ? '#E9D5FF' : '#FFFFFF',
                    color: !cell ? '#9CA3AF' : isFound ? '#166534' : selected[i][j] ? '#6B21A8' : '#000000',
                    transition: 'all 0.2s ease'
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
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(120px,1fr))', gap: '8px', marginTop: '1rem', maxHeight: '400px', overflowY: 'auto' }}>
        {scriptureData.clues.map((clue, i) => {
          const found = foundWords.includes(clue.toUpperCase());
          return (
            <p
              key={i}
              style={{
                padding: '0.3rem',
                borderRadius: '6px',
                textAlign: 'center',
                fontWeight: '500',
                fontSize: '0.9rem',
                backgroundColor: found ? '#ECFDF5' : '#F3E8FF',
                color: found ? '#15803D' : '#6B21A8',
                textDecoration: found ? 'line-through' : 'none'
              }}
            >
              {clue}
            </p>
          );
        })}
      </div>

      {feedback && (
        <p style={{ textAlign: 'center', marginTop: '1rem', fontWeight: '600', color: '#15803D', fontSize: '1.1rem' }}>
          {feedback}
        </p>
      )}

      <div style={{ textAlign: 'center', marginTop: '1.5rem' }}>
        <button
          onClick={resetGame}
          style={{
            padding: '0.6rem 1.2rem',
            backgroundColor: '#6B21A8',
            color: 'white',
            fontWeight: '600',
            borderRadius: '6px',
            cursor: 'pointer'
          }}
        >
          Restart Game
        </button>
      </div>

      {allFound && (
        <p style={{ textAlign: 'center', marginTop: '1.5rem', fontWeight: 'bold', color: '#15803D', fontSize: '1.25rem' }}>
          🎉 Congratulations! You found all the words!
        </p>
      )}
    </section>
  );
}
