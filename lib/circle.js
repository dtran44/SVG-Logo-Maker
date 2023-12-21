class Circle {
    constructor(text, textColour, shapeColour) {
      this.text = text;
      this.textColour = textColour;
      this.shapeColour = shapeColour;
    }
  
    generateSVG() {
      return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        <circle cx="150" cy="100" r="80" stroke-width="4" fill="${this.shapeColour}" />
        <text x="50%" y="50%" text-anchor="middle" dominant-baseline="central" fill="${this.textColour}">${this.text}</text>
      </svg>`;
    }
  }
  
  module.exports = Circle;