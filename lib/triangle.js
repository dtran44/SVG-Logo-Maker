class Triangle {
    constructor(text, textColour, shapeColour) {
      this.text = text;
      this.textColour = textColour;
      this.shapeColour = shapeColour;
    }
  
    generateSVG() {
      return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        <polygon points="150,20 50,180 250,180" stroke-width="2" fill="${this.shapeColour}" />
        <text x="150" y="120" text-anchor="middle" dominant-baseline="central" fill="${this.textColour}">${this.text}</text>
      </svg>`;
    }
  }
  
  module.exports = Triangle;