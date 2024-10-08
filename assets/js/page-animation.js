const svg = document.getElementById('animationCanvas');
const ns = 'http://www.w3.org/2000/svg';

function createShape() {
    const shape = document.createElementNS(ns, 'path');
    const size = Math.random() * 50 + 20;
    const x = Math.random() * window.innerWidth;
    const y = Math.random() * window.innerHeight;
    const hue = Math.random() * 360;

    const pathData = `M ${x} ${y} 
                              Q ${x + size} ${y - size} ${x + size * 2} ${y}
                              T ${x + size * 4} ${y}`;

    shape.setAttribute('d', pathData);
    shape.setAttribute('fill', 'none');
    shape.setAttribute('stroke', `hsla(${hue}, 70%, 50%, 0.5)`);
    shape.setAttribute('stroke-width', '2');

    svg.appendChild(shape);

    let progress = 0;
    function animateShape() {
        progress += 0.005;
        const newY = y + Math.sin(progress) * 50;
        const newPathData = `M ${x} ${newY} 
                                     Q ${x + size} ${newY - size} ${x + size * 2} ${newY}
                                     T ${x + size * 4} ${newY}`;
        shape.setAttribute('d', newPathData);

        if (progress < Math.PI * 2) {
            requestAnimationFrame(animateShape);
        } else {
            shape.remove();
            createShape();
        }
    }

    animateShape();
}

for (let i = 0; i < 20; i++) {
    createShape();
}