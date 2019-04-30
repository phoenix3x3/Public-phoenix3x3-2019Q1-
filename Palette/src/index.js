import initCanvas from './api/init';

const canvasContainer = document.querySelector('#canvas');
const backetBtn = document.querySelector('#backet-tool');
const colorPickerBtn = document.querySelector('#color-picker-tool');
const moveBtn = document.querySelector('#move-tool');
const transformBtn = document.querySelector('#transform-tool');
const currentColorBtn = document.querySelector('#current-color');
const prevColorBtn = document.querySelector('#prev-color');
const predefinedColorOne = document.querySelector('#predefined-color1');
const predefinedColorTwo = document.querySelector('#predefined-color2');

const elementsInterval = 10;

// initCanvas(canvasContainer);

let figureCounter = 0;

for (let i = 0; i < 3; i += 1) {
  for (let j = 0; j < 3; j += 1) {
    figureCounter += 1;
    if (i === 2 && j === 0) {
      continue;
    }
    const square = document.createElement('div');
    square.id = `square-${figureCounter}`;
    square.className = 'square-element';
    square.style.top = `${(200 + elementsInterval) * i + 50}px`;
    square.style.left = `${(200 + elementsInterval) * j}px`;
    canvasContainer.appendChild(square);
  }
}

const circle = document.createElement('div');
circle.id = 'circle-1';
circle.className = 'circle-element';
circle.style.top = '470px';
circle.style.left = '0px';
canvasContainer.appendChild(circle);
