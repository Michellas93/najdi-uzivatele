const result = document.querySelector(".user-list");
const input = document.querySelector(".input-header");
const userList = [];
getData();
input.addEventListener("input", function (event) {
  dataFilter(event.target.value);
});

async function getData() {
  const allUsers = await fetch("https://randomuser.me/api?results=200");
  const data = await allUsers.json();
  result.innerHTML = "";

  data.results.forEach(function (users) {
    const li = document.createElement("li");
    li.innerHTML = `
    <img src="${users.picture.large}" alt="${users.name.first}">
    <div class="user-information">
    <h3>${users.name.first} ${users.name.last}</h3>
   <p>${users.location.city}, ${users.location.country}</p>
    </div>`;
    result.appendChild(li);
    userList.push(li);
  });
}

function dataFilter(inputText) {
  userList.forEach((userOne) => {
    if (userOne.innerText.toLowerCase().includes(inputText.toLowerCase())) {
      userOne.classList.remove("hide");
    } else {
      userOne.classList.add("hide");
    }
  });
}
