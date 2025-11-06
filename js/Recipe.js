const circle = document.querySelectorAll('.circle');
const r = document.querySelector('.rotating').clientWidth/2;
const count = circle.length;
const pieceDeg = 360 / count;

for (let i = 0; i < count; i++) {
    let t = i* pieceDeg;
    t = (Math.PI/180) * t;
    const x = Math.sin(t) * r, y = -Math.cos(t) * r;
    circle[i].style.transform = `translate(${x}px, ${y}px)`;
}