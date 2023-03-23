const number = document.getElementById("number");
const left = document.getElementById("left");
const rights = document.getElementById("right");
const slider = document.getElementById("slider");
let target = 20000;
let current = 0;
const step = 42;

const start = () => {
  right.classList.add("animate");
  update();
};

slider.addEventListener("input", (event) => {
  target = +event.target.value;
  start();
});

const updateValues = () => {
  const [first, ...rest] = current.toLocaleString("en-US").split(",").reverse();
  thousends = rest.reverse();
  
  const thousendsString = thousends.join("");
  if (+left.innerText != thousendsString) {
    left.classList.add("animate");
  } else {
    left.classList.remove("animate");
  }
  left.innerText = thousendsString;
  right.innerText = first;
};

const update = () => {
  if (target - current > 0) {
    current += step;
  } else {
    current -= step;
  }
  if (current >= 1000) {
    separator.classList.add("show");
  } else {
    separator.classList.remove("show");
  }
  updateValues();
  if (Math.abs(target - current) > step) {
    requestAnimationFrame(update);
  } else {
    requestAnimationFrame(() => {
      current = target;
      updateValues();
      left.classList.remove("animate");
      right.classList.remove("animate");
    });
  }
};

requestAnimationFrame(start);