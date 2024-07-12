const solicitante = prompt("Ingrese su nombre")

function saludarSolicitante() {
    alert("¡Bienvenido/a " + solicitante + ", sigue los pasos para encontrar mas informacion!")
}

saludarSolicitante()

let option;
do {
    option = parseInt(prompt("Solicita información para:\n\n1) Almacén de plantas\n2) Actividades\n3) Talleres\n\n Ingrese 4 para salir."));

    if (option === 1) {
        let primerMensaje = "Almacén de plantas\n\nAbelia (maceta 17 cm) (13,50 €)\n\nAcer Katsura(maceta 19 cm) (27,95€)\n\nAdiantum fragans(maceta 12 cm) (6,85€)\n\nAgave Angustiflolia(maceta 13 cm) (7€)\n\nAlbahaca morada (2,50 €)\n\nBoronia (maceta 19 cm) (15,50 €)\n\nCarnívora Nepenthes (maceta 13 cm) (27,75 €)";
        alert(primerMensaje);
    } else if (option === 2) {
        let segundoMensaje = "Viví experiencias únicas en las siguientes actividades:\n\nMujeresPalmonte Domingos 9 a 12hs (10 €/dia)\n\nMujeresOm Jueves 18 a 20hs(15 €/dia)";
        alert(segundoMensaje);
    } else if (option === 3) {
        let tercerMensaje = " Estos son nuestros Talleres:\n\nHuerta Orgánica:\nLunes y Miércoles 10 a 12hs (50 €/mes)\n\nSahumos:\nMartes y Jueves 09 a 11hs (30 €/mes)\n\nTinturas Madres:\nSábados 10 a 12hs(35 €/mes)";
        alert(tercerMensaje);
    } else if (option === 4) {
        alert("Gracias por tu visita " + solicitante + "\n esperamos verte pronto!")
    } else {
        alert("Por favor ingrese una opción válida para continuar.")
    }
} while (option !== 4);