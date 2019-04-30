import $ from 'jquery';

const canvasContainer = document.querySelector('#canvas');
const predefinedColorOne = document.querySelector('#color-block-predefined1');
const predefinedColorTwo = document.querySelector('#color-block-predefined2');

const elementsInterval = 10;

// init canvas

let figureCounter = 0;

for (let i = 0; i < 3; i += 1) {
  for (let j = 0; j < 3; j += 1) {
    figureCounter += 1;
    if (i === 2 && j === 0) {
      continue;
    }
    const square = document.createElement('div');
    square.id = 'square';
    square.className = 'square-element';
    square.style.top = `${(200 + elementsInterval) * i + 50}px`;
    square.style.left = `${(200 + elementsInterval) * j}px`;
    canvasContainer.appendChild(square);
  }
}

const circle = document.createElement('div');
circle.id = 'circle';
circle.className = 'circle-element';
circle.style.top = '470px';
circle.style.left = '0px';
canvasContainer.appendChild(circle);

const colorList = ['000000', '993300', '333300', '003300', '003366', '000066', '333399', '333333',
  '660000', 'FF6633', '666633', '336633', '336666', '0066FF', '666699', '666666', 'CC3333', 'FF9933', '99CC33', '669966', '66CCCC', '3366FF', '663366', '999999', 'CC66FF', 'FFCC33', 'FFFF66', '99FF66', '99CCCC', '66CCFF', '993366', 'CCCCCC', 'FF99CC', 'FFCC99', 'FFFF99', 'CCffCC', 'CCFFff', '99CCFF', 'CC99FF', 'FFFFFF'];
const picker = document.querySelector('#color-block-picker');

for (let i = 0; i < colorList.length; i += 1) {
  const li = document.createElement('li');
  li.className = 'color-item';
  li.style.backgroundColor = `#${colorList[i]}`;
  li.dataset.hex = `#${colorList[i]}`;
  picker.appendChild(li);
}
for (let i = 0; i < colorList.length; i += 1) {
  const li = document.createElement('li');
  li.className = 'color-item';
  li.style.backgroundColor = `#${colorList[i]}`;
  li.dataset.hex = `#${colorList[i]}`;
  predefinedColorOne.appendChild(li);
}
for (let i = 0; i < colorList.length; i += 1) {
  const li = document.createElement('li');
  li.className = 'color-item';
  li.style.backgroundColor = `#${colorList[i]}`;
  li.dataset.hex = `#${colorList[i]}`;
  predefinedColorTwo.appendChild(li);
}

$('body').click(() => {
  $('#color-block-picker').fadeOut();
  $('#color-block-predefined1').fadeOut();
  $('#color-block-predefined2').fadeOut();
});

document.querySelectorAll('.call-picker');

$('.call-picker').click((event) => {
  event.stopPropagation();
  $('#color-block-picker').fadeIn();
  $('#color-block-picker').children('li').hover((element) => {
    const codeHex = element.currentTarget.dataset.hex;
    $('#color-picker-holder').css('background-color', codeHex);
    $('#color-current-holder').css('background-color', codeHex);
  });
});

$('#color-predefined1-holder').click((event) => {
  event.stopPropagation();
  $('#color-block-predefined1').fadeIn();
  $('#color-block-predefined1').children('li').hover((element) => {
    const codeHex = element.currentTarget.dataset.hex;
    $('#color-predefined1-holder').css('background-color', codeHex);
  });
});

$('#color-predefined2-holder').click((event) => {
  event.stopPropagation();
  $('#color-block-predefined2').fadeIn();
  $('#color-block-predefined2').children('li').hover((element) => {
    const codeHex = element.currentTarget.dataset.hex;
    $('#color-predefined2-holder').css('background-color', codeHex);
  });
});

let timesClicked = 0;

$('body').click((event) => {
  if (event.target.id === 'backet-tool') {
    timesClicked += 1;
  } else if (((event.target.id === 'square') || (event.target.id === 'circle')) && timesClicked > 0) {
    let color;
    if (($('#color-picker-holder')[0].style.backgroundColor).length > 1) {
      color = $('#color-picker-holder')[0].style.backgroundColor;
    } else {
      color = '#fff';
    }
    event.target.style.backgroundColor = color;
  }
});
