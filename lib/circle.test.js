const Circle = require('./circle.js');

test('Circle SVG', () => {
  const circle = new Circle('ABC', 'blue', 'red');
  const generatedSVG = circle.generateSVG();

  const expectedSVG = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        <circle cx="150" cy="100" r="80" stroke-width="4" fill="red" />
        <text x="50%" y="50%" text-anchor="middle" dominant-baseline="central" fill="blue">ABC</text>
      </svg>`;

  const regex = new RegExp(expectedSVG.replace(/\s+/g, '\\s*'));
  expect(generatedSVG).toMatch(regex);
});