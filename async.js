const button = document.querySelector("button");
button.addEventListener("click", (e) => {
   e.preventDefault();
    (async function getData() {
        try {
            const data = await fetch("https://swapi.co/api/people/");
            data.json().then((data) => {
               console.log(data);
            });
        } catch(err) {
            console.log("Couldn't fetch data!");
            console.log(err);
        }
    })();
});