function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

function showGif1() {
  document.getElementById('myImage1').src = './assets/project-1.gif';
}

function showImage1() {
  document.getElementById('myImage1').src = './assets/1.png';
}

function showGif2() {
  document.getElementById('myImage2').src = './assets/project-2.gif';
}

function showImage2() {
  document.getElementById('myImage2').src = './assets/2.png';
}

function showGif3() {
  document.getElementById('myImage3').src = './assets/project-3.gif';
}

function showImage3() {
  document.getElementById('myImage3').src = './assets/3.png';
}

function showGif4() {
  document.getElementById('myImage4').src = './assets/project-4.gif';
}

function showImage4() {
  document.getElementById('myImage4').src = './assets/4.png';
}

//  here
async function copyToClipboard() {
  const phoneNumber = document.getElementById("phoneNumber").textContent;
  try {
    await navigator.clipboard.writeText(phoneNumber);
    // alert("Phone number copied to clipboard!");
  } catch (err) {
    // alert("Failed to copy text: " + err);
  }
}


var words = [
  "Web Developer", 
  "Problem Solver",  
  "frontend Engineer",
  "backend Engineer"
],
part,
i = 0,
offset = 0,
len = words.length,
forwards = true,
skip_count = 0,
skip_delay = 15,
speed = 70;

var wordflick = function () {
setInterval(function () {
  if (forwards) {
    if (offset >= words[i].length) {
      ++skip_count;
      if (skip_count == skip_delay) {
        forwards = false;
        skip_count = 0;
      }
    }
  } else {
    if (offset == 0) {
      forwards = true;
      i++;
      offset = 0;
      if (i >= len) {
        i = 0;
      }
    }
  }
  part = words[i].substr(0, offset);
  if (skip_count == 0) {
    if (forwards) {
      offset++;
    } else {
      offset--;
    }
  }
  $('.word').text("I'm a " + part);
}, speed);
};

$(document).ready(function () {
wordflick();
});
