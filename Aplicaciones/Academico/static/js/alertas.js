document.addEventListener("DOMContentLoaded", function () {
	iniciarApp();
});

function iniciarApp() {
	alertas(); // Llama a la función que configura las alertas de eliminar y actualizar cursos
}
function alertas() {
	configurarEliminarCurso();
	configurarActualizarCurso();
}

function configurarEliminarCurso() {
	const btnEliminacion = document.querySelectorAll(".btnEliminacion");

	btnEliminacion.forEach((btn) => {
		btn.addEventListener("click", (e) => {
			e.preventDefault(); // Prevenir el comportamiento por defecto del enlace

			const url = btn.getAttribute("href"); // Obtener la URL de eliminación desde el atributo href

			// Mostrar el modal de SweetAlert2 para eliminar curso
			Swal.fire({
				title: "¿Estás seguro de eliminar el curso?",
				text: "Una vez eliminado, no podrás recuperarlo.",
				icon: "warning",
				showCancelButton: true,
				confirmButtonColor: "#3085d6",
				cancelButtonColor: "#d33",
				confirmButtonText: "Sí, eliminarlo",
				cancelButtonText: "Cancelar",
			}).then((result) => {
				if (result.isConfirmed) {
					// Si el usuario confirma, redirigir a la URL de eliminación
					window.location.href = url;
				}
			});
		});
	});
}

function configurarActualizarCurso() {
	const btnActualizar = document.querySelector(".btnActualizar");

	if (btnActualizar) {
		btnActualizar.addEventListener("click", (e) => {
			e.preventDefault(); // Prevenir el comportamiento por defecto del formulario

			// Mostrar el modal de SweetAlert2 para actualizar curso
			Swal.fire({
				title: "¿Estás seguro de actualizar el curso?",
				text: "Una vez actualizado, los cambios no se podrán deshacer.",
				icon: "question",
				showCancelButton: true,
				confirmButtonColor: "#3085d6",
				cancelButtonColor: "#d33",
				confirmButtonText: "Sí, actualizar",
				cancelButtonText: "Cancelar",
			}).then((result) => {
				if (result.isConfirmed) {
					// Si el usuario confirma, enviar el formulario
					document.getElementById("formActualizarCurso").submit();
				}
			});
		});
	}
}
