const Square = require('./square.js');

test('Square SVG', () => {
  const square = new Square('ABC', 'purple', 'orange');
  const generatedSVG = square.generateSVG();

  const expectedSVG = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
  <rect x="50" y="50" width="200" height="200" stroke-width="4" fill="orange" />
  <text x="150" y="150" text-anchor="middle" dominant-baseline="central" fill="purple">ABC</text>
</svg>`;

  const regex = new RegExp(expectedSVG.replace(/\s+/g, '\\s*'));
  expect(generatedSVG).toMatch(regex);
});