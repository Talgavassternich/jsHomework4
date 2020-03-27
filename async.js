const button = document.querySelector("button");
button.addEventListener("click", (e) => {
   e.preventDefault();
    (async function getData() {
        try {
            const data = await fetch("https://swapi.co/api/people/");
            const result = await data.json();
            console.log(result);
        } catch(err) {
            console.log("Couldn't fetch data!");
            console.log(err);
        }
    })();
});