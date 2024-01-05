const fs = require("fs");

try {
	// LECTURA
	try {
		const readData = fs.readFileSync("./example.txt", "utf-8");
		console.log("Resultado de archivo 'example.txt': \n", readData);
	} catch (err) {
		// SI NO EXISTE EL ARCHIVO ENTRA EN EL 'CATCH' Y LO CREAMOS
		console.error("¡No se puede leer un archivo que no existe...!");
		fs.writeFileSync("./example.txt", "");
		console.log("Archivo creado correctamente.");
	}

	// ESCRITURA
	fs.writeFileSync("./example.txt", ">ARCHIVO SOBREESCRITO COMPLETAMENTE");
	console.log("Archivo sobreescrito correctamente.");

	// ACTUALIZACION
	fs.appendFileSync("./example.txt", "\n>ESTA LINEA FUE AGREGADO CON appendFileSync");
	console.log("Texto agregado correctamente.");

	// NUEVA LECTURA
	const newReading = fs.readFileSync("./example.txt", "utf-8");
	console.log("Resultado de archivo 'example.txt': \n", newReading);

	// BORRADO
	fs.unlinkSync("./example.txt");
	console.log("Archivo eliminado correctamente.");
	// CREAR NUEVO DIRECTORIO
	fs.mkdirSync("./newFolder");
	console.log("Carpeta creada correctamente.");

	// CREAMOS ARCHIVO DENTRO DEL DIRECTORIO
	fs.writeFileSync("./newFolder/newText.txt", ">ESTE ES UN TEXTO DE EJEMPLO PARA EL ARCHIVO 'newText.txt'");
	console.log("Archivo creado correctamente.");

	// LECTURA DEL NUEVO ARCHIVO
	const readDataOnFolder = fs.readFileSync("./newFolder/newText.txt", "utf-8");
	console.log("Resultado de archivo 'newText.txt': \n", readDataOnFolder);

	// LEER DIRECTORIO
	const files = fs.readdirSync("./newFolder");
	console.log("Resultado de lectura del directorio 'newFolder': ", files);

	// BORRAMOS EL ARCHIVO DEL NUEVO DIRECTORIO
	fs.unlinkSync("./newFolder/newText.txt");
	console.log("Archivo eliminado correctamente.");

	// BORRAMOS DIRECTORIO
	fs.rmdirSync("./newFolder");
	console.log("Directorio eliminado correctamente.");
} catch (err) {
	console.error(err);
}
