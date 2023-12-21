const Square = require('./square.js');

test('Square - Render SVG', () => {
    const square = new Square('Sample', 'purple', 'orange');
    const renderedSVG = square.render();
    const expectedSVG = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        <rect x="50" y="50" width="200" height="200" stroke-width="4" fill="orange" />
        <text x="150" y="150" text-anchor="middle" dominant-baseline="central" fill="purple">Sample</text>
      </svg>`;
    expect(renderedSVG).toEqual(expectedSVG);
  });