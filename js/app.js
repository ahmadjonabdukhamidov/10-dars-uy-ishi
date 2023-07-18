let space = document.querySelector("#space");
let enters = document.querySelector("#enters");
let push = document.querySelector(".hero-btn");
let ntReset = document.querySelector("#hero-div");

/*push.addEventListener("click", () => {
  if (space.value.length == 0) {
    alert("Hali ma'lumot kiritmadizngiz!!!");
  } else {
    enters.innerHTML += `
  <div class="enter">
  <span id="enterName">${space.value}</span>
  <button id="delete">
  <i class="fa-solid fa-minus"></i>
  </button>
  </div>
  `;
    space.value = "";
    let deleteText = document.querySelector(".delete");
    for (let i = 0; i < deleteText.length; i++) {
      deleteText[i].onclick = function () {
        this.parentElement.parentElement.remove();
      };
    }
  }
});*/
enters.addEventListener("submit", (e) => {
  e.preventDefault;
});

ntReset.addEventListener("submit", (e) => {
  e.preventDefault();
});

push.addEventListener("click", () => {
  if (space.value.length == 0) {
    alert("Hali ma'lumot kiritmadizngiz! Iltimos ma'lumot kiriting!");
  } else {
    enters.innerHTML += `
    <div class="enter">
    <span id="taskname">
        ${space.value}
        </span>
        <button class="delete" id="delete">
        <i class="fa-solid fa-minus"></i>
        </button>
        </div>
    `;
    space.value = "";
    let deleteText = document.getElementById("delete");
    for (let i = 0; i < deleteText.length; i++) {
      deleteText[i].onclick = function () {
        // this.parentElement.remove();
      };
    }
  }
});
