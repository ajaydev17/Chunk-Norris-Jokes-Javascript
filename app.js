// button submit listener

document.querySelector(".get-jokes").addEventListener("click", getChunksJokes);

// Get Chunk Norris Jokes

function getChunksJokes(event) {
    // get number of jokes want

    const numberOfJokes = document.querySelector("input[type=number]").value;

    // get xmlhttp object

    const xhr = new XMLHttpRequest();
    xhr.open("GET", `http://api.icndb.com/jokes/random/${numberOfJokes}`, true);
    xhr.onload = () => {
        if (xhr.status === 200) {
            let output = "";

            const response = JSON.parse(xhr.responseText);

            if (response.type === "success") {
                response.value.forEach((val) => {
                    output += `<li>${val.joke}</li>`;
                });
            } else {
                output += "<li>Something went wrong!</li>";
            }

            // put the list elements in ul

            document.querySelector(".header").style.display = "block";
            document.querySelector(".jokes").innerHTML = output;
        }
    };
    xhr.send();

    event.preventDefault();
}
