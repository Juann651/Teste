
let cars = [' corola', ' uno', ' brasilia', ' sandeiro', ' ka', ' gol'];
let text = "";
for (let i = 0; i < cars.length; i++) {
    text += "carro-" + i + cars[i] + "<br>";
}
document.getElementById("Carros").innerHTML = text;