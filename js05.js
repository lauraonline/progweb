const n1 = document.querySelector("#n1");
const n2 = document.querySelector("#n2");
const somar = document.querySelector("#somar");
const resultado = document.querySelector("#resultado");

somar.addEventListener("click", function () {
    const valor1 = parseFloat(n1.value);
    const valor2 = parseFloat(n2.value);

    if (isNaN(valor1) || isNaN(valor2)) {
        resultado.textContent = "Por favor, insira números válidos.";
        resultado.style.color = "red";
    } else {
        resultado.textContent = `Resultado: ${valor1 + valor2}`;
        resultado.style.color = "black";
    }
});
