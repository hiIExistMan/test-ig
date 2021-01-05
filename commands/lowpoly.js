module.exports = () => {
  const canvas = require("canvas").createCanvas(640, 360);
  const ctx = canvas.getContext('2d');
  let color = `rgb(${Math.random()*100}, ${Math.random()*100}, ${Math.random()*100})`;
  let shape = ["rect", "tri", "circ"][Math.floor(Math.random()*3)];
  let amt = Math.floor((Math.random()*10)+5);
  console.log(color, shape, amt);
  ctx.fillStyle = color;
  for(let i = 0; i < amt; i++){
    if(shape == "rect") {
      let x = Math.random()*640;
      let y = Math.random()*360;
      let w = Math.random()*100;
      let h = Math.random()*100;
      let r = Math.random()*Math.PI*2;
      ctx.rotate(r);
      ctx.beginPath();
      ctx.fillRect(x, y, w, h);
    } else if(shape == "tri") {
      let x1 = Math.random()*640;
      let y1 = Math.random()*360;
      let x2 = Math.random()*640;
      let y2 = Math.random()*360;
      let x3 = Math.random()*640;
      let y3 = Math.random()*360;
      ctx.beginPath();
      ctx.moveTo(x1, y1);
      ctx.lineTo(x2, y2);
      ctx.lineTo(x3, y3);
      ctx.lineTo(x1, y1);
      ctx.fill();
    } else if(shape == "circ") {
      let x = Math.random()*640;
      let y = Math.random()*360;
      let d = (Math.random()*125)+25;
      ctx.beginPath();
      ctx.arc(x, y, d/2, 0, Math.PI*2, false);
      ctx.fill();
    }
  }
  let d = require("discord.js");
  let ma = new d.MessageAttachment(canvas.toBuffer(), "lowpoly.jpg");
  return ma;
}