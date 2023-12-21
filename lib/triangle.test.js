const Triangle = require('./triangle.js');

test('Triangle - Render SVG', () => {
    const triangle = new Triangle('Sample', 'green', 'yellow');
    const renderedSVG = triangle.render();
    const expectedSVG = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        <polygon points="150,20 50,180 250,180" stroke-width="2" fill="yellow" />
        <text x="150" y="120" text-anchor="middle" dominant-baseline="central" fill="green">Sample</text>
      </svg>`;
    expect(renderedSVG).toEqual(expectedSVG);
  });