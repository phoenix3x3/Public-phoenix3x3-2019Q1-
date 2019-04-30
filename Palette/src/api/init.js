export default function initCanvas(container) {
  const elementsInterval = 10;


  const circle = document.createElement('div');
  circle.id = 'circle-1';
  circle.className = 'circle-element';

  let figureCounter = 0;

  for (let i = 0; i < 2; i += 1) {
    for (let j = 0; j < 3; j += 1) {
      figureCounter += 1;

      const square = document.createElement('div');
      square.id = `square-${figureCounter}`;
      square.className = 'square-element';
      // square.style.top = '50px';
      container.appendChild(square);
    }
  }

  // container.appendChild(circle);
}
