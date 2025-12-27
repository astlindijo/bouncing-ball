const box = document.querySelector(".box");
const BALL_COUNT = 1000;
const balls = [];

function random(min, max) {
    return Math.random() * (max - min) + min;
}

function randomColor() {
    return `hsl(${Math.random() * 360}, 100%, 50%)`;
}

// Create balls
for (let i = 0; i < BALL_COUNT; i++) {
    const ball = document.createElement("div");
    ball.className = "ball";
    ball.style.background = randomColor();

    const size = random(15, 25);

    ball.style.width = size + "px";
    ball.style.height = size + "px";

    box.appendChild(ball);

    balls.push({
        el: ball,
        x: random(0, box.clientWidth - size),
        y: random(0, box.clientHeight - size),
        dx: random(-3, 3) || 2,
        dy: random(-3, 3) || 2,
        size
    });
}

function animate() {
    const w = box.clientWidth;
    const h = box.clientHeight;

    balls.forEach(b => {
        b.x += b.dx;
        b.y += b.dy;

        // Wall collision
        if (b.x <= 0 || b.x >= w - b.size) {
            b.dx *= -1;
            b.el.style.background = randomColor();
        }

        if (b.y <= 0 || b.y >= h - b.size) {
            b.dy *= -1;
            b.el.style.background = randomColor();
        }

        b.el.style.transform = `translate(${b.x}px, ${b.y}px)`;
    });

    requestAnimationFrame(animate);
}

animate();
