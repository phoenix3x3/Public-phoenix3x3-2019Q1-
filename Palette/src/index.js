import initCanvas from './api/init';

const canvas = document.querySelector('#canvas');
const ctx = canvas.getContext('2d');
const backetBtn = document.querySelector('#backet-tool');
const colorPickerBtn = document.querySelector('#color-picker-tool');
const moveBtn = document.querySelector('#move-tool');
const transformBtn = document.querySelector('#transform-tool');
const currentColorBtn = document.querySelector('#current-color');
const prevColorBtn = document.querySelector('#prev-color');
const predefinedColorOne = document.querySelector('#predefined-color1');
const predefinedColorTwo = document.querySelector('#predefined-color2');

initCanvas(ctx);
