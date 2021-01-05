const { MessageAttachment } = require("discord.js");

module.exports = (args) => {
  const canvas = require("canvas").createCanvas(640, 360);
  const ctx = canvas.getContext('2d');
  ctx.fillRect(0, 0, 640, 360);
  for(let i = 0; i < 2500; i++){
    let r = Math.random()*255;
    let g = 0;
    let b = 255-r;
    let x = Math.random()*640;
    let y = Math.random()*360;
    ctx.beginPath();
    ctx.fillStyle = ['rgba(0,255,255,100)', 'rgba(0,0,255,100)', 'rgba(0,128,128, 100)'][Math.floor(Math.random()*3)];
    ctx.arc(x, y, 16, 0, Math.PI*2, false);
    ctx.fill();
  }
  let d = require('discord.js');
  let ma = new d.MessageAttachment(canvas.toBuffer(), "point.jpg");
  return ma;
}
