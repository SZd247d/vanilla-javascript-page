const time = document.getElementById("time");
const greeting = document.getElementById("greeting");
const userName = document.getElementById("userName");
const userFocus = document.getElementById("userFocus");

function showTime() {
  const currentTime = new Date();
  let hour = currentTime.getHours();
  const min = currentTime.getMinutes();
  const sec = currentTime.getSeconds();

  const isAmPm = hour < 12 ? "AM" : "PM";

  hour = hour % 12 || 12;

  time.innerText = `${hour}:${addZero(min)}:${addZero(sec)} ${isAmPm}`;

  setTimeout(showTime, 1000);
}

const addZero = (time) => {
  return time < 10 ? "0" + time : time;
};

function setBgGreet() {
  const currentTime = new Date();
  let hour = currentTime.getHours();

  if (hour < 12) {
    document.body.style.backgroundImage = "url('images/morning.jpg')";
    document.body.style.backgroundPosition = "center";
    document.body.style.backgroundSize = "cover";

    greeting.innerText = "Good Morning";
  } else if (hour <= 18) {
    document.body.style.backgroundImage = "url('images/afternoon.jpg')";
    document.body.style.backgroundPosition = "center";
    document.body.style.backgroundSize = "cover";

    greeting.innerText = "Good Afternoon";
  } else {
    document.body.style.backgroundImage = "url('images/night.jpg')";
    document.body.style.backgroundPosition = "center";
    document.body.style.backgroundSize = "cover";

    greeting.innerText = "Good Night";
    document.body.style.color = "white";
  }
}

function getName() {
  const nameInStorage = localStorage.getItem("userName")
    ? localStorage.getItem("userName")
    : "[Enter Name]";
  userName.innerText = nameInStorage;
}

function setName(e) {
  if (e.type == "keypress") {
    if (e.keyCode == 13) {
      localStorage.setItem("userName", e.target.innerText);
      userName.blur();
    }
  } else {
    localStorage.setItem("userName", e.target.innerText);
  }
}

function getFocus() {
  const focusInStorage = localStorage.getItem("userFocus")
    ? localStorage.getItem("userFocus")
    : "[Enter Focus]";
  userFocus.innerText = focusInStorage;
}

function setFocus(e) {
  if (e.type == "keypress") {
    if (e.keyCode == 13) {
      localStorage.setItem("userFocus", e.target.innerText);
      userFocus.blur();
    }
  } else {
    localStorage.setItem("userFocus", e.target.innerText);
  }
}

userName.addEventListener("keypress", setName);
userName.addEventListener("blur", setName);

userFocus.addEventListener("keypress", setFocus);
userFocus.addEventListener("blur", setFocus);

showTime();
setBgGreet();
getName();
setName();
getFocus();
setFocus();
