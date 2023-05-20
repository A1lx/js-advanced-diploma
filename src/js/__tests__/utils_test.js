import { calcTileType } from '../utils';

test.each([
  { index: 0, boardSize: 8, expected: 'top-left' },
  { index: 7, boardSize: 8, expected: 'top-right' },
  { index: 5, boardSize: 8, expected: 'top' },
  { index: 25, boardSize: 8, expected: 'center' },
  { index: 15, boardSize: 8, expected: 'right' },
  { index: 16, boardSize: 8, expected: 'left' },
  { index: 62, boardSize: 8, expected: 'bottom' },
  { index: 56, boardSize: 8, expected: 'bottom-left' },
  { index: 63, boardSize: 8, expected: 'bottom-right' },
  { index: 0, boardSize: 10, expected: 'top-left' },
  { index: 9, boardSize: 10, expected: 'top-right' },
  { index: 19, boardSize: 10, expected: 'right' },
  { index: 20, boardSize: 10, expected: 'left' },
  { index: 98, boardSize: 10, expected: 'bottom' },
  { index: 90, boardSize: 10, expected: 'bottom-left' },
  { index: 99, boardSize: 10, expected: 'bottom-right' },
])('calcTileType tests', ({ index, boardSize, expected }) => {
  const received = calcTileType(index, boardSize);
  expect(received).toBe(expected);
});
