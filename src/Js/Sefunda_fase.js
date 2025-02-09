
function calcularHost() {
    const ip = document.getElementById("ipInput").value;
    const mask = parseInt(document.getElementById("maskInput1").value);
    const resultado = document.getElementById("resultadoHost");

    if (!ip || isNaN(mask) || mask < 8 || mask > 30) {
        resultado.textContent = "Por favor, ingresa valores válidos.";
        return;
    }

    const octetos = ip.split(".").map(Number);
    if (octetos.length !== 4 || octetos.some(num => num < 0 || num > 255)) {
        resultado.textContent = "Formato de IP no válido.";
        return;
    }

    const bitsHost = 32 - mask;
    const totalHosts = Math.pow(2, bitsHost) - 2;
    const numHost = (octetos[1] * 65536) + (octetos[2] * 256) + octetos[3];

    if (numHost < 1 || numHost > totalHosts) {
        resultado.textContent = `Número de host fuera de rango. Máximo permitido: ${totalHosts}.`;
        return;
    }

    resultado.textContent = `El número de host de la IP ${ip}/${mask} es: ${numHost}`;
}

function calcularIP() {
    const red = document.getElementById("redInput").value;
    const mask = parseInt(document.getElementById("maskInput2").value);
    const hostNumber = parseInt(document.getElementById("hostInput").value);
    const resultado = document.getElementById("resultadoIP");

    if (!red || isNaN(mask) || isNaN(hostNumber) || mask < 8 || mask > 30) {
        resultado.textContent = "Por favor, ingresa valores válidos.";
        return;
    }

    const octetos = red.split(".").map(Number);
    if (octetos.length !== 4 || octetos.some(num => num < 0 || num > 255)) {
        resultado.textContent = "Formato de red no válido.";
        return;
    }

    const bitsHost = 32 - mask;
    const totalHosts = Math.pow(2, bitsHost) - 2;

    if (hostNumber < 1 || hostNumber > totalHosts) {
        resultado.textContent = `Número de host fuera de rango. Máximo permitido: ${totalHosts}.`;
        return;
    }

    let oct2 = Math.floor(hostNumber / 65536);
    let resto = hostNumber % 65536;
    let oct3 = Math.floor(resto / 256);
    let oct4 = resto % 256;

    let ipCalculada = `${octetos[0]}.${oct2}.${oct3}.${oct4}`;
    resultado.textContent = `La IP del host ${hostNumber} en la red ${red}/${mask} es: ${ipCalculada}`;
}

