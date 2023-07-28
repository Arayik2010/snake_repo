let boll = document.getElementById("item_boll");
let container = document.getElementById("container");

let button = document.getElementsByClassName("button")[0];
let button_back = document.getElementsByClassName("button_back")[0];
var newBoll = document.createElement("div");

for (var i = 0; i < 168; i++) {
  container.innerHTML += "<div class='block'></div>";
}

let blocks = document.getElementsByClassName("block");

function getOffsetBall(el) {
  const rect = el.getBoundingClientRect();
  const x = rect.left + window.scrollX;
  const y = rect.top + window.scrollY;
  const position = `X: ${x}  ${el}Y: ${y}`;
  return position;
}

function getBoll() {
  for (let i = 0; i <= blocks.length; i++) {
    const randomIndex = Math.floor(Math.random() * blocks.length);
    newBoll.classList.add("new_boll");
    const randomItem = blocks[randomIndex].appendChild(newBoll);
    return randomItem;
  }
}
getBoll();


let goInterval;
let backInterval;
let downInterval;
let upInterval;

function rightBoll() {
  clearInterval(backInterval);
  clearInterval(downInterval);
  clearInterval(upInterval);
  goInterval = setInterval(() => {
    if (
      getOffsetBall(document.getElementById("item_boll")) ===
      getOffsetBall(newBoll)
    ) {
      newBoll.remove();
      getBoll();
    }
    let left = document.getElementById("item_boll").style.left || 0;
    document.getElementById("item_boll").style.left = `${
      parseInt(left, 10) + 50
    }px`;
    if (document.getElementById("item_boll").style.left === "600px") {
      clearInterval(goInterval);
      alert("Game over");
      document.getElementById("item_boll").style.left = 0;
      document.getElementById("item_boll").style.top = 0
    }
    document.getElementById("item_boll").style.background = "black";
  }, 500);
}

function leftBoll() {
  clearInterval(goInterval);
  clearInterval(downInterval);
  clearInterval(upInterval);
  backInterval = setInterval(() => {
    if (
      getOffsetBall(document.getElementById("item_boll")) ===
      getOffsetBall(newBoll)
    ) {
      newBoll.remove();
      getBoll();
    }
    let left = document.getElementById("item_boll").style.left || 0;
    document.getElementById("item_boll").style.left = `${
      parseInt(left, 10) - 50
    }px`;
    if (document.getElementById("item_boll").style.left === "-50px") {
      clearInterval(backInterval);
      alert("Game over");
      document.getElementById("item_boll").style.left = 0;
      document.getElementById("item_boll").style.top = 0

    }
    document.getElementById("item_boll").style.background = "green";
  }, 500);
}

function downBoll() {
  clearInterval(backInterval);
  clearInterval(upInterval);
  clearInterval(goInterval);
  downInterval = setInterval(() => {
    if (
      getOffsetBall(document.getElementById("item_boll")) ===
      getOffsetBall(newBoll)
    ) {
      newBoll.remove();
      getBoll();
    }
    let top = document.getElementById("item_boll").style.top || 0;
    document.getElementById("item_boll").style.top = `${
      parseInt(top, 10) + 50
    }px`;
    if (document.getElementById("item_boll").style.top === "700px") {
      clearInterval(downInterval);
      alert("Game over");
      document.getElementById("item_boll").style.left = 0;
      document.getElementById("item_boll").style.top = 0

    }
    document.getElementById("item_boll").style.background = "yellow";
  }, 500);
}

function upBoll() {
  clearInterval(backInterval);
  clearInterval(downInterval);
  clearInterval(goInterval);
  upInterval = setInterval(() => {
    if (
      getOffsetBall(document.getElementById("item_boll")) ===
      getOffsetBall(newBoll)
    ) {
      newBoll.remove();
      getBoll();
    }
    let top = document.getElementById("item_boll").style.top || 0;
    document.getElementById("item_boll").style.top = `${
      parseInt(top, 10) - 50
    }px`;
    if (document.getElementById("item_boll").style.top === "-50px") {
      clearInterval(upInterval);
      alert("Game over");
      document.getElementById("item_boll").style.left = 0;
      document.getElementById("item_boll").style.top = 0

    }
    document.getElementById("item_boll").style.background = "brown";
  }, 500);
}

document.onkeydown = function (event) {
  console.log(event);
  switch (event.code) {
    case "ArrowRight":
      rightBoll();

      break;
    case "ArrowLeft":
      leftBoll();
      break;
    case "ArrowDown":
      downBoll();
      break;
    case "ArrowUp":
      upBoll();
      break;
  }
};
