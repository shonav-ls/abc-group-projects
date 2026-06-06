function changeColor(element) {

    let colors = ["green", "blue", "red"];

    let randomColor =
        colors[Math.floor(Math.random() * colors.length)];

    element.style.color = randomColor;
}