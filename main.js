function convertirDecimal() {
    let num = document.getElementById("decimal").value;
    document.getElementById("binario").textContent = Number(num).toString(2);
    document.getElementById("octal").textContent = Number(num).toString(8);
    document.getElementById("hexadecimal").textContent = Number(num).toString(16).toUpperCase();
}

function convertirBinario() {
    let binario = document.getElementById("binarioInput").value;
    let decimal = parseInt(binario, 2);
    document.getElementById("decimalResultado").textContent = isNaN(decimal) ? "Entrada inválida" : decimal;
}
