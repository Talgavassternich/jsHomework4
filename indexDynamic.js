const button = document.querySelector("button");
async function actionFromModule(e) {
    e.preventDefault();
    let pressButton = await import("./moduleDynamic.js");
    console.log(pressButton.default());
}
button.addEventListener("click", actionFromModule);