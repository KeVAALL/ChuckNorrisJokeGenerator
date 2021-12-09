document.querySelector(".get-jokes").addEventListener("click", getJokes);

function getJokes(e) {
  const number = document.querySelector('input[type="number"]').value;

  const xhr = new XMLHttpRequest();

  xhr.open("GET", `http://api.icndb.com/jokes/random/${number}`, true);

  xhr.onload = function () {
    if (xhr.status === 200) {
      const response = JSON.parse(this.response);

      let output = "";
      // let list = document.createElement("li");

      if (response.type === "success") {
        response.value.forEach(function (joke) {
          output += `<li>${joke.joke}</li>`;
          //   let list = document.createElement("li");
          //   list.innerHTML = joke.joke;
          //   document.querySelector(".jokes").appendChild(list);
        });
      } else {
        // list.innerHTML = "Something went wrong";
        output += "Something went wrong";
      }

      document.querySelector(".jokes").innerHTML = output;
    }
  };

  xhr.send();

  e.preventDefault();
}
