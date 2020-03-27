const button = document.querySelector("button");
async function actionFromModule(e) {
    e.preventDefault();
    const pressButton = await import("./moduleDynamic.js");
    console.log(pressButton.default());
}
button.addEventListener("click", actionFromModule);