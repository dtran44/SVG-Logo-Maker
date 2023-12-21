const inquirer = require('inquirer');
const fs = require('fs');

const prompt = inquirer.createPromptModule();

const Circle = require('./lib/circle');
const Triangle = require('./lib/triangle');
const Square = require('./lib/square');

// Array of questions
const questions = [
  {
    type: 'input',
    name: 'text',
    message: 'What 3 letter text would you like?',
  },
  {
    type: 'input',
    name: 'textColour',
    message: 'What text colour would you like?',
  },
  {
    type: 'list',
    name: 'shape',
    message: 'Choose a shape for your logo:',
    choices: ['circle', 'triangle', 'square'],
  },
  {
    type: 'input',
    name: 'shapeColour',
    message: 'What colour shape would you like?',
  },
];

// Function to create SVG shapes based on user input
function createShapes(answers) {
  let shapeSVG = '';

  if (answers.shape === 'circle') {
    shapeSVG = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
      <circle cx="150" cy="100" r="80" stroke-width="4" fill="${answers.shapeColour}" />
      <text x="50%" y="50%" text-anchor="middle" dominant-baseline="central" fill="${answers.textColour}">${answers.text}</text>
    </svg>`;
  } else if (answers.shape === 'triangle') {
    shapeSVG = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
      <polygon points="150,20 50,180 250,180" stroke-width="2" fill="${answers.shapeColour}" />
      <text x="150" y="120" text-anchor="middle" dominant-baseline="central" fill="${answers.textColour}">${answers.text}</text>
    </svg>`;
  } else if (answers.shape === 'square') {
    shapeSVG = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
      <rect x="50" y="50" width="200" height="200" stroke-width="4" fill="${answers.shapeColour}" />
      <text x="150" y="150" text-anchor="middle" dominant-baseline="central" fill="${answers.textColour}">${answers.text}</text>
    </svg>`;
  }

  return shapeSVG;
}

// Function to write SVG shapes to a file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log(`Generated ${fileName}`);
  });
}

// Function to initialise the application
function init() {
  prompt(questions).then((answers) => {
    let shapeSVG = '';
    switch (answers.shape) {
      case 'circle':
        const circle = new Circle(answers.text, answers.textColour, answers.shapeColour);
        shapeSVG = circle.generateSVG();
        break;
      case 'triangle':
        const triangle = new Triangle(answers.text, answers.textColour, answers.shapeColour);
        shapeSVG = triangle.generateSVG();
        break;
      case 'square':
        const square = new Square(answers.text, answers.textColour, answers.shapeColour);
        shapeSVG = square.generateSVG();
        break;
      default:
        console.log('Invalid shape choice');
        return;
    }

    writeToFile('logo.svg', shapeSVG);
  });
}

// Initialise the application
init();