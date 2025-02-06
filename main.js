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






    // Referencias a los elementos
    document.addEventListener("DOMContentLoaded", function() {
        const btnAyuda = document.getElementById("btn-ayuda");
        const modal = document.getElementById("modal-ayuda");
        const closeModal = document.querySelector(".close");

        // Mostrar el modal cuando se hace clic en "Ayuda"
        btnAyuda.addEventListener("click", function(event) {
            event.preventDefault(); // Evita que el enlace recargue la página
            modal.style.display = "flex";
        });

        // Cerrar el modal cuando se hace clic en la "X"
        closeModal.addEventListener("click", function() {
            modal.style.display = "none";
        });

        // Cerrar el modal si el usuario hace clic fuera de la tarjeta
        window.addEventListener("click", function(event) {
            if (event.target === modal) {
                modal.style.display = "none";
            }
        });
    });

