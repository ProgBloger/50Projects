const progress = document.getElementById('progress');
const prev = document.getElementById('prev');
const next = document.getElementById('next');
const circles = document.querySelectorAll('.circle')

let currentActive = 1

next.addEventListener('click', () => {
    currentActive++;

    if(currentActive > circles.length) {
        currentActive = circles.length
    }

    update();
});

prev.addEventListener('click', () => {
    currentActive--;

    if(currentActive < 1) {
        currentActive = 1;
    }

    update();
});

function update() { 
    circles.forEach((circle, idx) => {
        if(idx < currentActive) {
            circle.classList.add('active');
        } else {
            circle.classList.remove('active');
        }
    });
    

    const actives = document.querySelectorAll('.active');

    const prevEnabled = actives.length > 1;
    const nextEnabled = actives.length < circles.length;

    console.log("prevEnabled" + prevEnabled);
    console.log("nextEnabled" + nextEnabled);
    prev.disabled = !prevEnabled;
    next.disabled = !nextEnabled;

    progress.style.width = (actives.length - 1) / (circles.length - 1) * 100 + '%';
}