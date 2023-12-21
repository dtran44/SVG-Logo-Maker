const Triangle = require('./triangle.js');

test('Triangle SVG', () => {
  const triangle = new Triangle('ABC', 'green', 'yellow'); 
  const generatedSVG = triangle.generateSVG();

  const expectedSVG = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
    <polygon points="150,20 50,180 250,180" stroke-width="2" fill="yellow" />
    <text x="150" y="120" text-anchor="middle" dominant-baseline="central" fill="green">ABC</text>
  </svg>`;

  const regex = new RegExp(expectedSVG.replace(/\s+/g, '\\s*'));
  expect(generatedSVG).toMatch(regex);
});