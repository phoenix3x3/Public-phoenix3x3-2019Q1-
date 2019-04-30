export default function initCanvas(ctx) {
  const initFigInterval = 10;

  // draw init figures
  ctx.fillStyle = 'gray';
  for (let i = 0; i < 2; i += 1) {
    for (let j = 0; j < 3; j += 1) {
      ctx.fillRect((200 + initFigInterval) * j, (200 + initFigInterval) * i, 200, 200);
    }
  }
  ctx.beginPath();
  ctx.arc(100, 520, 100, 0, 2 * Math.PI);
  ctx.fill();
  for (let j = 1; j < 3; j += 1) {
    ctx.fillRect((200 + initFigInterval) * j, (200 + initFigInterval) * 2, 200, 200);
  }
}
