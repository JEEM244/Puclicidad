function validarFormulario() {
    // Obtener los valores de los campos
    const nombre = document.getElementById("nombre").value;
    const apellido = document.getElementById("apellido").value;
    const edad = document.getElementById("edad").value;
    const email = document.getElementById("email").value;
    const rfc = document.getElementById("rfc").value;
    const sexo = document.getElementById("sexo").value;
    const estadoCivil = document.querySelector('input[name="estadoCivil"]:checked');
    const habilidades = document.querySelectorAll('input[name="habilidades"]:checked');
    const unidad = document.getElementById("unidad").value;

    // Validación de campos obligatorios
    if (nombre === "" || apellido === "" || edad === "" || email === "" || rfc === "" || sexo === "" || !estadoCivil || unidad === "") {
        alert("Por favor, completa todos los campos obligatorios.");
        return false;
    }

    // Validación del formato del RFC (se puede personalizar según las reglas específicas)
    const rfcRegex = /^[A-ZÑ&]{3,4}\d{6}[A-Z0-9]{3}$/;
    if (!rfcRegex.test(rfc)) {
        alert("El RFC no tiene un formato válido.");
        return false;
    }

    // Validación de la edad (debe ser entre 18 y 100 años)
    if (edad < 18 || edad > 100) {
        alert("La edad debe estar entre 18 y 100 años.");
        return false;
    }

    // Mostrar los datos capturados
    mostrarDatos(nombre, apellido, edad, email, rfc, sexo, estadoCivil.value, habilidades, unidad);

    // Evitar el envío del formulario (para mostrar los datos en la misma página)
    return false;
}

function mostrarDatos(nombre, apellido, edad, email, rfc, sexo, estadoCivil, habilidades, unidad) {
    // Mostrar el resultado
    const resultadoDiv = document.getElementById("resultado");
    resultadoDiv.style.display = "block"; // Hacer visible el div de resultados

    // Asignar los valores a los elementos correspondientes
    document.getElementById("resNombre").textContent = nombre;
    document.getElementById("resApellido").textContent = apellido;
    document.getElementById("resEdad").textContent = edad;
    document.getElementById("resEmail").textContent = email;
    document.getElementById("resRfc").textContent = rfc;
    document.getElementById("resSexo").textContent = sexo;
    document.getElementById("resEstadoCivil").textContent = estadoCivil;
    
    // Mostrar las habilidades seleccionadas
    const habilidadesArray = [];
    habilidades.forEach(habilidad => {
        habilidadesArray.push(habilidad.value);
    });
    document.getElementById("resHabilidades").textContent = habilidadesArray.join(", ");
    
    document.getElementById("resUnidad").textContent = unidad;
}
