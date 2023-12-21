class Square {
    constructor(text, textColour, shapeColour) {
      this.text = text;
      this.textColour = textColour;
      this.shapeColour = shapeColour;
    }
  
    generateSVG() {
      return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        <rect x="50" y="50" width="200" height="200" stroke-width="4" fill="${this.shapeColour}" />
        <text x="150" y="150" text-anchor="middle" dominant-baseline="central" fill="${this.textColour}">${this.text}</text>
      </svg>`;
    }
  }
  
  module.exports = Square;