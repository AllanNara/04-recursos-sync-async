const fs = require("fs");

// CREAMOS EL ARCHIVO DE ANTEMANO PARA SIMPLIFICAR EL CODIGO
fs.writeFile("./example.txt", "", (err) => {
	if (err) return console.log(err);
	console.log("Archivo creado correctamente.");
	// ESCRITURA
	fs.writeFile("./example.txt", ">ARCHIVO SOBREESCRITO COMPLETAMENTE", (err) => {
		if (err) return console.log(err);
		console.log("Archivo sobreescrito correctamente.");
		// ACTUALIZACION
		fs.appendFile("./example.txt", "\n>ESTA LINEA FUE AGREGADO CON appendFile", (err) => {
			if (err) return console.log(err);
			console.log("Texto agregado correctamente.");
			// LECTURA
			fs.readFile("./example.txt", "utf-8", (err, data) => {
				if (err) return console.log(err);
				console.log("Resultado de archivo 'example.txt': \n", data);
				// BORRADO
				fs.unlink("./example.txt", (err) => {
					if (err) return console.log(err);
					console.log("Archivo eliminado correctamente.");
					// CREAR NUEVO DIRECTORIO
					fs.mkdir("./newFolder", (err) => {
						if (err) return console.log(err);
						console.log("Carpeta creada correctamente.");
						// CREAMOS ARCHIVO DENTRO DEL DIRECTORIO
						fs.writeFile("./newFolder/newText.txt", ">ESTE ES UN TEXTO DE EJEMPLO PARA EL ARCHIVO 'newText.txt'", (err) => {
							if (err) return console.log(err);
							console.log("Archivo creado correctamente.");
							// LECTURA DEL NUEVO ARCHIVO
							fs.readFile("./newFolder/newText.txt", "utf-8", (err, data) => {
								if (err) return console.log(err);
								console.log("Resultado de archivo 'newText.txt': \n", data);
								// LEER DIRECTORIO
								fs.readdir("./newFolder", (err, data) => {
									if (err) return console.log(err);
									console.log("Resultado de lectura del directorio 'newFolder': ", data);
									// BORRAMOS EL ARCHIVO DEL NUEVO DIRECTORIO
									fs.unlink("./newFolder/newText.txt", (err) => {
										if (err) return console.log(err);
										console.log("Archivo eliminado correctamente.");
										// BORRAMOS DIRECTORIO
										fs.rmdir("./newFolder", (err) => {
											if (err) return console.log(err);
											console.log("Directorio eliminado correctamente.");
										});
									});
								});
							});
						});
					});
				});
			});
		});
	});
});
